<template>
    <div class="fileUpload">
        <input @change="getFiles($event)" type="file"/>
    </div>
</template>

<script>
import config from '../../config';
import Fetch from '../../assets/tools/fetchWithToken';

export default {
    name: 'fileUpload',
    props: {
        uploading: Boolean,
        activeSelectBox: Boolean,
        formData: {
            default: {}
        }
    },
    data() {
        return {
            files: []
        }
    },
    methods: {
        getFiles (event) {
            this.$set(this.files, 0, event.target.files[0]);
            this.$emit('filesInfo', event.target.files);
        }
    },
    watch: {
        uploading (v) {
            if (v) {
                Fetch.postFile(config.url + '/api/class/homeworkCommitter', this.formData).then(res => {
                    this.$emit('response', res);
                }, err => {
                    console.error(err);
                })
            }
        },
        activeSelectBox (v) {
            if (v) {
                document.getElementsByTagName('input')[0].click();
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .fileUpload {
        display: none;
    }
</style>
