<template>
    <div class="ui grid container">
        <div class="twelve wide column">
            <div class="ui grid">
                <div class="one column row title">
                    <div class="column">
                        [主题] 卖电车啦卖电车啦卖电车啦卖电车啦卖电车啦卖电车啦卖电车啦卖电车啦卖电车啦啦卖电车啦卖电车啦啦卖电车啦卖电车啦
                    </div>
                </div>
                <div class="row item-area">
                    <div class="four wide column photo-area">
                        [张全蛋]
                    </div>
                    <div class="twelve wide column">
                        <div class="content">
                            求购电动车<br/>求购电动车<br/>求购电动车<br/>求购电动车<br/>求购电动车<br/>
                            <div class="content-footer">
                                <span>8楼</span>
                                <span>{{new Date().toLocaleString()}}</span>
                                <span class="footer-reply">回复</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row item-area">
                    <div class="four wide column photo-area">
                        [张全蛋]
                    </div>
                    <div class="twelve wide column">
                        <div class="content">
                            求购电动车<br/>求购电动车<br/>求购电动车<br/>求购电动车<br/>求购电动车<br/>
                            <div class="content-footer">
                                <span>12楼</span>
                                <span>{{new Date().toLocaleString()}}</span>
                                <span class="footer-reply">回复(12)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="four wide column sidebar"></div>
        <div class="row pagination-row">
            <pagination></pagination>
        </div>
        <div class="row comment-box">
            <div class="two wide column"></div>
            <div class="ten wide column">
                <h4 class="ui header">发表回复</h4>
                <div class="ui form">
                    <div class="field">
                        <textarea></textarea>
                    </div>
                    <div class="field">
                        <button class="ui button">提交</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pagination from '../../universal/pagination';

export default {
    name: 'discuss-detail',
    data() {
        return {

        }
    },
    methods: {},
    components: {
        pagination
    }
}
</script>

<style lang="css" scoped>
    /*.container {
        padding-left: 14px;
    }*/

    .title {
        border-bottom: 1px solid #333;
        font-weight: bold;
    }

    /*.column {
        padding-left: 0!important;
    }*/

    .sidebar {
        background-color: #F5F7FA;
    }

    .item-area {
        position: relative;
        padding: 0!important;
        border-bottom: 1px solid #E1E4E6;
        min-height: 320px;
    }

    .photo-area {
        background-color: #FAFBFC;
        text-align: center;
    }

    .content {
        padding: 20px 0 30px 20px;
    }

    .content-footer {
        position: absolute;
        right: 0;
        bottom: 8px;
    }

    .content-footer span {
        margin-right: 5px;
    }

    .footer-reply {
        cursor: pointer;
        color: #2D64B3;
    }

    .comment-box {
        background-color: #F5F5F5;
    }

    .pagination-row {
        padding: 15px 0 15px 15px!important;
        border-bottom: 1px solid #E1E4E6;
        background-color: #F7F8FA;
    }
</style>
