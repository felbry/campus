<template>
    <div class="index-campus">
        welcome, campus.
        添加学院：<input v-model="academy" type="text"><button @click="addAcademy" type="button">添加</button><br/>
        <ul>
            <li v-for="item in adminList">{{item.relation.name}} - {{item.username}} - {{item.password}}</li>
        </ul>
    </div>
</template>

<script>
import config from '../../config';
import Fetch from '../../assets/tools/fetchWithToken';

export default {
    name: 'index-campus',
    beforeRouteEnter(to, from, next) {
        Fetch.get(config.url + '/admin/2/authenticate').then(res => {
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
            academy: null,
            adminList: []
        }
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            Fetch.get(config.url + '/admin/academyInfo').then(res => {
                this.adminList = res.admins;
            });
        },
        addAcademy() {
            Fetch.post(config.url + '/admin/academyInfo', {
                name: this.academy,
            }).then(res => {
                if (!res.msg) {
                    this.getInfo();
                } else {
                    alert(res.msg);
                }
            });
        },
    }
}
</script>

<style lang="css" scoped>
</style>
