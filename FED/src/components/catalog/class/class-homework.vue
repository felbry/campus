<template>
    <div class="ui one column grid">
        <p v-if="!homework.length">空空如也，还没有发布的作业</p>
        <div v-for="(item, idx) in homework" class="column">
            <div class="ui card">
                <div class="content">
                    <a class="ui green right ribbon label">进行中</a>
                    <div @click="toHomeworkDetail(item._id)" class="header">
                        {{item.course.name}}
                    </div>
                    <div class="meta">
                        <a class="item">
                            <div class="ui olive horizontal label">发布人</div> {{item.publisher.name}}
                        </a>
                        <a class="item">
                            <div class="ui olive horizontal label">截止时间</div> {{new Date(item.deadline).toLocaleDateString()}} {{new Date(item.deadline).getHours()}}时
                        </a>
                    </div>
                    <p v-html="item.content"></p>
                </div>
                <div class="extra content">
                    <i class="check green icon"></i> 46 人 已提交
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '../../../config';
import Fetch from '../../../assets/tools/fetchWithToken';

export default {
    name: 'homework',
    beforeRouteEnter(to, from, next) {
        Fetch.get(config.url + '/api/class/homework').then(res => {
            next(vm => {
                vm.homework = res.homework;
            });
        });
    },
    data() {
        return {
            homework: []
        }
    },
    methods: {
        toHomeworkDetail (id) {
            // this.$store.commit('setCurrentHomework', {
            //     homework: this.homework[idx]
            // });
            this.$router.push({
                path: '/class/homework-detail',
                query: {
                    id: id
                }
            });
        }
    }
}
</script>

<style lang="css" scoped>
    .card {
        width: 100%;
    }

    .card .header {
        cursor: pointer;
    }

    .meta {
        margin: 10px 0;
        cursor: alias;
    }

    .meta .item {
        margin-right: 20px;
    }
</style>
