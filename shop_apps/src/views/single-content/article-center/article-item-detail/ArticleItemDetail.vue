<template>
    <div>
        <van-nav-bar title="详情内容" :right-text="detailItem.report === $config.report?'编写回执':''" left-arrow @click-left="$utils.goBack"/>
        <div class="item-info">
            <div class="item-info-head">
                <div class="item-info-title">{{detailItem.name}}</div>
                <div class="item-info-date">
                    <span>{{detailItem.applierName}}</span>
                    <span>{{detailItem.applyDate | format('YMDHMS')}}</span>
                </div>
                <img :src="detailItem.coverurl" alt="" class="item-info-img">
                <div class="item-info-intro">{{detailItem.content}}</div>
            </div>
            <div class="item-info-files">
                <van-cell title="附件" :border="true"/>
                <div class="flex align-items-center item-info-files-item bg-white"
                     v-for="(file,index) in detailItem.files" :key="index"
                     @click="checkImgHandle(index)"
                     v-if="detailItem.files.length">
                    <div>
                        <img :src="file.url" alt="" class="item-info-files-img" v-if="file.postfix  && (file.postfix ==='jpg' || file.postfix ==='png')">
                        <img src="~assets/images/article/word.png" alt=""   class="item-info-files-img" v-else-if="file.postfix && file.postfix.toLowerCase()=='doc'">
                        <img src="~assets/images/article/ppt.png" alt=""  class="item-info-files-img" v-else-if=" file.postfix && file.postfix.toLowerCase()=='ppt'">
                        <img src="~assets/images/article/pdf.png" alt="" class="item-info-files-img"  v-else-if=" file.postfix && file.postfix.toLowerCase()=='pdf'">
                    </div>
                    <div>
                       <div class="color-high">{{file.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <image-preview :isShow="isShow" :image="files" ></image-preview>
    </div>
</template>

<script>
    import ImagePreview from 'components/common/image-preview/ImagePreview'
    import EmptyComponent from 'components/content/emptyComponent/EmptyComponent'
    import {common_Article} from 'network/common.js'
    export default {
        name: "ArticleItemDetail",
        components:{EmptyComponent,ImagePreview},
        data(){
            return {
                detailItem:{},
                isShow:false,
                files:[]
            }
        },
        methods:{
        //    获得文章详情
            getArticleItemInfo(){
                common_Article(this.$route.params['id']).then(res=>{
                   this.detailItem=res.data;
                })
            },
            //查看图片详情
            checkImgHandle(index){
                this.isShow=true;
                this.files= this.$utils.filterImg(this.detailItem.files)
                console.log(this.files)
               // ImagePreview({
               //     images:this.$utils.filterImg(this.detailItem.files),
               //     startPosition:index
               // })
            }
        },
        created() {

        },
        mounted() {
            this.getArticleItemInfo()
        }
    }
</script>

<style scoped>
.item-info-head{
    padding: 10px 13px 10px 14px;
    /*margin-bottom:13px;*/
    background-color: #fff;
    border-bottom:13px solid #EEEEED;
}
    .item-info-title{
        font-weight: bold;
        font-size:16px;
        color: #2A2A2A;
    }
    .item-info-date{
        font-size:14px;
        padding:10px 0;
        margin:14px 0 18px;
        color:var(--color-gray)
    }
    .item-info-date span{
        margin-right:8px;
    }
    .item-info-date span:first-child{
        color:#186F94
    }
    .item-info-img{
        width:100%;
        height:160px;
        border-radius:8px;
    }
    .item-info-intro{
        color: #898889;
        font-size:15px;
        margin:15px 0;
    }
    .item-info-files-item{
        padding: 10px 25px;
        height: 76px;
    }
    .item-info-files-img{
        width:40px;
        height:40px;
        margin-right:20px;
    }
</style>
