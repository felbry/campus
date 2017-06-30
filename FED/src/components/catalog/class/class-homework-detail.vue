<template>
    <div class="ui one column grid">
        <h2 class="ui header">
            <i class="tag icon"></i>
            <div class="content">
                {{homework.course ? homework.course.name : ''}}
                <div class="sub header">
                    截止 {{new Date(homework.deadline).toLocaleDateString()}} {{new Date(homework.deadline).getHours()}}时
                </div>
            </div>
        </h2>
        <div v-html="homework.content" class="ui blue message"></div>
        <div class="homework-btn">
            <!-- <a class="ui basic label">您上次提交作业的时间为： <br/>10:15</a> -->
            <button @click="showSelectBox" class="huge ui right floated black button">上传作业</button>
        </div>
        <div v-show="files.length" class="ui progress">
            <!-- <div class="bar">
                <div class="progress"></div>
            </div> -->
            <file @filesInfo="getFiles"
                  @response="getFileResponse"
                  :uploading="uploading"
                  :activeSelectBox="activeSelectBox"
                  :formData="formData"></file>
            <div v-if="!uploadDone" class="label">
                {{uploading ? '正在' : '准备'}} 上传文件：{{files.length ? files[0].name : ''}} - {{'大小： ' + ((files.length ? files[0].size : 0) / (1024 * 1024)).toFixed(2) + 'M'}}
                <button @click="uploadFiles"
                        v-if="!uploading" class="ui compact icon teal button">
                    <i class="play icon"></i>
                </button>
                <button @click="uploadFiles"
                        v-if="uploading" class="ui compact icon teal button">
                    <i class="pause icon"></i>
                </button>
            </div>
            <div v-if="uploadDone && timing" class="label">
                上传{{uploadErrMsg ? '失败' : '成功'}}，将在 {{timer}} 秒后隐藏。
            </div>
        </div>
        <div class="commit-activity">
            <h3 class="ui orange header">动态</h3>
            <div v-if="!committers.length" class="ui feed">还未有同学提交作业</div>
            <div v-for="item in committers" class="ui feed">
                <div class="event">
                    <div class="content">
                        <div class="summary">
                            <a>{{item.stu.realName}}</a> 于 <a>{{item.createdAt}}</a> 提交了作业。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../../../config';
import Fetch from '../../../assets/tools/fetchWithToken';
import file from '../../universal/file';
// import { mapState } from 'vuex';

export default {
    name: 'homework-detail',
    beforeRouteEnter(to, from, next) {
        if (to.query.id) {
            Fetch.get(config.url + '/api/class/homework/' + to.query.id).then(res => {
                if (res.msg) {
                    alert(res.msg);
                    next('/class/homework');
                }
                next(vm => {
                    vm.homework = res.homework;
                });
            });
        } else {
            alert('请选定一个作业以查看详情');
            next('/class/homework');
        }
    },
    data () {
        return {
            homework: {},
            committers: [],
            // 上传文件 start
            files: [],
            formData: {},
            uploading: false,
            activeSelectBox: false,
            uploadDone: false,
            uploadErrMsg: false,
            timing: false,
            timer: 3,
            // 上传文件 end
        }
    },
    mounted () {
        this.getHomeworkCommitter();
    },
    // computed: mapState({
    //     homework: state => state.homework,
    // }),
    methods: {
        showSelectBox () {
            if (this.uploading) {
                alert('当前有文件正在上传，请稍等');
                return ;
            }
            this.activeSelectBox = true;
        },
        getFiles (files) {
            this.$set(this.files, 0, files[0]);
            this.activeSelectBox = false;
        },
        getFileResponse (res) {
            if (!res.msg) {
                this.getHomeworkCommitter();

                this.uploadDone = true;
                this.timing = true;
                let inter = setInterval(() => {
                    if (this.timer > 0) {
                        this.timer--;
                    } else {
                        clearInterval(inter);
                        // reset
                        this.files = [];
                        this.timing = false;
                        this.uploading = false;
                        this.uploadDone = false;
                        this.timer = 3;
                    }
                }, 1000);
            } else {
                this.uploadErrMsg = true;
                this.uploadDone = true;
                this.timing = true;
                let inter = setInterval(() => {
                    if (this.timer > 0) {
                        this.timer--;
                    } else {
                        clearInterval(inter);
                        // reset
                        this.files = [];
                        this.timing = false;
                        this.uploading = false;
                        this.uploadDone = false;
                        this.uploadErrMsg = false;
                        this.timer = 3;
                    }
                }, 1000);
            }
        },
        uploadFiles () {
            if (!this.uploading) {
                var formData = new FormData();
                formData.set('id', this.homework._id);
                formData.set('file', this.files[0], this.files[0].name);
                this.formData = formData;

                this.uploading = true;
            } else {
                alert('Fetch暂不支持中断上传');
            }
        },
        getHomeworkCommitter () {
            Fetch.get(config.url + '/api/class/homeworkCommitter/' + this.$route.query.id).then(res => {
                this.committers = res.committers;
            });
        },
    },
    components: {
        file
    }
}
</script>

<style lang="css" scoped>
    .message {
        width: 95%;
        min-height: 150px;
    }

    .homework-btn {
        width: 95%;
        margin-bottom: 15px;
    }

    .progress {
        /*display: none;*/
        width: 95%;
    }

    .compact {
        margin-left: 10px;
    }

    .progress .label {
        margin-top: 12px;
    }

    .commit-activity {
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid #666;
        width: 95%;
    }
</style>
