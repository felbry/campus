<template>
    <div class="index-super">
        welcome, super.
        添加学校：<input v-model="campus" type="text"><button @click="addCampus" type="button">添加</button><br/>
        <ul>
            <li v-for="item in adminList">{{item.relationName}} - {{item.username}} - {{item.password}}</li>
        </ul>
    </div>
</template>

<script>
import { setCampus, getAdmin } from '../../api';

export default {
    name: 'index-super',
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
            getAdmin().then(res => {
                this.adminList = res.data;
            });
        },
        addCampus() {
            setCampus({
                name: this.campus,
            }).then(res => {
                if (!res.code) {
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
