<template>
    <div class="clerk-item ">
       <van-cell title="门店名称" :value="shopItem['name']" size="large"/>
       <van-cell title="手机号码" :value="clerk['account']" size="large"/>
       <van-cell title="工作状态" :value="clerk['status'] | userStatusFilter" size="large"/>
       <van-cell title="职位" :value="getJob" size="large"/>

        <div class="operate-tab" v-if="clerk.status === $config.userStatus.applying && tabIndex ===1">
            <div @click="operateClerk('agree')">
                <img src="~assets/images/shop/clerk/agree.png" alt="">
                <p>同意加入</p>
            </div>
           <div @click="operateClerk('refuse')">
               <img src="~assets/images/shop/clerk/refuse.png" alt="">
               <p>拒绝加入</p>
           </div>

        </div>
    </div>
</template>

<script>
    import {shop_agree_refuse} from 'network/shop.js'
    export default {
        name: "ClerkItem",
        props:{
            clerk:{
                type:Object,
                default(){return {}}
            },
            shopItem:{
                type:Object,
                default(){return {}}
            },
            tabIndex:[Number,String]
        },
        computed:{
            getJob(){
                if(this.tabIndex ===1){
                    if(this.shopItem['manager'] === this.clerk.id){
                        return '店长'
                    }
                    return '店员'
                }
                return '区域人员'

            }
        },
        methods:{
            operateClerk(type){
                switch (type) {
                    case 'agree':
                        shop_agree_refuse(this.shopItem.id,this.clerk.id,0);
                        break;
                    case 'refuse':
                        this.$dialog.confirm({
                            message:'确定拒绝加入?'
                        }).then(()=>{
                            shop_agree_refuse(this.shopItem.id,this.clerk.id,1);
                        }).catch(()=>{

                        })
                        break;
                }
            }
        }
    }
</script>

<style scoped>
.operate-tab{
    margin-top:40px;
    display: flex;
    justify-content: space-around;
}
    .operate-tab img{
        width:58px;
        height:58px;
    }
</style>
