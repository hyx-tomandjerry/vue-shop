<template>
    <div class="index">
        <van-nav-bar :border="false"/>
        <!--index头部start-->
        <div class="index-head-container">
            <index-head :companyInfo="companyInfo"/>
            <index-swiper />
        </div>

        <!--index头部end-->
    </div>
</template>

<script>
    import IndexHead from './children/index-head';
    import IndexSwiper from './children/index-swiper'

    import {common_refresh,common_xapis} from 'network/common.js'
    export default {
        name: "Index",
        components:{
            IndexHead,
            IndexSwiper},
        data(){
            return{
                companyInfo:{}
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

        }
    }
</script>

<style scoped>
.index-head-container{
    padding:0 15px;
}
    .index{
        height:100vh;
        background: #ffffff;
    }
</style>
