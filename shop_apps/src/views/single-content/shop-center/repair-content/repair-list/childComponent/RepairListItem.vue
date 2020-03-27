<template>
    <router-link class="repair-list-content-item"  :to="`/shop/repair/detail/${item.id}`">
        <van-row class="margin-b-small">
            <van-col span="18" class="repair-list-content-item-title">{{item.type| repairCatalogFilter}}-{{item.categoryName}}</van-col>
            <van-col span="4" class="text-center">
                <div v-if="item.status === $config.repairStatus.submit">
                    <van-tag round  :color="item.approval | approveStatusColorFilter" size="large" text-color="#ffffff">
                        {{item.approval | approveStatusFilter}}
                    </van-tag>
                </div>
                <div v-else>
                    <van-tag round  :color="item.status | repairStatusColorFilter" text-color="#ffffff" size="large">{{item.status | repairStatusFilter}}</van-tag>
                </div>
            </van-col>
        </van-row>
        <van-row class="margin-b-small">
            <van-col span="2">
                <img src="~assets/icon/icon-mengdian.png" alt="" class="repair-icon">
            </van-col>
            <van-col span="5" class="color-regular">门店名称:</van-col>
            <van-col span="17">{{item.name}}</van-col>
        </van-row>
        <van-row class="margin-b-small">
            <van-col span="2">
                <img src="~assets/images/account/user.png" alt="" class="repair-icon">
            </van-col>
            <van-col span="5" class="color-regular">报修人:</van-col>
            <van-col span="17">{{item.applierName}}/{{item.applierMobile}}</van-col>
        </van-row>
    </router-link>
</template>

<script>
    export default {
        name: "RepairListItem",
        props:{
            item:{
                type:Object,
                default(){return {}}
            },
            index:Number
        },
        methods:{
            checkItem(){
                this.$emit('checkItem',this.item)
            }
        }
    }
</script>

<style scoped>
    .repair-list-content-item{
        padding: 18px 16px 4px 20px;
        background: #fff;
        margin-bottom: 13px;
        font-size:15px;
        color:#2A2A2A;
        display: block;
    }
    .repair-list-content-item-title{

        font-weight: 600;
        color: rgba(42,42,42,1);
        margin-bottom: 8px;
    }
    .repair-icon{
        width:17px;
        height:17px;
        vertical-align: middle;
    }
    .margin-b-small{
        margin-bottom: 6px;
    }
</style>
