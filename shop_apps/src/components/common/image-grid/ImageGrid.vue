<template>
    <div>
        <div class="color-regular summary">{{title}}</div>
        <van-grid :gutter="10" :column-num="4" class="gird-container">
            <van-grid-item v-for="(img,index) in files" :key="index">
                <!--<van-image :src="img.url" alt="" slot="default" />-->
                <van-image
                    fit="contain"
                    slot="default"
                    :src="img.url"
                />
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "ImageGrid",
        props:{
            title:String,
            files:{
                type:Array,
                default(){return []}
            }
        }
    }
</script>

<style scoped>
    .summary{
        margin-bottom: 8px;
        padding-left: 16px;
    }
    .gird-container{
        padding:15px 10px;
    }
</style>
