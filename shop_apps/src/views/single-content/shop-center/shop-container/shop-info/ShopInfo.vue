<template>
    <div class="my-shop">
        <van-nav-bar
                     title="我的门店"
                     :fixed="true"
                     @click-right="checkPopup"
                     :border="false" z-index="10" @click-left="$utils.goBack" left-arrow class="shop-nav">
            <van-icon name="ellipsis" slot="right" size="30"/>
        </van-nav-bar>
        <shop-head :shop-info="shopInfo"/>
        <shop-item :shop-info="shopInfo"/>
        <shop-nav  :shop-info="shopInfo" v-if="shopInfo.id"/>
       <top-right-popup v-if="isShow" :list="list" id="top-right" @chooseItem="chooseItem" :id="shopInfo.id"></top-right-popup>
        <!--绑定设备-->
        <van-overlay :show="isShowDevice" @click="show=false">
            <div class="wrapper" @click.stop>
                <router-link class="block" :to="`/shop/device/bind/${shopInfo.id}/camera`">
                    <div class="device-item">
                        <p>绑定摄像头</p>
                        <img src="~assets/images/shop/device/camera.png" alt="" @click="bindDevice('camera')">
                    </div>
                    <div class="device-item" :to="`/shop/device/bind/${shopInfo.id}/cpe`">
                        <p>绑定CPE</p>
                        <img src="~assets/images/shop/device/router.png" alt="" @click="bindDevice('cpe')">
                    </div>
                </router-link>
            </div>
        </van-overlay>
    </div>
</template>

<script>
    import ShopHead from './childComponent/ShopHead';
    import ShopItem from './childComponent/ShopItem';
    import ShopNav from './childComponent/ShopNav'
    import TopRightPopup from 'components/content/top-right-popup/TopRightPopup'

    import {mapState} from 'vuex'

    import {shop_shopInfo} from 'network/shop.js'
    export default {
        name: "ShopInfo",
        components:{ShopHead,ShopItem,ShopNav,TopRightPopup},
        data(){
            return{
                shopInfo:{},
                isShow:false,
                list:[
                    {icon:require('assets/icon/shop/operate-icon/icon_add.png'),name:'录入店员',type:'add'},
                    {icon:require('assets/icon/shop/operate-icon/icon_record.png'),name:'记一笔',type:'record'},
                    {icon:require('assets/icon/shop/operate-icon/icon-bind.png'),name:'绑定设备',type:'bind'}
                ],
                isShowDevice:false
            }
        },
        computed:{
            ...mapState(['shopItem','shopCount']),
        },
        mounted() {
            console.log('600000')
            this.getShopInfo('11')

        },
        methods:{
            //绑定设备
            bindDevice(type){
                // this.$route.replace("`shop/device/bind/${this.shopInfo.id}/camera`")
            },
            chooseItem(type){
                this.isShow=false;
                if(type){
                   if(type==='bind'){
                       this.isShowDevice =true;
                   }
                }

            },
            checkPopup(){this.isShow = !this.isShow},
            getShopInfo(id){
                shop_shopInfo(id).then(res=>{
                    this.shopInfo=res.data;
                })
            }
        }
    }
</script>

<style scoped>
.shop-nav{
    background:transparent;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
}
    .block{
        position: fixed;
        bottom:30px;
        right:40px;
    }
    .device-item{
        display: flex;
        margin-bottom:10px;
        justify-content: space-around;
        align-items: center;
    }
    .device-item p{
        font-weight: bold;
        color: #ffffff;
    }
    .device-item img{
        width:70px;
        height:70px;
        margin-left: 10px;
        vertical-align: middle;
    }
</style>
