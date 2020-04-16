<template>
    <div>
        <van-nav-bar
            :fixed="true"
            @click-right="operateClerk"
            :border="false" z-index="10" @click-left="$utils.goBack" left-arrow class="shop-nav">
            <van-icon name="ellipsis" slot="right" size="30" v-if="isShowOperate" class="color-normal"/>
        </van-nav-bar>
        <clerk-cover :clerk="clerk" class="cover" v-if="clerk"/>
        <clerk-item :clerk="clerk" :shopItem="shopItem" v-if="clerk" :tabIndex="tabIndex"/>
        <top-right-popup v-if="isShow"
                         :user="clerk.id"
                         :list="list"
                         class="top-right" @chooseItem="chooseItem" :id="shopItem.id"></top-right-popup>
    </div>
</template>

<script>
    import ClerkCover from './childComponent/ClerkCover';
    import ClerkItem from './childComponent/ClerkItem'
    import TopRightPopup from 'components/content/top-right-popup/TopRightPopup'
    import {mapState} from 'vuex'
    import {shop_shopInfo,shop_memberList,shop_areaMemberList} from 'network/shop.js'
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
                ],
                tabIndex:1
            }
        },
        computed:{
            ...mapState(['userInfo'])
        },
        methods:{
            operateClerk(){
                this.isShow = !this.isShow;
            },
            getClerkItem(id){
                shop_memberList(id).then(res=>{
                    this.clerk = res.data.find(item => item.id === this.$route.query['clerkID']);
                    this.isShowOperate =
                      this.tabIndex===1 &&  this.clerk.id !== this.shopItem['manager'] && this.userInfo.id === this.shopItem['manager'] && this.clerk.status === this.$config.userStatus.normal;
                })
            },
            getZoneMemberItem(id){
                shop_areaMemberList(id).then(res=>{
                    this.clerk = res.data.find(item => item.id === this.$route.query['clerkID']);
                })
            },
            getShopInfo(id){
                shop_shopInfo(id).then(res=>{
                    this.shopItem = res.data;
                    if(this.tabIndex ===1){
                        this.getClerkItem(this.$route.query['shopID']);
                    }else{
                       this.getZoneMemberItem(this.$route.query['zone'])
                    }

                })
            },
            chooseItem(){
                console.log('74')
                this.isShow =false;
            }
        },
        mounted() {
            this.tabIndex = this.$route.query['tabIndex'];
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
