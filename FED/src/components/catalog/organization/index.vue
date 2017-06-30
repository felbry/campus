<template>
    <div class="ui centered grid">
        <div class="twelve wide column">
            <div class="banner"></div>
            <div class="info">
                <div class="photo"></div>
                <div class="tools">
                    <div class="tool">
                        <i class="edit icon"></i>
                    </div>
                    <div class="tool">
                        <i class="search icon"></i>
                    </div>
                    <div class="tool">
                        <i class="wizard icon"></i>
                    </div>
                </div>
                <div class="ui sixteen wide column grid">
                    <div class="left floated ten wide column info-column">
                        <h2 class="ui header header-title">
                            工大映象
                            <div class="sub header">
                                简介：一支视频创作团队。
                            </div>
                        </h2>
                    </div>
                    <div class="right floated right aligned six wide column info-column">
                        <div class="join-btn">申请加入</div>
                        <div class="ui mini statistics">
                            <div class="statistic">
                                <div class="value">32</div>
                                <div class="label">活动</div>
                            </div>
                            <div class="statistic">
                                <div class="value">96</div>
                                <div class="label">成员</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui secondary pointing menu">
                <router-link :to="subPath.home" active-class="active" class="item">主页</router-link>
                <router-link :to="subPath.discuss" active-class="active" class="item">交流</router-link>
                <router-link :to="subPath.activity" active-class="active" class="item">活动</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'organization-index',
    data() {
        return {
            subPath: {
                home: '/organization/' + this.$route.params.id + '/home',
                discuss: '/organization/' + this.$route.params.id + '/discuss',
                activity: '/organization/' + this.$route.params.id + '/activity',
            }
        }
    },
    methods: {}
}
</script>

<style lang="css" scoped>
    .banner {
        width: 100%;
        height: 170px;
        background-image: url('../../../assets/css/imgs/bannerbg.png');
    }

    .info {
        position: relative;
        height: 80px;
        width: 100%;
        padding-left: 150px;
        background-color: #f8fbff;
    }

    .photo {
        position: absolute;
        width: 130px;
        height: 130px;
        top: -65px;
        left: 10px;
        border: 3px solid #fff;
        border-radius: 130px;
        background-image: url('../../../assets/css/imgs/photo.jpg');
    }

    .tools {
        position: absolute;
        right: -63px;
        top: 15px;
    }

    .tool {
        width: 48px;
        height: 48px;
        margin-bottom: 12px;
        border: 1px solid #909090;
        text-align: center;
        font-size: 24px;
        line-height: 48px;
        cursor: pointer;
    }

    .tool i.icon {
        margin-right: 0;
    }

    .header-title {
        padding-top: 15px;
        color: #006998;
        font-weight: normal;
    }

    .info-column {
        padding-top: 0!important;
    }

    .join-btn {
        float: right;
        width: 102px;
        height: 38px;
        margin-top: 20px;
        margin-right: 15px;
        border: 1px solid #b5b5b5;
        border-radius: 3px;
        cursor: pointer;
        text-align: center;
        line-height: 38px;
        font-size: 18px;
        color: #909090;
    }

    .join-btn:hover {
        border: 1px solid #909090;
    }

    .statistics {
        float: right;
        margin-top: 20px;
        margin-right: 21px;
    }

    .statistic {
        margin-bottom: 0!important;
        margin-right: 0!important;
    }

    .statistic>.value, .statistic>.label {
        color: #909090!important;
    }

    /*.count {
        float: right;
        height: 45px;
        margin-top: 17.5px;
        text-align: center;
        font-size: 16px;
    }

    .count-sub {
        font-size: 10px;
    }

    .divide {
        float: right;
        height: 30px;
        margin-top: 17.5px;
        border: 1px solid #333;
    }*/
</style>
