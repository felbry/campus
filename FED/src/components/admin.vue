<template>
    <div class="admin">

        添加专业：<input v-model="profession" type="text" placeholder="专业"><input v-model="academy" type="text" placeholder="学院"><input v-model="campus" type="text" placeholder="所属学校"><button @click="addProfession" type="button">添加</button><br/>
        添加班级：<input v-model="grade" type="text" placeholder="年级"><input v-model="cid" type="text" placeholder="班号"><input v-model="profession" type="text" placeholder="专业"><input v-model="academy" type="text" placeholder="学院"><input v-model="campus" type="text" placeholder="所属学校"><button @click="addClass" type="button">添加</button><br/>
    </div>
</template>

<script>
import config from '../config';
import Fetch from '../assets/tools/fetchWithToken';

export default {
    name: 'admin',
    data() {
        return {
            campus: null,

            profession: null,
            grade: null,
            cid: null,
        }
    },
    methods: {
        
        addProfession() {
            Fetch.post(config.url + '/api/professionInfo', {
                name: this.profession,
                campus: this.campus,
                academy: this.academy,
            }).then(res => {
                console.log(res);
            });
        },
        addClass() {
            Fetch.post(config.url + '/api/classInfo', {
                profession: this.profession,
                campus: this.campus,
                academy: this.academy,
                grade: this.grade,
                cid: this.cid,
            }).then(res => {
                console.log(res);
            });
        },
    }
}
</script>

<style lang="css" scoped>
</style>
