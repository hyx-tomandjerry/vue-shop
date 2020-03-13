<template>
    <div class="join-shop-container ">
        <van-nav-bar title="加入公司" left-arrow @click-left="$utils.goBack()" right-text="筛选" @click-right="searchHandle"/>

        <div class="shop-list-content">
            <shop-list-item v-for="(shop,index) in shopList" :shop="shop" :index="index" :key="index" @chooseShoItemHandle="chooseShoItemHandle"></shop-list-item>
        </div>
    </div>
</template>

<script>
    import ShopListItem from 'components/content/shop/ShopListItem'
    import {shop_List,shop_join} from 'network/shop.js'
    import {common_area} from 'network/common.js'
    export default {
        name: "JoinShop",
        components:{ShopListItem},
        data(){
            return{
                owner:'',
                brand:0,
                brandList:[],
                area:0,
                areaList:[],
                page:1,
                shopList:[]
            }
        },
        methods:{
            //加入门店
            chooseShoItemHandle(item){
               this.$dialog.confirm({
                   title:'加入门店',
                   message:`确定要加入${item.name}?`
               }).then(()=>{
                   let userInfo = this.$utils.getLocalItem('userInfo')
                   shop_join(this.owner,item.id,userInfo.id)
               }).catch(()=>{
                   console.log('不确定')
               })
            },
            //筛选门店
            searchHandle(){
                this.$router.push({
                    path:'searchShop',
                    query:{
                        owner:this.owner
                    }
                })
            },
            getAreaList(){
                common_area(this.owner).then(res=>{

                })
            },
            getShopList(){
                let options={
                    owner:this.owner,
                    brand:this.brand,
                    zone:this.area,
                    offset:this.$utils.getOffset(this.page)
                }
                shop_List(options).then(res=>{
                    console.log(res);
                    this.shopList=res.data
                })
            }
        },
        mounted() {
           // this.owner = this.$route.params.eid;
            this.owner=36;
            this.getShopList()
            this.getAreaList()
        }
    }
</script>

<style scoped>
.shop-list-content{
    padding:11px;
    background:#F7F7F7;
}
</style>
