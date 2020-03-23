<template>
    <div class="index">
        <van-nav-bar :border="false"/>
        <!--index头部start-->
        <div class="index-head-container">
            <index-head :companyInfo="companyInfo"/>
            <index-swiper />
            <index-operate />
        </div>

        <!--销售公告-->
         <index-article-sale :sale="article.sale"/>
        <!--陈列公共-->
          <index-article-display :display="article.display"/>

    </div>
</template>

<script>
    import IndexHead from './children/index-head';
    import IndexSwiper from './children/index-swiper'
    import IndexOperate from './children/index-operate'
    import IndexArticleSale from './children/index-article-sale'
    import IndexArticleDisplay from './children/index-article-display'
    import EmptyComponent from 'components/content/emptyComponent/EmptyComponent'


    import {common_refresh,common_xapis,common_MyArticles,common_MyEventNumbers,common_token} from 'network/common.js'
    export default {
        name: "Index",
        components:{
            IndexHead,
            IndexSwiper,
            IndexOperate,
            EmptyComponent,
            IndexArticleDisplay,
            IndexArticleSale},
        data(){
            return{
                companyInfo:{},
                article:{
                    sale:[],//销售公告
                    display:[],//陈列公告
                }
            }
        },
        methods:{
            refreshInfo(){
                common_refresh().then(res=>{
                   this.$utils.setLocalItem('userInfo',res.data);//保存个人信息
                //    获得api接口并保存
                    common_xapis().then(res=>{
                        this.$utils.setLocalItem('api',res.data)
                    })
                //    获得当前公司数据
                    this.companyInfo={
                        name:res.data['ownerName'],
                        cover:res.data['ownerLogoUrl']
                    }
                    this.getArticleList();
                    this.getNoticeNumber();
                    this.getUploadToken()

                })
            },
        //    获得文章列表
            getArticleList(){
                common_MyArticles(0,1).then(res=>{
                    this.article.display = res.data.filter(item=>item.type===this.$config.article.display);
                    this.article.sale = res.data.filter(item=>item.type===this.$config.article.sale);
                })
            },
            //获得token
            getUploadToken(){
                common_token().then(res=>{
                    this.$utils.setLocalItem('token',res.data)
                })
            },
            //获得消息数据
            getNoticeNumber(){
                common_MyEventNumbers().then(res=>{
                    this.$utils.setLocalItem('notice',res.data)
                })
            }
        },
        created() {
            let userInfo = this.$utils.getLocalItem('userInfo');
           if(userInfo){
               this.refreshInfo()
           }else{
               this.$router.replace({
                   path:'/login'
               })
           }

        },
        mounted() {

        }
    }
</script>

<style scoped>
.index-head-container{
    padding:0 15px 16px;
    border-bottom:13px solid #eeeeed;
}
    .index{
        height:100vh;
        background: #ffffff;
    }





</style>
