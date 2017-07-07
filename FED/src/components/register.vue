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
    
    data() {
        return {
            usernamePrefix: null,
            usernameSuffix: 0,
            usernameSuffixs: ['@qq.com', '@126.com', '@163.com'],
            password: null,
            
            errorInfoList: [],
        }
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
