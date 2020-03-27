<template>
    <div>
        <van-nav-bar
            :fixed="true"
            @click-right="operateClerk"
            :border="false" z-index="10" @click-left="$utils.goBack" left-arrow class="shop-nav">
            <van-icon name="ellipsis" slot="right" size="30" v-if="isShowOperate" class="color-normal"/>
        </van-nav-bar>
        <clerk-cover :clerk="clerk" class="cover" v-if="clerk"/>
        <clerk-item :clerk="clerk" :shopItem="shopItem" v-if="clerk" />
        <top-right-popup v-if="isShow" :list="list" class="top-right" @chooseItem="chooseItem" :id="shopItem.id"></top-right-popup>
    </div>
</template>

<script>
    import ClerkCover from './childComponent/ClerkCover';
    import ClerkItem from './childComponent/ClerkItem'
    import TopRightPopup from 'components/content/top-right-popup/TopRightPopup'
    import {mapState} from 'vuex'
    import {shop_shopInfo,shop_memberList} from 'network/shop.js'
    export default {
        name: "ClerkInfo",
        components:{ClerkCover,ClerkItem,TopRightPopup},
        data(){
            return{
                clerk:null,
                shopItem:{},
                isShow:false,
                isShowOperate:false,
                list:[
                    {icon:require('assets/icon/shop/operate-icon/icon_author.png'),name:'设为店长',type:'manager'},
                    {icon:require('assets/icon/shop/operate-icon/icon_del.png'),name:'删除店员',type:'delete'},
                ]
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        methods:{
            operateClerk(){
                this.isShow = !this.isShow;
                // switch () {
                //
                // }
            this.$utils.getLocalItem('pwd')
            },
            getClerkItem(id){
                shop_memberList(id).then(res=>{
                    this.clerk = res.data.find(item => item.id === this.$route.query['clerkID'])
                    this.isShowOperate = this.clerk.id !== this.shopItem['manager'] && this.userInfo.id === this.shopItem['manager'];
                })
            },
            getShopInfo(id){
                shop_shopInfo(id).then(res=>{
                    this.shopItem = res.data;
                    this.getClerkItem(this.$route.query['shopID']);
                })
            },
            chooseItem(item){
                console.log(item);
                this.isShow =false;
            }
        },
        mounted() {
            console.log(this.$utils.getLocalItem('pwd'));
            if(this.$route.query['clerkID'] && this.$route.query['shopID']){
                this.getShopInfo(this.$route.query['shopID']);
            }
        }
    }
</script>

<style scoped>
.shop-nav{
    background:transparent;
}
    .cover{
        background:url('~assets/images/shop/clerk/clerk_bg.png') no-repeat;
        background-size:cover;
    }
    .top-right{
        background-image:url('~assets/images/common/topRight_bg.png');
    }
</style>
