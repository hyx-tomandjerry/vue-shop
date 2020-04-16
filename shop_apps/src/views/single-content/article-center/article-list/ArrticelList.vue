<template>
   <div class="article-list-container bg-white">
       <van-nav-bar :title="getTitle" left-arrow @click-left="$utils.goBack" :border="true"/>
       <div class="article-list-content">
           <article-sale-item
               v-for="(item,index) in articleList"
               :item="item" :index="index"
               :key="index"
               class="margin-b"
               v-if="Number($route.params.type)===$config.article.sale"/>
           <article-display-item
            v-for="(item,index) in articleList"
            :item="item" :index="index"
            :key="index"
            class="margin-b"
            v-if="Number($route.params.type)===$config.article.display"
           />
       </div>
   </div>
</template>

<script>
    import {common_MyArticles} from "network/common";

    import ArticleSaleItem from 'components/content/article/ArticleSaleItem'
    import ArticleDisplayItem from 'components/content/article/ArticleDisplayItem'
    export default {
        name: "ArrticelList",
        components:{ArticleSaleItem,ArticleDisplayItem},
        data(){
            return{
                type:'',
                page:1,
                articleList:[]
            }
        },
        computed:{
            getTitle(){
                return Number(this.$route.params['type'])===this.$config.article.sale?'销售公告':'店铺公告';
            }
        },
        mounted() {
            this.getArticleList()
        },
        methods:{
            getArticleList(){
                common_MyArticles(this.$route.params['type'],this.page).then(res=>{
                    this.articleList=res.data;
                })
            },
            //查看单个详情
            checkItemHandle(item){
                console.log(item);

            }
        }
    }
</script>

<style scoped>

</style>
