<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
            <h2 class="ui teal header">
                Register
            </h2>

            <form class="ui large form">
                <div class="ui stacked segment">
                    <div class="field">
                        <label>Username</label>
                        <div class="ui action input">
                            <input v-model="usernamePrefix" type="text" name="email" placeholder="E-mail address">
                            <select v-model="usernameSuffix" class="ui compact selection dropdown f-padding">
                                <option v-for="(val, idx) in usernameSuffixs"
                                        :value="idx">{{val}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <div class="ui input">
                            <input v-model="password" type="password" name="password" placeholder="Password">
                        </div>
                    </div>
                    <div class="two fields">
                        <div class="field">
                            <label>Campus</label>
                            <select class="ui fluid search dropdown campus">
                                <option value="">选择高校</option>
                                <option v-for="(val, idx) in campuses"
                                        :value="idx">{{val | getName}}</option>
                            </select>
                        </div>
                        <div class="field">
                            <label>Academy</label>
                            <select class="ui fluid search dropdown academy">
                                <option value="">选择学院</option>
                                <option v-for="(val, idx) in academies"
                                        :value="idx">{{val | getName}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="two fields">
                        <div class="field">
                            <label>Profession</label>
                            <select class="ui fluid search dropdown profession">
                                <option value="">选择专业</option>
                                <option v-for="(val, idx) in professions"
                                        :value="idx">{{val | getName}}</option>
                            </select>
                        </div>
                        <div class="two fields">
                            <div class="field f-grade-field">
                                <label>Grade</label>
                                <select class="ui fluid search dropdown grade">
                                    <option value="">年级</option>
                                    <option v-for="(val, idx) in grades"
                                            :value="idx">{{val}}</option>
                                </select>
                            </div>
                            <div class="field">
                                <label>Class</label>
                                <select class="ui fluid search dropdown class">
                                    <option value="">班级</option>
                                    <option v-for="(val, idx) in classes"
                                            :value="idx + 1">{{val | getName}}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div @click="submit" class="ui fluid large teal button">Register</div>
                </div>
                <div :class="{'show-error': errorInfoList.length}" class="ui error message">
                    <ul class="list">
                        <li v-for="i in errorInfoList">{{i}}</li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import config from '../config';
import Fetch from '../assets/tools/fetchWithToken';

export default {
    name: 'register',
    beforeRouteEnter(to, from, next) {
        Fetch.get(config.url + '/api/campusInfo').then(res => {
            next(vm => {
                vm.campuses = res.campuses;
            });
        });
    },
    data() {
        return {
            usernamePrefix: null,
            usernameSuffix: 0,
            usernameSuffixs: ['@qq.com', '@126.com', '@163.com'],
            password: null,
            campusIdx: null,
            campuses: null,
            academyIdx: null,
            academies: null,
            professionIdx: null,
            professions: null,
            gradeIdx: null,
            grades: null,
            classIdx: null,
            classes: null,
            errorInfoList: [],
        }
    },
    mounted() {
        var that = this;
        $('.campus').dropdown({
            onChange: function(idx) {
                that.campusIdx = idx;
                Fetch.get(config.url + '/api/academyInfo/' + that.campuses[idx]._id).then(res => {
                    $('.academy .text').addClass('default').text('选择学院');
                    $('.profession .text').addClass('default').text('选择专业');
                    $('.grade .text').addClass('default').text('年级');
                    $('.class .text').addClass('default').text('班级');
                    that.professions = null;
                    that.grades = null;
                    that.classes = null;
                    that.academyIdx = null;
                    that.professionIdx = null;
                    that.gradeIdx = null;
                    that.classIdx = null;

                    that.academies = res.academies;
                }, err => {
                    console.error(err);
                });
            }
        });
        $('.academy').dropdown({
            onChange: function(idx) {
                that.academyIdx = idx;
                Fetch.get(config.url + '/api/professionInfo/' + that.academies[idx]._id).then(res => {
                    $('.profession .text').addClass('default').text('选择专业');
                    $('.grade .text').addClass('default').text('年级');
                    $('.class .text').addClass('default').text('班级');
                    that.grades = null;
                    that.classes = null;
                    that.professionIdx = null;
                    that.gradeIdx = null;
                    that.classIdx = null;

                    that.professions = res.professions;
                }, err => {
                    console.error(err);
                });
            }
        });
        $('.profession').dropdown({
            onChange: function(idx) {
                that.professionIdx = idx;
                $('.grade .text').addClass('default').text('年级');
                $('.class .text').addClass('default').text('班级');
                that.grades = [2013, 2014, 2015, 2016];
                that.classes = null;
                that.gradeIdx = null;
                that.classIdx = null;
            }
        });
        $('.grade').dropdown({
            onChange: function(idx) {
                that.gradeIdx = idx;
                Fetch.get(config.url + '/api/classInfo/' + that.professions[that.professionIdx]._id + '/' + that.grades[idx]).then(res => {
                    $('.class .text').addClass('default').text('班级');
                    that.classIdx = null;
                    that.classes = res.classes;
                }, err => {
                    console.error(err);
                });
            }
        });
        $('.class').dropdown({
            onChange: function(idx) {
                that.classIdx = idx;
            }
        });
    },
    methods: {
        submit() {
            this.errorInfoList = [];
            if(!this.usernamePrefix || !this.password) {
                this.errorInfoList.push('邮箱或密码不能为空');
            } else if(!this.campusIdx || !this.academyIdx || !this.professionIdx || !this.gradeIdx || !this.classIdx) {
                this.errorInfoList.push('请填写完整的班级信息');
            } else {
                Fetch.post(config.url + '/api/register', {
                    username: this.usernamePrefix + this.usernameSuffixs[this.usernameSuffix],
                    password: this.password,
                    campusId: this.campuses[this.campusIdx]._id,
                    academyId: this.academies[this.academyIdx]._id,
                    professionId: this.professions[this.professionIdx]._id,
                    classId: this.classes[this.classIdx - 1]._id,
                }).then(res => {
                    if(res.id) {
                        alert('注册成功');
                        this.$router.push('/login');
                    } else {
                        alert('注册失败');
                    }
                });
            }
        },
    },
    filters: {
        getName(v) {
            if(v.name)
                return v.name;
            else
                return v.cid;
        }
    }
}
</script>

<style lang="css" scoped>
    body {
      background-color: #DADADA;
    }

    body > .grid {
      height: 100%;
    }

    .column {
      max-width: 480px;
    }

    .grid {
        height: 100%;
    }

    /*origin override*/
    .ui.form select {
        width: 130px;
    }

    /*custom override */

    label {
        text-align: left;
        padding-left: 5px;
    }

    .show-error {
        display: block!important;
    }

    .f-padding {
        padding: 0 0 0 1em!important;
    }

    .f-grade-field {
        padding-left: 1em!important;
    }
</style>
