<template>
   <div class="profile-container">
       <van-nav-bar title="我的" :border="false"/>
       <profile-head :userInfo="$utils.getLocalItem('userInfo')"/>
   </div>
</template>

<script>
    import ProfileHead from './childComponent/ProfileHead'
    import {common_EventFlows,common_MyEventNumbers,common_refresh,common_xapis} from 'network/common.js'

    export default {
        name: "Profile",
        components:{ProfileHead},
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

</style>
