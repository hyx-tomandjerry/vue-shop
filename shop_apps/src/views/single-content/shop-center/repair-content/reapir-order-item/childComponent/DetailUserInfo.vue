<template>
    <van-row class="detail-user-info">
        <van-col span="6">
            <img src="~assets/images/common/avatar.jpg" alt="" class="user-avatar">
        </van-col>
        <van-col span="18">
            <div class="font-size-middle font-weight-bold">报修人:{{detailInfo['applierName']}}</div>
            <div class="color-regular">{{detailInfo['applierMobile']}}</div>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "DetailUserInfo",
        props:{
            detailInfo:{
                type:Object,
                default(){return {}}
            }
        }
    }
</script>

<style scoped>
.detail-user-info{
    padding:20px 22px;
    background: #fff;
    display: flex;
    align-items: center;
}
    .user-avatar{
        width:60px;
        height:60px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }
</style>
