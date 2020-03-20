<template>
    <div class="index-article-sale">
        <van-cell title="销售公告" is-link :to="`/article/${$config.article.sale}`" :border="false" />
        <div class="sale-content">
            <article-sale-item v-for="(item,index) in sale" :index="index" :key="index" :item="item" v-if="sale.length"/>
            <index-article-empty v-else/>
        </div>

    </div>
</template>

<script>
    import ArticleSaleItem from 'components/content/article/ArticleSaleItem'
    import IndexArticleEmpty from './index-article-empty'
    export default {
        name: "index-article-sale",
        components:{ArticleSaleItem,IndexArticleEmpty},
        props:{
            sale:{
                type:Array,
                default(){return []}
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .van-cell__title{
        font-weight: bold;
        font-size:16px;
    }
    .index-article-sale{
        border-bottom:13px solid #EEEEED;
    }
    .sale-content{
        min-height:200px;
    }
</style>
