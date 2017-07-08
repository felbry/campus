<template>
    <div class="index-campus">
        welcome, 高校管理员~
        添加学院：<input v-model="academy" type="text"><button @click="addAcademy" type="button">添加</button><br/>
        <ul>
            <li v-for="item in adminList">{{item.relationName}} - {{item.username}} - {{item.password}}</li>
        </ul>
    </div>
</template>

<script>
import { setAcademy, getAdmin } from '../../api';

export default {
    name: 'index-campus',
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
            getAdmin().then(res => {
                this.adminList = res.data;
            });
        },
        addAcademy() {
            setAcademy({
                name: this.academy,
            }).then(res => {
                if (!res.code) {
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
