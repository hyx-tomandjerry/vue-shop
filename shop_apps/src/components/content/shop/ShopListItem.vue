<template>
    <div class="shop-list-item" @click="chooseShoItemHandle">
        <img :src="shop.coverurl" :alt="shop.name" class="shop-img">
        <div class="shop-intro">
            <div>
                <strong class="color-normal">{{shop.name}}</strong>
                <img src="~assets/images/shop/status/businessing.png" alt="" class="status-tag" v-if="shop.status === $config.shopStatus.businessing">
                <img src="~assets/images/shop/status/canceled.png" alt="" class="status-tag" v-if="shop.status === $config.shopStatus.canceled">
                <img src="~assets/images/shop/status/moved.png" alt="" class="status-tag" v-if="shop.status === $config.shopStatus.moved">
                <img src="~assets/images/shop/status/processing.png" alt="" class="status-tag" v-if="shop.status === $config.shopStatus.processing">
                <img src="~assets/images/shop/status/ready.png" alt="" class="status-tag" v-if="shop.status === $config.shopStatus.ready">
                <img src="~assets/images/shop/status/renovated.png" alt="" class="status-tag" v-if="shop.status === $config.shopStatus.renovated">
            </div>
            <div>店长:</div>
            <div>地址: <span>{{$utils.fullAdressIntro(shop)}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopListItem",
        props:{
            shop:{
                type:Object,
                default(){return {}}
            },
            index:Number
        },
        methods:{
            chooseShoItemHandle(){
                this.$emit('chooseShoItemHandle',this.shop)
            }
        }
    }
</script>

<style scoped>
    .shop-list-item{
        background: #ffffff;
        padding:11px;
        display: flex;
        align-items: center;
        margin-bottom:13px;
        color:var(--color-gray);
        border-radius:5px;
    }
    .shop-img{
        width:100px;
        height:86px;
        border-radius:6px;
        vertical-align: middle;
    }
    .shop-intro{
        flex:1;
        padding-left:15px;
    }
    .shop-intro>div{
        margin-bottom:8px;
    }
    .shop-intro>div:last-child{
        font-size:13px;
    }
    .status-tag{
        vertical-align: middle;
        width:18px;
        height:18px;
        margin-left: 8px;
    }
    span{
        margin-left:5px;
    }
</style>
