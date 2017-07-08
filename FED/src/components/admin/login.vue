<template>
    <div class="ui middle aligned center aligned grid">
        <div class="column">
            <h2 class="ui teal header">
                Log-in to your account
            </h2>

            <form class="ui large form">
                <div class="ui stacked segment">
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="user icon"></i>
                            <input v-model="username" type="text" placeholder="username">
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
        </div>
    </div>
</template>

<script>
import { adminLogin } from '../../api';

export default {
    name: 'admin-login',
    data() {
        return {
            username: null,
            password: null,
            errorInfoList: [],
        }
    },
    methods: {
        submit() {
            this.errorInfoList = [];
            if(!this.username || !this.password) {
                this.errorInfoList.push('用户名或密码不能为空');
            } else {
                this.errorInfoList = [];
                adminLogin({
                    username: this.username,
                    password: this.password,
                }).then(res => {
                    if (!res.code) {
                        // 后期询问是否保存本地
                        window.localStorage.setItem('access_token', res.data.token);
                        Fetch.updateToken(res.data.token);
                        if (res.data.power == 1) {
                            this.$router.push('/admin/super');
                        } else if (res.data.power == 2) {
                            this.$router.push('/admin/campus');
                        } else if (res.data.power == 3) {
                            this.$router.push('/admin/academy');
                        }
                    } else {
                        this.errorInfoList.push(res.msg);
                    }
                });
            }
        },
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
