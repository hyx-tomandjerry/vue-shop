<template>
    <tab-bar :tabCurList="tabCurList" @tabCurHandle="tabCurHandle">
        <clerk-list-item
            v-for="(item,index) in list"
            :key="index"
            :item="item"
            :index="index"
            :shop-info="shopInfo"
            slot="content"
            v-if="tabCur===1" />
        <zone-list-item
            v-for="(item,index) in list"
            :key="index"
            :item="item"
            :shop-info="shopInfo"
            :index="index"
            v-if="tabCur === 2" slot="content"/>
        <device-list-item
            v-for="(item,index) in list"
            :key="index"
            :item="item"
            :index="index"
            :shop-info="shopInfo"
            slot="content"
            v-if="tabCur === 3"/>
    </tab-bar>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar';
    import ClerkListItem from './ClerkListItem';
    import ZoneListItem from './ZoneListItem';
    import DeviceListItem  from './DeviceListItem'
    import {shop_memberList,shop_areaMemberList,shop_deviceList} from 'network/shop.js'
    export default {
        name: "ShopNav",
        components:{TabBar,ClerkListItem,ZoneListItem,DeviceListItem},
        props:{
            shopInfo:{
                type:Object,
                default(){return {}}
            }
        },
        data(){
            return{
                tabCurList:[
                    {name:'门店人员'},
                    {name:'区域人员'},
                    {name:'设备列表'},
                ],
                list:[],
                tabCur:1
            }
        },
        methods:{
            tabCurHandle(index){
                this.tabCur = index;
                console.log(this.tabCur)
                switch (index) {
                    case 1:
                        this.getShopMember();
                        break;
                    case 2:
                        this.getZoneMember();
                        break;
                    case 3:
                        this.getServiceList()
                }
            },
            //获得门店店员列表
            getShopMember(){
                shop_memberList(this.shopInfo.id).then(res=>{
                    this.list=res.data;
                })
            },
            //获得区域人员列表
            getZoneMember(){
                console.log(this.shopInfo.zone);
                shop_areaMemberList(this.shopInfo.zone).then(res=>{
                    this.list=res.data;
                })
            },
            //获得门店设备列表
            getServiceList(){
                shop_deviceList(this.shopInfo.id).then(res=>{
                    this.list=res.data;
                })
            }
        },
        mounted() {
            this.tabCurHandle(this.tabCur)
        }
    }
</script>

<style scoped>

</style>
