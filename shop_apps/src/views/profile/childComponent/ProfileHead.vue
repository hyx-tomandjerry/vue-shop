<template>
    <van-row class="profile-head">
       <van-col span="8">
           <img src="~assets/images/common/avatar.jpg" alt="" class="user-img">
       </van-col>
       <van-col span="16">
           <div class="user-name"><strong class="color-normal">李金霞</strong><span>(12899999)</span></div>
       </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "ProfileHead",
        props:{
            userInfo:Object,
            default(){return {}}
        }
    }
</script>

<style scoped>
.profile-head{
    background-image: url("~assets/images/profile/img.png");
     background-size: 100%;
    background-repeat: no-repeat;
    padding: 33px 17px 25px 24px;
    margin-bottom: 14px;
    border-radius: 4px;
}
    .user-img{
        width: 77px;
        height: 77px ;
        padding: 11px 0;
        border-bottom:1px solid #EEEEED;
        vertical-align: bottom;
        margin-right: 27px;
        border-radius: 6%;
    }
    .user-name{
        font-size:15px;
        font-weight: bold;
        color: #898889;
    }
</style>
