<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
            <h2 class="ui teal header">
                Log-in to your account
            </h2>

            <form class="ui large form">
                <div class="ui stacked segment">
                    <div class="field">
                        <div class="ui left icon action input">
                            <i class="user icon"></i>
                            <input v-model="usernamePrefix" type="text" name="email" placeholder="E-mail address">
                            <select v-model="usernameSuffix" class="ui compact selection dropdown">
                                <option v-for="(val, idx) in usernameSuffixs"
                                        :value="idx">{{val}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="lock icon"></i>
                            <input v-model="password" type="password" name="password" placeholder="Password">
                        </div>
                    </div>
                    <div @click="submit" class="ui fluid large teal button">登录</div>
                </div>
                <div :class="{'show-error': errorInfoList.length}" class="ui error message">
                    <ul class="list">
                        <li v-for="i in errorInfoList">{{i}}</li>
                    </ul>
                </div>
            </form>

            <div class="ui message">
                New to us? <a @click.prevent="toSignUp">Sign Up</a><br/>
                Is Teacher? <a @click.prevent="toTeacherLogin">To login</a><br/>
                Is Admin? <a @click.prevent="toAdminLogin">To login</a>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '../api';

export default {
    name: 'login',
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
        submit () {
            this.errorInfoList = [];
            if(!this.usernamePrefix || !this.password) {
                this.errorInfoList.push('用户名或密码不能为空');
            } else {
                this.errorInfoList = [];
                login({
                    username: this.usernamePrefix + this.usernameSuffixs[this.usernameSuffix],
                    password: this.password,
                }).then(res => {
                    if(res.code == 0) {
                        window.localStorage.setItem('access_token', res.data.token);
                        Fetch.updateToken(res.data.token);
                        this.$router.replace('/');
                    } else if (res.code == 1) {
                        this.errorInfoList.push(res.msg);
                    } else if (res.code == 2) {
                        this.$router.push({
                            name: 'verifyEmail',
                            params: {
                                email: res.data.email
                            }
                        });
                    } else if (res.code == 3) {
                        this.$router.push({
                            name: 'patchInfo',
                            params: {
                                email: res.data.email
                            }
                        });
                    } else {
                        this.errorInfoList.push('未知错误');
                    }
                });
            }
        },
        toSignUp () {
            this.$router.push('/register');
        },
        toAdminLogin () {
            this.$router.push('/login-for-admin');
        },
        toTeacherLogin () {
            this.$router.push('/login-for-teacher');
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
      max-width: 450px;
    }

    .grid {
        height: 100%;
    }

    /*origin override*/
    .ui.form select {
        width: 130px;
    }

    .ui.selection.dropdown {
        padding: 0 0 0 1em;
    }

    /*custom override*/
    .show-error {
        display: block!important;
    }

    a {
        cursor: pointer;
    }
</style>
