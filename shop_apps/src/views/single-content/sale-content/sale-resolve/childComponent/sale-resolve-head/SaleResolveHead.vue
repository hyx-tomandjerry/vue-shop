<template>
    <div class="sale-resolve-head">
         <div>{{new Date().getFullYear()}}年门店年目标</div>
        <strong class="sale-resolve-head-count">￥1000</strong>
        <van-row type="flex" align="center">
            <van-col span="12" class="border-r">
               <van-row type="flex" align="center">
                   <van-col span="4"> <i class="iconfont icon-zhongbiao"></i></van-col>
                   <van-col span="20">
                       <div>2005-06-09</div>
                       <div class="color-regular">开业日期</div>
                   </van-col>
               </van-row>
            </van-col>
            <van-col span="12">
                <van-row type="flex" >
                    <van-col span="4"> <i class="iconfont icon-zhongbiao"></i></van-col>
                    <van-col span="20">
                        <div>2005-06-09</div>
                        <div class="color-regular">截至日期</div>
                    </van-col>
                </van-row>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "SaleResolveHead"
    }
</script>

<style scoped>
.sale-resolve-head{
    color: #ffffff;
    background:url('~assets/images/sale/bg.png') no-repeat;
    background-size:cover;
    padding:15px 20px;
}
    .sale-resolve-head-count{
        font-size: 36px;
        font-family: DINAlternate-Bold;
        color: #78f6b2;
        margin: 3px 0 10px
    }
    .icon-zhongbiao{font-size:25px;}
</style>
