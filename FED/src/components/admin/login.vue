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
                    <div @click="submit" class="ui fluid large teal button">Login</div>
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
import config from '../../config';
import Fetch from '../../assets/tools/fetchWithToken';

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
                Fetch.post(config.url + '/admin/login', {
                    username: this.username,
                    password: this.password,
                }).then(res => {
                    if (!res.token) {
                        this.errorInfoList.push('账号密码错误，请重新输入');
                    } else {
                        // 后期询问是否保存本地
                        window.localStorage.setItem('access_token', res.token);
                        Fetch.updateToken(res.token);
                        if (res.power == 1) {
                            this.$router.push('/admin/super');
                        } else if (res.power == 2) {
                            this.$router.push('/admin/campus');
                        } else if (res.power == 3) {
                            this.$router.push('/admin/academy');
                        } else {
                            alert('未知错误');
                        }
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
