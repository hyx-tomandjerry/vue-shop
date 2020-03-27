<template>
    <div>
        <van-nav-bar title="报修详情" left-arrow @click-left="$utils.goBack"/>
        <div class="detail-container">
            <detail-user-info :detailInfo="detailInfo"/>
            <div class="margin-gap"></div>
            <order-info :detail-info="detailInfo"/>
            <service-info :detail-info="detailInfo"/>
            <approve-info :detail-info="detailInfo"/>
        </div>
    </div>
</template>

<script>
    import DetailUserInfo from './childComponent/DetailUserInfo'
    import OrderInfo from './childComponent/OrderInfo'
    import ServiceInfo from './childComponent/ServiceInfo'
    import ApproveInfo from './childComponent/ApproveInfo'

    import {shop_repairOrderItem} from 'network/shop.js'
    export default {
        name: "RepairOrderItem",
        components:{DetailUserInfo,OrderInfo,ServiceInfo,ApproveInfo},
        data(){
            return{
                detailInfo:{}
            }
        },
        mounted() {
            console.log(this.$route.params.id)
            this.getDetailInfo(this.$route.params.id)
        },
        methods:{
            getDetailInfo(id){
                shop_repairOrderItem(id).then(res=>{
                    this.detailInfo=res.data;
                })
            }
        }
    }
</script>

<style scoped>
.detail-container{
    height:calc(100vh - 46px)
}
</style>
