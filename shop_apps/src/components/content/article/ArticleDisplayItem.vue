

<template>
    <div class="article-sale-item position_r" @click="checkItemHandle">
        <img :src="item.coverurl" alt="" class="cover-img">
        <div class="article-sale-item-title">{{item.name}}</div>
        <div class="article-sale-item-intro">{{item['applyDate'] | format('YMDHMS')}}</div>
        <img src="~assets/images/article/huizhi1.png" alt="" class="img-reback" v-if="item.report === $config.report">
    </div>
</template>

<script>
    export default {
        name: "article-example",
        props:{
            item:{
                type:Object,
                default(){return {}}
            },
            index:Number
        },
        methods:{
            checkItemHandle(){
                this.$router.push(`/article/detail/${this.item.type}/${this.item.id}`)
            }
        }
    }
</script>

<style scoped>
    .article-sale-item{
        padding: 10px 15px 23px 15px;

    }
    .cover-img{
        width: 100%;
        height: 143px !important;
        border-radius: 11px;
        margin-bottom: 14px;
    }
    .article-sale-item-title{
        margin-bottom:11px;
        font-size:16px;
        font-weight: bold;
    }
    .article-sale-item-intro{
        font-size:13px;
        color:rgba(185,185,185,1)
    }
    .img-reback{
        position:absolute;
        right:15px;
        top:10px;
        width:44px;
        height:44px;
    }
</style>

