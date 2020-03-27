<template>
    <div class="shop-item">
        <div class="flex align-items-center margin-b">
            <div class="shop-item-name">{{shopInfo['name']}} </div>
            <van-tag class="shop-item-status" type="success" round>营业中</van-tag>
        </div>
        <van-row class="shop-item-manager">
            <van-col span="3">店长:</van-col>
            <van-col span="21">{{shopInfo['managerName']}}/{{shopInfo['managerMobile']}}</van-col>
        </van-row>
        <van-row class="border-b shop-item-area">
            <van-col span="12" class="flex align-items-center">
                <div class="span-margin">品牌名称:</div>
                <div class="color-high">{{shopInfo['brandName']}}</div>
            </van-col>
            <van-col span="12"  class="flex align-items-center">
                <div class="span-margin">所属区域:</div>
                <div>{{shopInfo['zoneName']}}</div>
            </van-col>
        </van-row>
        <van-row class="shop-item-list">
            <van-col span="2" class="text-center"><div class="iconfont icon-fangzi"></div></van-col>
            <van-col span="21" class="flex justify-content-between">
                <div>门店面积:{{shopInfo['area']}}㎡</div>
                <div class="iconfont icon-bianji" @click="edit('area')"></div>
            </van-col>
        </van-row>
        <van-row class="shop-item-list">
            <van-col span="2" class="text-center"><div class="iconfont icon-fangzi"></div></van-col>
            <van-col span="21" class="flex justify-content-between">
                <div>门店编号:{{shopInfo['seq']}}</div>
                <div class="iconfont icon-bianji" @click="edit('seq')"></div>
            </van-col>
        </van-row>
        <van-row class="shop-item-list">
            <van-col span="14" class="flex align-items-center border-r">
                <div class="iconfont icon-zhongbiao span-margin" ></div>
                <div>开业日期:{{shopInfo['duedate'] | format('YYYY-MM-DD')}}</div>
            </van-col>
            <van-col span="10" class="flex align-items-center justify-content-around">
                <div >营业天数:</div>
                <div>{{shopInfo['days']}}天</div>
            </van-col>
        </van-row>

        <van-row class="shop-item-list">
            <van-col span="2" class="text-center"><div class="iconfont icon-dizhi"></div></van-col>
            <van-col span="21" class="flex justify-content-between">
                <router-link to="index/shop" style="font-size:13px;" class="color-high">{{$utils.fullAdressIntro(shopInfo)}}</router-link>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "ShopItem",
        props:{
            shopInfo:{
                type:Object,
                default(){return {}}
            }
        },
        methods:{
            edit(type){
                this.$router.push({
                    path:'/shop/edit',
                    query:{
                        id:this.shopInfo.id,
                        type:type
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .shop-item{
    background-color: #fff;
    padding:16px 15px 0 15px;
    border-bottom:13px solid #eeeeed;
}
    .shop-item-name{
        font-size:16px;
        font-weight:600;
        margin-right:10px;
        color:rgba(42,42,42,1);
    }
    .shop-item-manager{
        margin-bottom: 11px;}
    .span-margin{
        margin-right:8px;
    }
    .shop-item-area{
        padding-bottom: 12px;
    }
    .icon-zhongbiao{font-size:30px;
        color: #898888;}
    .shop-item-list{
        padding:15px 0 14px;
        border-bottom:1px solid #EEEEED;
    }
    .icon-fangzi,.icon-dizhi{
        font-size:20px;
        color: var(--color-gray);
    }
    .icon-bianji{
        color:var(--high-text)
    }

</style>
