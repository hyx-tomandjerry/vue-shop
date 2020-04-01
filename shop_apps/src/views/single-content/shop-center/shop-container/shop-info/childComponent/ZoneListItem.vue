<template>
    <van-row class="list-item bg-white" type="flex" align="center" @click="checkZoneMember">
        <van-col span="4" offset="2" class="text-center">
            <van-image :src="getCover" width="45" height="45"  round/>
        </van-col>
        <van-col span="12" offset="1">{{item.name}}/{{item.account}}</van-col>
        <van-col span="4">
            <van-tag
                round
                color="#FEA536"
                size="medium">{{item['departmentName'] }}</van-tag>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "ZoneListItem",
        props:{
            item:{
                type:Object,
                default(){return {}}
            },
            index:[String,Number],
            shopInfo:{
                type:Object,
                default(){return {}}
            },
        },
        computed:{
            getCover(){
                return this.item.headurl?this.item.headurl:require('assets/images/common/avatar.jpg')
            }
        },
        methods:{
            checkZoneMember(){
                this.$router.push({
                    path:'/shop/clerk',
                    query:{clerkID:this.item.id,shopID:this.shopInfo.id,tabIndex:2,zone:this.shopInfo.zone}
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
