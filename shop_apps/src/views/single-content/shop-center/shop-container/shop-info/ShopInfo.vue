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
       <top-right-popup v-if="isShow" :list="list" class="top-right" @chooseItem="chooseItem" :id="shopInfo.id"></top-right-popup>
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
                    {icon:require('assets/icon/shop/operate-icon/icon-bind.png'),name:'绑定设备',type:'bing'}
                ]
            }
        },
        computed:{
            ...mapState(['shopItem','shopCount']),
        },
        mounted() {
            if(this.shopCount ===1){
                this.shopInfo = this.shopItem;
                console.log(this.shopInfo)
            }else{
                this.getShopInfo('11')
            }

        },
        methods:{
            chooseItem(){
                this.isShow=false;
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
.top-right{
    background-image:url('~assets/images/common/topRight_bg.png');
}
</style>
