<template>
    <div class="ui centered grid organization-container">
        <swiper></swiper>
        <div class="twelve wide column">
            <div class="ui horizontal divider">广场</div>
            <div class="ui grid">
                <div class="twelve wide column">
                    <h2 class="ui header">新团报道</h2>
                    <div class="ui four column grid">
                        <div v-for="item in recent" class="column">
                            <div class="ui fluid card">
                                <div class="blurring dimmable image">
                                    <div class="ui dimmer">
                                        <div class="content">
                                            <div class="center">
                                                <div @click="toHome" class="ui inverted button">
                                                    进入主页
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="../assets/css/imgs/photo.jpg">
                                </div>
                                <div class="content">
                                    <a class="header">工大映象</a>
                                    <div class="meta">
                                        <span class="date">
                                            河南工业大学
                                        </span>
                                    </div>
                                </div>
                                <!-- <div class="extra content">
                                    <a><i class="users icon"></i> 15 成员 </a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <h2 class="ui header">本校社团</h2>
                    <div class="ui four column grid">
                        <div v-for="item in recent" class="column">
                            <div class="ui fluid card">
                                <div class="blurring dimmable image">
                                    <div class="ui dimmer">
                                        <div class="content">
                                            <div class="center">
                                                <div class="ui inverted button">
                                                    进入主页
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="../assets/css/imgs/photo.jpg">
                                </div>
                                <div class="content">
                                    <a class="header">工大映象</a>
                                    <!-- <div class="meta">
                                        <span class="date">
                                            河南工业大学
                                        </span>
                                    </div> -->
                                </div>
                                <div class="extra content">
                                    <a><i class="users icon"></i> 26/150</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="four wide column">
                    <h2 class="ui header">热门社团</h2>
                    <ol class="ui list">
                        <li>工大映象</li>
                        <li>计算机服务社</li>
                        <li>时光影社</li>
                        <li>硬件联盟</li>
                        <li>曳步舞社</li>
                        <li>共青团志愿者</li>
                        <li>新传通讯社</li>
                        <li>FCC兴趣组织</li>
                        <li>骑行社</li>
                        <li>街舞社</li>
                    </ol>
                    <h2 class="ui header">我的社团</h2>
                    <div class="ui very relaxed items">
                        <div class="item">
                            <div class="ui tiny image">
                                <img src="../assets/css/imgs/photo.jpg">
                            </div>
                            <div class="middle aligned content">
                                <a class="header">工大映象</a>
                            </div>
                        </div>
                        <div class="item">
                            <div class="ui tiny image">
                                <img src="../assets/css/imgs/photo.jpg">
                            </div>
                            <div class="middle aligned content">
                                <a class="header">计算机服务社</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from './universal/swiper';

export default {
    name: 'organization',
    data () {
        return {
            recent: [1, 2, 3, 4, 5, 6, 7],
        }
    },
    mounted () {
        $('.fluid.card .image').dimmer({
            on: 'hover'
        })
    },
    methods: {
        toHome () {
            this.$router.push('/organization/' + 'abdc');
        }
    },
    components: {
        swiper
    }
}
</script>

<style lang="css" scoped>
    .organization-container {
        margin-top: 0;
    }

    .header {
        color: #909090;
    }

    .list li {
        cursor: pointer;
    }
</style>
