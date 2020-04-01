<template>
    <van-row class="list-item bg-white" type="flex" align="center" @click="checkItemInfo">
        <van-col span="4" offset="2" class="text-center">
            <van-image :src="getCover" width="45" height="45"  round/>
        </van-col>
        <van-col span="11" offset="1">{{item.name}}/{{item.account}}</van-col>
        <van-col span="5">
            <div v-if="shopInfo['manager'] === item.id && item.status === $config.userStatus.normal">
                <van-tag
                    type="primary"
                    round
                    size="medium"

                >店长</van-tag>
            </div>
            <div v-if="shopInfo['manager'] !== item.id ">
                <van-tag
                    round
                    :color="item.status |userStatusColorFilter"
                    size="medium">{{item.status | userStatusFilter}}</van-tag>
            </div>

        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "ClerkListItem",
        props:{
            item:{
                type:Object,
                default(){return {}}
            },
            shopInfo:{
                type:Object,
                default(){return {}}
            },
            index:[String,Number]
        },
        computed:{
            getCover(){
                return this.item.headurl?this.item.headurl:require('assets/images/common/avatar.jpg')
            }
        },
        methods:{
            checkItemInfo(){
                this.$router.push({
                    path:'/shop/clerk',
                    query:{clerkID:this.item.id,shopID:this.shopInfo.id,tabIndex:1}
                })
            }
        }
    }
</script>

<style scoped>
.list-item{
    padding:8px 0;
    border-bottom:1px solid #EEEEED;
}
</style>
