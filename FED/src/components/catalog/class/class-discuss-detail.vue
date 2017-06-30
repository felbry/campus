<template>
    <div class="ui one column grid">
        <div class="column">
            <h2 class="ui header">
                如何直观形象的理解梯度，散度，旋度？
                <div class="sub header">
                    <span class="author">程大镜</span>
                    <span class="createdAt">{{test}}</span>
                    <span class="updatedAt">5分钟前更新</span>
                </div>
            </h2>
            <div class="collection">
                <div class="buttons">
                    <i class="large caret up icon"></i>
                    <p>68</p>
                    <i class="large caret down icon"></i>
                </div>
                <div class="my-message my-message-first">
                    《电磁场与电磁波》中的矢量分析让人烦恼，<br/>有没有哪位大神可以简单解释下？
                    <div class="my-message-footer">
                        14小时前
                    </div>
                </div>
            </div>
            <h3 class="ui orange header">2 个回答</h3>
            <div class="ui celled list">
                <div class="item">
                    <div class="collection">
                        <div class="buttons">
                            <i class="large caret up icon"></i>
                            <p>5</p>
                            <i class="large caret down icon"></i>
                        </div>
                        <div class="my-message">
                            Gradient梯度是“升维”操作，梯度符号作用在标量上，得到矢量；梯度符号作用在矢量上，得到张量。<br/>Divergent散度是“降维”操作，散度作用在张量上，得到矢量；散度作用在矢量上，得到标量。<br/>有没有不升不降的操作呢？--旋度。旋度作用在矢量上，还是矢量。
                            <div class="my-message-footer">
                                14小时前 · 李铁柱
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="collection">
                        <div class="buttons">
                            <i class="large caret up icon"></i>
                            <p>-1</p>
                            <i class="large caret down icon"></i>
                        </div>
                        <div class="my-message">
                            梯度是三维空间里的导数，斜率是二维空间里的导数，也可以说斜率是梯度的二维特例。<br/><br/>嗯，就是这样！<br/>
                            <div class="my-message-footer">
                                两天前 · 张全蛋
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="ui orange header">评论</h3>
            <div class="ui form">
                <div class="field">
                    <textarea></textarea>
                </div>
                <div class="field">
                    <button class="ui right floated button">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'discuss-detail',
    data() {
        return {
            test: moment('20111031', 'YYYYMMDD').fromNow()
        }
    },
    methods: {}
}
</script>

<style lang="css" scoped>
    .angle {
        margin: 0!important;
    }

    .collection {
        width: 100%;
    }

    /*.ui.button:active, .ui.button:focus {
        background-color: #e0e1e2;
    }*/

    .buttons {
        float: left;
        width: 45px;
        text-align: center;
        background-color: #F3F3F3;
    }

    .buttons i {
        margin-right: 0px;
        cursor: pointer;
    }

    .buttons p {
        margin: 0;
        font-size: 16px;
    }

    .my-message {
        float: right;
        position: relative;
        padding-bottom: 30px;
        width: 85%;
        min-height: 108px;
    }

    .my-message-first {
        margin-bottom: 15px;
    }

    .my-message-footer {
        position: absolute;
        bottom: 5px;
        color: rgba(0,0,0,.6);
    }

    /*.button {

        padding-left: 0;
        padding-right: 0;
        text-align: center;
    }*/

    .header {
        clear: both;
    }

    .ui.celled.list .item {
        padding-left: 0;
    }

    .sub.header span {
        margin-right: 6px;
    }
</style>
