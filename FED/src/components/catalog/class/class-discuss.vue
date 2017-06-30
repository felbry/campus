<template>
    <div class="ui one column grid">
        <div class="column">
            <div class="ui celled list">
                <div class="item">
                    <div class="category1">
                        <div class="ui green tiny statistic">
                            <div class="value">
                            8
                            </div>
                            <div class="label">得票</div>
                        </div>
                        <div class="ui yellow tiny statistic">
                            <div class="value">
                            25
                            </div>
                            <div class="label">讨论</div>
                        </div>
                    </div>
                    <div class="category2">
                        <div class="ui mini statistic">
                            <div @click="toDiscussDetail(id)" class="value title-value">
                            如何直观形象的理解梯度，散度，旋度？
                            </div>
                            <div class="label extra-label">
                                <div class="ui blue label">分类
                                    <div class="detail">作业</div>
                                </div>
                                <div class="ui blue label">最后活跃时间
                                    <div class="detail">{{new Date().toLocaleString()}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="category1">
                        <div class="ui green tiny statistic">
                            <div class="value">
                            3
                            </div>
                            <div class="label">得票</div>
                        </div>
                        <div class="ui yellow tiny statistic">
                            <div class="value">
                            16
                            </div>
                            <div class="label">讨论</div>
                        </div>
                    </div>
                    <div class="category2">
                        <div class="ui mini statistic">
                            <div class="value title-value">
                            最近在看《明朝那些事儿》，大家如何评价朱元璋这个人物？
                            </div>
                            <div class="label extra-label">
                                <div class="ui blue label">分类
                                    <div class="detail">其它</div>
                                </div>
                                <div class="ui blue label">最后活跃时间
                                    <div class="detail">{{new Date().toLocaleString()}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'class-discuss',
    data() {
        return {

        }
    },
    methods: {
        toDiscussDetail (id) {
            this.$router.push({
                path: '/class/discuss-detail',
                query: {
                    id: id
                }
            });
        },
    }
}
</script>

<style lang="css" scoped>
    .category1 {
        width: 20%;
        float: left;
    }

    .category2 {
        width: 80%;
        float: right;
    }

    .extra-label {
        margin-top: 12px!important;
        text-align: left!important;
    }

    .title-value {
        /*font-size: 1.7rem!important;*/
        text-align: left!important;
        cursor: pointer;
    }
    /*.statistic .label {
        text-align: left;
    }*/
</style>
