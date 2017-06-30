<template>
    <div class="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>...</span>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    data() {
        return {

        }
    },
    methods: {}
}
</script>

<style lang="css" scoped>
    span {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 5px;
        border: 1px solid #333;
        text-align: center;
        cursor: pointer;
    }
</style>
