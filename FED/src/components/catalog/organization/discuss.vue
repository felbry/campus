<template>
    <div class="ui grid">
        <div class="twelve wide column">
            <div class="ui grid">
                <div class="row card-container">
                    <div class="two wide column">
                        <div class="card-reply">30</div>
                    </div>
                    <div class="ten wide column">
                        <p @click="toDetail" class="card-title">
                            谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？
                        </p>
                        <p class="card-summary">
                            内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容
                        </p>
                    </div>
                    <div class="four wide column">
                        <i class="at icon"></i>断签jeet
                    </div>
                </div>
                <div class="row card-container">
                    <div class="two wide column">
                        <div class="card-reply">30</div>
                    </div>
                    <div class="ten wide column">
                        <p @click="toDetail" class="card-title">
                            谁知道这个是啥？谁知道这个是
                        </p>
                        <p class="card-summary">
                            内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容
                        </p>
                    </div>
                    <div class="four wide column">
                        <i class="at icon"></i>断签jeet
                    </div>
                </div>
                <div class="row card-container">
                    <div class="two wide column">
                        <div class="card-reply">30</div>
                    </div>
                    <div class="ten wide column">
                        <p @click="toDetail" class="card-title">
                            谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？谁知道这个是啥？
                        </p>
                        <!-- <p class="card-summary">
                            内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容概要内容
                        </p> -->
                    </div>
                    <div class="four wide column">
                        <i class="at icon"></i>断签jeet
                    </div>
                </div>
            </div>
        </div>
        <div class="four wide column">

        </div>
    </div>
</template>

<script>
export default {
    name: 'organization-discuss',
    data() {
        return {

        }
    },
    methods: {
        toDetail () {
            this.$router.push('/organization/' + this.$route.params.id + '/discuss/aaaa');
        }
    }
}
</script>

<style lang="css" scoped>
    .card-container:hover {
        background-color: #F7F9FC;
    }

    .card-reply {
        position: absolute;
        left: 50%;
        margin-left: -25px;
        width: 50px;
        height: 25px;
        border: 1px solid #333;
        text-align: center;
        line-height: 23px;
    }

    .card-title {
        color: #2D64B3;
        cursor: pointer;
    }

    .card-summary {
        margin-top: 10px;
        color: #666;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
