<template>
    <div>
        <div class="ui centered grid navigator">
            <div class="six wide column">
                <div class="ui centered grid">
                    <div class="ui text menu">
                        <router-link to="/class" active-class="active" class="item">班级</router-link>
                        <router-link to="/organization" active-class="active" class="item">社团</router-link>
                        <router-link to="/campus" active-class="active" class="item">高校</router-link>
                        <router-link to="/experiment" active-class="active" class="item">实验室</router-link>
                    </div>
                </div>
            </div>
            <div class="two wide column">
                <div class="ui text menu">
                    <i @click="goHome" class="twitter icon blue large"></i>
                </div>
            </div>
            <div class="six wide column">
                <div class="ui centered grid">
                    <div class="ui text menu">
                        <router-link to="/message" active-class="active" class="item">消息</router-link>
                        <router-link to="/personal" active-class="active" class="item">
                            <img @mouseover="showPhotoMenu" src="../assets/css/imgs/photo.jpg" class="ui avatar image" />
                        </router-link>
                        <div @mouseleave="hiddenPhotoMenu"
                             v-show="isPhotoMenu" class="f-photo-menu">
                            <div class="ui inverted segment">
                                <div class="ui inverted relaxed divided list f-select-list">
                                    <div class="item">
                                        <div class="content">
                                            <div class="header">
                                                <router-link to="/personal" class="item">个人主页</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="content">
                                            <div class="header">
                                                <router-link to="/settings" class="item">设置</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import config from '../config';
import Fetch from '../assets/tools/fetchWithToken';

export default {
    name: 'index',
    beforeRouteEnter (to, from, next) {
        Fetch.post(config.url + '/api/info', {}).then(res => {
            if(typeof res == 'number')
                next('/login');
            else if(res.author) {
                next();
            } else {
                alert('未知错误，请联系管理员');
                next('/login');
            }
        });
    },
    data() {
        return {
            isPhotoMenu: false,
        }
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
        showPhotoMenu() {
            this.isPhotoMenu = true;
        },
        hiddenPhotoMenu() {
            this.isPhotoMenu = false;
        }
    }
}
</script>

<style lang="css" scoped>
    .icon {
        margin-left: auto;
        margin-right: auto;
    }

    .navigator {
        padding: 10px;
    }

    .twitter {
        cursor: pointer;
    }

    .f-photo-menu {
        position: absolute;
        z-index: 10;
        left: 50%;
        top: 55%;
    }

    .f-select-list {
        width: 80px;
    }
</style>
