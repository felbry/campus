<template>
    <div class="ui centered grid">
        <div class="ui modal">
            <div class="ui menu">
                <div class="header item">选择要添加的内容</div>
                <a @click="showDiscuss"
                   :class="{active: modalFormIdx == 0}" class="item">讨论</a>
                <!-- v-if="userInfo.classStatus != '学生'" -->
                <!-- <a @click="showHomework"
                   :class="{active: modalFormIdx == 1}"
                   class="item">作业</a>
                <a @click="showResource"
                   :class="{active: modalFormIdx == 2}"
                   class="item">资源</a> -->
            </div>
            <div class="ui centered grid">
                <div class="fifteen wide column">
                    <!-- form1 -->
                    <div v-if="modalFormIdx == 0" class="ui form modal-form">
                        <div class="field">
                            <label for="">标题</label>
                            <input type="text" placeholder="标题应尽量简洁，包含内容相关的关键字">
                        </div>
                        <div class="inline fields">
                            <label for="fruit">选择类别</label>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" tabindex="0" class="hidden" checked="true">
                                    <label>作业</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" tabindex="1" class="hidden" disabled="disabled">
                                    <label>课堂互动</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" tabindex="2" class="hidden" disabled="disabled">
                                    <label>班级秘密</label>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" tabindex="3" class="hidden" disabled="disabled">
                                    <label>更多归类 敬请期待</label>
                                </div>
                            </div>
                        </div>
                        <div v-if="discussType == 0" class="field">
                            <label>作业</label>
                            <div class="ui selection dropdown">
                                <input type="hidden" name="gender">
                                <i class="dropdown icon"></i>
                                <div class="default text">请选择一项作业</div>
                                <div class="menu">
                                    <!-- <div v-for="(item, idx) in discussHomeworkArr"
                                         :data-value="idx" class="item">{{item.course.name}}
                                    </div> -->
                                    <div class="item" data-value="1">
                                        hahahaha
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label>描述</label>
                            <textarea></textarea>
                        </div>
                        <button @click="hiddenModal" class="ui button" type="button">取消</button>
                        <button @click="discussSubmit" class="ui green button" type="button">提交</button>
                    </div>
                    <!-- form2 -->
                    <!-- <div v-if="modalFormIdx == 1" class="ui form modal-form">
                        <div class="field">
                            <label for="">标题</label>
                            <input type="text" placeholder="填写相关课程科目信息">
                        </div>
                        <div class="field">
                            <label>描述</label>
                            <textarea></textarea>
                        </div>
                        <button @click="hiddenModal" class="ui button" type="button">取消</button>
                        <button @click="homeworkSubmit" class="ui green button" type="button">提交</button>
                    </div> -->
                    <!-- form3 -->
                    <!-- <div v-if="modalFormIdx == 2" class="ui form modal-form">
                        <div class="field">
                            暂未开放
                        </div>
                        <button @click="hiddenModal" class="ui button" type="button">取消</button>
                        <button @click="resourceSubmit" class="ui green button" type="button">提交</button>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="eight wide column">
            <div class="ui grid">
                <div class="two wide column">
                    <div class="ui vertical text menu">
                        <router-link to="/class/all" active-class="active" class="item">动态</router-link>
                        <router-link to="/class/homework" active-class="active" class="item">作业</router-link>
                        <router-link to="/class/discuss" active-class="active" class="item">讨论</router-link>
                        <!-- <router-link to="/class/resource" active-class="active" class="item">资源</router-link> -->
                    </div>
                </div>
                <div class="fourteen wide stretched column">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="four wide column">
            <div class="ui cards">
                <div class="card">
                    <div class="content">
                        <div class="header">
                            {{userInfo.realName ? userInfo.realName : 'undefined'}}({{userInfo.classStatus}})
                            <button @click="showModal" class="ui mini orange circular icon button add-btn">
                                <i class="plus icon"></i>
                            </button>
                        </div>
                        <div v-if="!userInfo.realName" class="meta">请尽快完善个人信息，以便给您提供更好的体验。</div>
                    </div>
                    <div class="extra content">
                        <div class="ui three buttons">
                            <div class="ui basic green button">成就1</div>
                            <div class="ui basic red button">成就2</div>
                            <div class="ui basic yellow button">成就3</div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="ui header">
                <i class="student icon"></i>
                <div class="content">
                    {{classInfo.profession}}<br/>
                    {{classInfo.grade}}级 {{classInfo.cid}}班 成员
                </div>
            </h3>
            <div class="ui divided selection list">
                <a v-for="item in currentMemberInfo" class="item">
                    <div :class="{
                        grey: item.classStatus == '学生',
                        orange: item.classStatus == '班长',
                        yellow: item.classStatus == '团支书',
                        olive: item.classStatus == '学习委员',
                        green: item.classStatus == '文艺委员',
                        teal: item.classStatus == '体育委员',
                        }" class="ui horizontal label status-label">{{item.classStatus}}</div>{{item.realName}}
                </a>
                <a v-if="!(currentMemberInfo.length == memberInfo.length)"
                   @click.prevent="this.currentMemberInfo = this.memberInfo" class="item">
                    <div class="ui grey horizontal label status-label status-label-hidden"></div>显示全部
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../config';
import Fetch from '../assets/tools/fetchWithToken';

export default {
    name: 'classHome',
    beforeRouteEnter(to, from, next) {
        Fetch.get(config.url + '/api/class/userInfo').then(res => {
            next(vm => {
                vm.userInfo = res.userInfo;
            });
        });
    },
    data() {
        return {
            userInfo: {},
            classInfo: {},
            currentMemberInfo: [],
            memberInfo: [],
            // modal
            modalFormIdx: 0,
            // 添加讨论 start
            discussTitle: null,
            discussType: 0,
            discussHomeworkArr: null,
            discussHomework: null,
            discussDescribe: null,
            // 添加讨论 end
            homeworkCategory: null,
            homeworkDeadlineYear: 0,
            homeworkDeadlineMonth: 0,
            homeworkDeadlineDay: 0,
            homeworkDeadlineHour: 0,
            homeworkDescribe: null,
        }
    },
    mounted() {
        var that = this;
        $('.ui.radio.checkbox').checkbox({
            onChecked: function () {
                that.discussType = $(this)[0].getAttribute('tabindex');
            }
        });
        $('.ui.dropdown').dropdown({
            onShow: function () {
                console.log('coming');
                if (!that.discussHomeworkArr) {
                    Fetch.get(config.url + '/api/class/homework').then(res => {
                        that.discussHomeworkArr = res.homework;
                        console.log(that.discussHomeworkArr);
                    });
                }
            },
            onChange: function (v) {
                console.log(v);
                that.discussHomework = v;
            }
        });

        Fetch.get(config.url + '/api/class/info').then(res => {
            this.classInfo = res.classInfo;
        }, err => {
            console.error(err);
        }).then(() => {
            Fetch.get(config.url + '/api/class/memberInfo').then(res => {
                let committee = res.memberInfo.filter(function(val) {
                    return val.classStatus != '学生';
                });
                this.memberInfo = committee.concat(res.memberInfo);
                this.currentMemberInfo = this.memberInfo.map(function(val ,idx) {
                    if (idx < 10)
                        return val;
                });
            });
        }, err => {
            console.error(err);
        });

        $('.ui.modal').modal();
    },
    methods: {
        showModal() {
            $('.ui.modal').modal('show');
        },
        hiddenModal() {
            $('.ui.modal').modal('hide');
        },
        showDiscuss() {
            this.modalFormIdx = 0;
        },
        showHomework() {
            this.modalFormIdx = 1;
        },
        showResource() {
            this.modalFormIdx = 2;
        },
        discussSubmit() {
            Fetch.post(config.url + '/api/class/setDiscuss', {
                title: this.discussTitle,
                describe: this.discussDescribe
            }).then(res => {
                if (res.id) {
                    alert('提交成功');
                    this.hiddenModal();
                } else {
                    alert('提交失败，未知错误');
                }
            });
        },
        homeworkSubmit() {
            Fetch.post(config.url + '/api/class/setHomework', {
                title: this.discussTitle,
                describe: this.discussDescribe
            }).then(res => {
                if (res.id) {
                    alert('提交成功');
                    this.hiddenModal();
                } else {
                    alert('提交失败，未知错误');
                }
            });
        },
        resourceSubmit() {

        },
    },
}
</script>

<style lang="css" scoped>
    .status-label {
        min-width: 6em!important;
    }

    .status-label-hidden {
        visibility: hidden;
    }

    .add-btn {
        float: right;
    }

    .modal-form {
        padding-bottom: 15px;
    }
</style>
