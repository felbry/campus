<template>
    <div class="swiper-container twelve wide column">
        <div class="swiper-wrapper">
            <i @click="previous" class="chevron left icon"></i>
            <i @click="next" class="chevron right icon"></i>
            <div class="swiper-slide swiper1" :class="currentIdx == 1 ? 'swiper-active' : ''">工大映象</div>
            <div class="swiper-slide swiper2">时光影社</div>
            <div class="swiper-slide swiper3">计算机服务社</div>
            <div class="swiper-slide swiper4"> Slide4</div>
            <div class="swiper-slide swiper5"> Slide5</div>
            <div class="swiper-slide swiper6">计算机服务社</div>
        </div>
        <div class="pagination">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'swiper',
    data () {
        return {
            currentIdx: 1
        }
    },
    methods: {
        previous () {

        },
        next () {

        }
    }
}
</script>

<style lang="css" scoped>
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 260px;
        overflow: hidden;
    }

    .swiper-wrapper .icon {
        position: absolute;
        top: 50%;
        margin-top: -15px;
        font-size: 30px;
        z-index: 10;
        cursor: pointer;
        color: #333;
    }

    .left {
        left: 10px;
    }

    .right {
        right: 10px;
    }

    .swiper-slide {
        position: absolute;
        top: 20px;
        width: 50%;
        height: 220px;
        background-size: cover;
        opacity: 0.6;
        cursor: pointer;
        font-size: 25px;
        color: #333;
        text-align: center;
        line-height: 220px;
    }

    .swiper-active {
        z-index: 5;
        height: 260px;
        line-height: 260px;
        top: 0;
        opacity: 1;
    }

    .swiper1 {
        left: 25%;
        background-image: url('../../assets/css/imgs/z1.jpg');
    }

    .swiper2 {
        left: 50%;
        background-image: url('../../assets/css/imgs/z2.jpg');
    }

    .swiper3 {
        right: -50%;
        background-image: url('../../assets/css/imgs/z3.jpg');
    }

    .swiper4 {
        right: -50%;
    }

    .swiper5 {
        right: -50%;
    }

    .swiper6 {
        left: 0;
        background-image: url('../../assets/css/imgs/z6.jpg');
    }

    .pagination {
        margin-top: 5px;
        text-align: center;
    }

    .circle {
        display: inline-block;
        height: 8px;
        width: 8px;
        border-radius: 8px;
        background-color: #69AAEC;
    }

    .circle:not(:first-child) {
        margin-left: 5px;
        background-color: #C3C3C3;
    }
</style>
