<template>
    <div class="notice-page">
        <van-nav-bar title="消息" :border="false"/>
        <tab-bar :tabCurList="tabCurList" @tabCurHandle="tabCurHandle">
            <div slot="content" class="notice-container">
               <notice-item v-for="(item,index) in noticeList" :key="index" :item="item" :index="index">
                   <img src="~assets/images/notice/daiban.png" alt="" class="notice-img" slot="img" v-if="tabIndex === $config.notice.todo">
                   <img src="~assets/images/notice/dongtai.png" alt="" class="notice-img" slot="img" v-if="tabIndex === $config.notice.info">
                   <img src="~assets/images/notice/company.png" alt="" class="notice-img" slot="img" v-if="tabIndex === $config.notice.company">
               </notice-item>
            </div>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import NoticeItem from './childComponent/NoticeItem';
    import {common_EventFlows,common_MyEventNumbers,common_refresh,common_xapis} from 'network/common.js'
    export default {
        name: "Notice",
        components:{TabBar,NoticeItem},
        data(){
            return{
                tabCurList:[
                    {name:'待办通知',id:this.$config.notice.todo},
                    {name:'动态通知',id:this.$config.notice.info},
                    {name:'公司公告',id:this.$config.notice.company},
                ],
                page:1,
                noticeList:[],
                tabIndex:0,
            }
        },
        methods:{
            tabCurHandle(index){
                this.tabIndex=index;
                common_EventFlows(this.$utils.getLocalItem('userInfo').id,index,this.page).then(res=>{
                    this.noticeList = res.data;
                })
            },
            refreshInfo(){
                common_refresh().then(res=>{
                    if(res.data.status === this.$config.userStatus.normal){
                        this.$utils.setLocalItem('userInfo',res.data);
                        //    获得api接口并保存
                        common_xapis().then(res=>{
                            this.$utils.setLocalItem('api',res.data)
                        })
                        //获得消息个数接口
                        common_MyEventNumbers().then(res=>{
                            this.$utils.setLocalItem('notice',res.data)
                        })
                    }
                })
            }
        },
        mounted() {
            //查看代办通知
            this.tabCurHandle(this.$config.notice.todo)
        },
        created() {
            this.refreshInfo()
        }
    }
</script>

<style scoped>
.notice-container{
    padding:22px 11px 10px;
    background:#F7F7F7;
}
.notice-img{
    width:44px;
    height:44px;
}
</style>
