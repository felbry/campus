<template>
    <div class="index-super">
        welcome, super.
        添加学校：<input v-model="campus" type="text"><button @click="addCampus" type="button">添加</button><br/>
        <ul>
            <li v-for="item in adminList">{{item.relation.name}} - {{item.username}} - {{item.password}}</li>
        </ul>
    </div>
</template>

<script>
import config from '../../config';
import Fetch from '../../assets/tools/fetchWithToken';

export default {
    name: 'index-super',
    beforeRouteEnter(to, from, next) {
        Fetch.get(config.url + '/admin/1/authenticate').then(res => {
            if (res.authenticate) {
                next();
            } else {
                alert('没有权限，请登录');
                next('/login-for-admin');
            }
        });
    },
    data() {
        return {
            campus: null,
            adminList: null,
        }
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            Fetch.get(config.url + '/admin/campusInfo').then(res => {
                this.adminList = res.admins;
            });
        },
        addCampus() {
            Fetch.post(config.url + '/admin/campusInfo', {
                name: this.campus,
            }).then(res => {
                if (!res.msg) {
                    this.getInfo();
                } else {
                    alert(res.msg);
                }
            });
        },
    },
}
</script>

<style lang="css" scoped>
</style>
