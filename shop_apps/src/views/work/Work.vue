<template>
   <div class="work-page">
       <van-nav-bar :border="false"/>
       <div class="work-title">工作</div>
       <van-row class="work-list">
            <van-col class="work-list-item" span="6" v-for="(item,index) in tabList" :key="index" >
                <img :src="item.img" alt="" class="work-list-item-img">
                <p class="work-list-item-name">{{item.name}}</p>
            </van-col>
       </van-row>
   </div>
</template>

<script>
    import {common_EventFlows,common_MyEventNumbers,common_refresh,common_xapis} from 'network/common.js'

    export default {
        name: "Work",
        data(){
            return{
                tabList:[
                    {name:'公告回执',path:'',img:require("../../assets/images/work/tab/gongzuohuizhi.png")},
                    {name:'工作申请',path:'',img:require("../../assets/images/work/tab/apply.png")},
                    // {name:'快递包裹',path:'',img:require("../../assets/images/work/tab/kuaidibaoguo.png")},
                    {name:'我的报修',path:'',img:require("../../assets/images/work/tab/wodebaoxiu.png")},
                    {name:'任务管理',path:'',img:require("../../assets/images/work/tab/renwuguanli.png")},

                ]
            }
        },
        methods:{
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
        created() {
            this.refreshInfo()
        }
    }
</script>

<style scoped>
.work-page{
    background-color: #fff;
    height:100vh;
    width:100vw;
}
    .work-title{
        padding-left: 30px;
        font-size: 24px;
        font-weight: 600;
        color: rgba(70,69,69,1);
        padding-bottom: 27px;
    }
    .work-list-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom:20px;
    }
    .work-list-item-img{
        width:52px;
        height:52px;
    }
    .work-list-item-name{
        margin:4px 0;
        font-size:14px;
    }
</style>
