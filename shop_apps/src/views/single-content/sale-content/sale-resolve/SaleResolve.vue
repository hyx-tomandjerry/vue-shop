<template>
    <div>
       <van-nav-bar title="绩效分解" left-arrow @click-left="$utils.goBack" class="extra-nav" :border="false"/>
        <sale-resolve-head />
    </div>
</template>

<script>
    import SaleResolveHead from './childComponent/sale-resolve-head/SaleResolveHead'
    export default {
        name: "SaleResolve",
        components:{SaleResolveHead},
        mounted() {
            console.log(this.$route.params.shop)
        }
    }
</script>

<style scoped>
.extra-nav{
    background:url('../../../../assets/images/sale/bg.png') no-repeat;
    background-size:cover;
}
.van-nav-bar .van-icon{
    color: #ffffff !important;
}
.van-nav-bar__title{
    color: #ffffff !important;
    font-weight: bold;}
</style>
