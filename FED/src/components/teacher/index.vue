<template>
    <div>
        <div class="ui modal">
            <div class="ui centered grid">
                <div class="fifteen wide column">
                    <div class="ui form modal-form">
                        选择课程：
                        <select v-model="homeworkCourse">
                            <option v-for="(item, idx) in courseWithClass"
                                    :value="idx">{{item.course.name}}</option>
                        </select>
                        适用班级：
                        <div v-for="item in (courseWithClass[homeworkCourse] ? courseWithClass[homeworkCourse].classes : [])">
                            <input :value="item._id"
                                   v-model="classes" type="checkbox"/>
                            {{item.profession.name + item.grade + item.cid}}
                        </div>
                        截止时间：
                        <input v-model="deadlineDate" type="date"/>
                        <input v-model="deadlineHour" type="number"/>时
                        <div class="field">
                            <label>内容</label>
                            <textarea v-model="content"></textarea>
                        </div>
                        <button @click="hiddenModal" class="ui button" type="button">取消</button>
                        <button @click="homeworkSubmit" class="ui green button" type="button">提交</button>
                    </div>
                </div>
            </div>
        </div>
        欢迎来到[教师主页]
        <hr/>
        个人信息:<br/>
        {{teacherInfo.name}}
        <hr/>
        <button @click="showModal" type="button">发布作业</button>
        <hr/>
        <div v-for="item in courseWithClass">
            {{item.course.name}}：<br/>
            <table>
                <tr>
                    <th>班级</th>
                    <th>操作</th>
                </tr>
                <tr v-for="classItem in item.classes">
                    <td>{{classItem.profession.name + classItem.grade + classItem.cid}}</td>
                    <td><a @click.prevent="getHomework(item.course._id, classItem._id)">查看作业</a></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import config from '../../config';
import Fetch from '../../assets/tools/fetchWithToken';

export default {
    name: 'teacher-index',
    beforeRouteEnter (to, from, next) {
        Fetch.get(config.url + '/teacher/info').then(res => {
            next(vm => {
                vm.teacherInfo = res.teacherInfo;
            });
        });
    },
    data () {
        return {
            teacherInfo: {},
            courseWithClass: [],
            // homework: null,
            homeworkCourse: 0,
            // post homework
            course: null,
            classes: [],
            deadlineDate: null,
            deadlineHour: 12,
            content: null,
        }
    },
    mounted () {
        this.getCourseWithClass();
    },
    methods: {
        showModal () {
            $('.ui.modal').modal('show');
        },
        hiddenModal () {
            $('.ui.modal').modal('hide');
        },
        homeworkSubmit () {
            this.setHomework();
        },
        // get/post data
        getCourseWithClass () {
            Fetch.get(config.url + '/teacher/courseWithClass').then(res => {
                this.courseWithClass = res.courseWithClass;
            });
        },
        getHomework (courseId, classId) {
            Fetch.get(config.url + '/teacher/homework/' + courseId + '/' + classId).then(res => {
                this.homework = res.homework;
            });
        },
        // getClasses () {
        //     Fetch.get(config.url + '/teacher/classes/' + this.courseWithClass[this.homeworkCourse].course._id).then(res => {
        //         this.homeworkClasses = res.homeworkClasses;
        //     });
        // },
        setHomework () {
            Fetch.post(config.url + '/teacher/homework', {
                course: JSON.stringify(this.courseWithClass[this.homeworkCourse].course),
                classes: this.classes,
                deadlineDate: this.deadlineDate,
                deadlineHour: this.deadlineHour,
                content: this.content
            }).then(res => {
                if (!res.msg) {
                    alert('添加作业成功');
                    $('.ui.modal').modal('hide');
                } else {
                    alert(res.msg);
                }
            });
        },
    }
}
</script>

<style lang="css" scoped>
    .modal-form {
        padding-bottom: 15px;
    }
</style>
