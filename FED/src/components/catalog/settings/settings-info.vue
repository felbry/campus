<template>
    <div class="ui segment">
        <i @click="edit" class="edit icon orange"></i>
        <div class="ui centered grid">
            <div class="twelve wide column">
                <form class="ui form">
                <div class="field">
                    <label>真实姓名</label>
                    <input v-model="realName"
                           :disabled="editable" type="text" placeholder="请填写你的真实姓名" />
                </div>
                <button @click="submit" class="ui button" type="button">提交</button>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../../../config';
import Fetch from '../../../assets/tools/fetchWithToken';

export default {
    name: 'settings-info',
    beforeRouteEnter(to, from, next) {
        Fetch.get(config.url + '/api/settings/basicInfo').then(res => {
            next(vm => {
                vm.realName = res.userInfo.realName;
            });
        });
    },
    data() {
        return {
            realName: null,
            editable: true,
        }
    },
    methods: {
        submit() {
            Fetch.post(config.url + '/api/settings/basicInfo', {
                realName: this.realName
            }).then(res => {
                if(res.id) {
                    alert('修改成功');
                    this.editable = true;
                } else {
                    alert('未知错误，修改失败');
                    this.editable = true;
                }
            });
        },
        edit() {
            this.editable = false;
        }
    }
}
</script>

<style lang="css" scoped>
    .edit {
        float: right;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
</style>
