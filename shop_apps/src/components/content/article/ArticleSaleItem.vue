<template>
    <div class="index-article-sale-item" @click="checkItemHandle">
        <div>
            <div class="index-article-sale-item-title">{{item.name}}</div>
            <div class="index-article-sale-item-intro">{{item.applyDate | format('YMDHMS')}}</div>
        </div>
        <img :src="item.coverurl" alt="" class="index-article-sale-item-img">
    </div>
</template>

<script>
    export default {
        name: "ArticleDisplayItem",
        props:{
            item:{
                type:Object,
                default(){return {}}
            },
            index:Number
        },
        methods:{
            //查看单个详情
            checkItemHandle(){
                this.$router.push(`/article/detail/${this.item.type}/${this.item.id}`)
            }
        }
    }
</script>

<style scoped>
    .index-article-sale-item{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .index-article-sale-item-img{
        height:80px;
        width:110px;

    }
    .index-article-sale-item-title{
        font-size:16px;
        font-weight: bold;
        margin-bottom:11px;
        -ms-word-break: break-all;
        word-break: break-all;
    }
    .index-article-sale-item-intro{
        font-size:13px;
        color: #898888;
    }
    .van-cell__title{
        font-weight: bold;
        font-size:16px;
    }
</style>
