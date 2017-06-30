<template>
    <div class="ui centered grid">
        <div class="twelve wide column">
            <div class="ui grid">
                <div class="four wide column">
                    <div class="ui vertical fluid tabular menu">
                        <router-link to="/settings/info" active-class="active" class="item">基本信息</router-link>
                        <router-link to="/settings/photo" active-class="active" class="item">上传头像</router-link>
                    </div>
                </div>
                <div class="twelve wide stretched column">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'settings',
    data() {
        return {

        }
    },
    methods: {}
}
</script>

<style lang="css" scoped>
</style>
