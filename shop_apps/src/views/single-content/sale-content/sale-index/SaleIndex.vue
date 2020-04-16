<template>
    <div class="sale-index-container">
        <van-nav-bar
            class="extra-nav"
            :border="false"
            :title="shopItem.name"
            @click-left="$utils.goBack" @click-right=""
            left-arrow />
        <div class="sale-index-container-tab">
           <index-tab-item v-for="(item,index) in tabList" :key="index"
               :title="item.name"
               :item="item"
                :index="index"
               :shop="shopItem.id"
               :leftColor="item.color"
               :src="item.src"/>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import IndexTabItem from 'components/content/sale/index-tab-item/IndexTabItem'
    export default {
        name: "SaleIndex",
        computed:mapState(['shopItem']),
        components:{IndexTabItem},
        data(){
            return{

                tabList:[
                    {name:'绩效分解',src:require('assets/images/sale/index/resolve.png'),val:'resolve',color:'#FFB126'},
                    {name:'绩效审核',src:require('assets/images/sale/index/check.png'),val:'check',color:'#FF4C4C'},
                    {name:'绩效榜单',src:require('assets/images/sale/index/rank.png'),val:'rank',color:'#15AFA1'},
                    {name:'绩效统计',src:require('assets/images/sale/index/count.png'),val:'count',color:' #FFB126'},
                    {name:'退货处理',src:require('assets/images/sale/index/return.png'),val:'return',color:'#3343C9'},
                ]
            }
        },
        mounted(){
            console.log(this.shopItem);
        }
    }
</script>

<style scoped>
    .extra-nav{

        background:url('~assets/images/sale/sale_bg.png') no-repeat;
    }
.van-nav-bar .van-icon{
    color: #ffffff !important;
}
.van-nav-bar__title{
    color: #ffffff !important;
    font-weight: bold;
}
    .sale-index-container-tab{
        height:120px;
        background:url('~assets/images/sale/sale_bg.png') no-repeat;
        background-size:contain;
        padding:30px 15px;
    }

</style>
