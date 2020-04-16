<template>
    <div class="index-article-sale bg-white">
        <van-cell title="店铺公告" is-link :to="`/article/${$config.article.display}`" :border="false" />
        <div class="display-content">
            <article-display-item v-for="(item,index) in display" :key="index" :item="item" :index="index" v-if="display.length"/>
            <index-article-empty v-else/>
        </div>
    </div>
</template>

<script>
    import ArticleDisplayItem from 'components/content/article/ArticleDisplayItem'
    import IndexArticleEmpty from './index-article-empty'
    export default {
        name: "index-article-display",
        components:{ArticleDisplayItem,IndexArticleEmpty},
        props:{
            display:{
                type:Array,
                default(){return []}
            }
        }
    }
</script>

<style scoped>
    .van-cell__title{
        font-weight: bold;
        font-size:16px;
    }
    .index-article-sale{
        margin-bottom:60px;
    }
    .display-content{
        min-height:200px;
    }
</style>
