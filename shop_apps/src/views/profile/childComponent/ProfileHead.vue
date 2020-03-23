<template>
    <van-row class="profile-head flex align-items-center" >
       <van-col span="7" >
           <img src="~assets/images/common/avatar.jpg" alt="" class="user-img">
       </van-col>
       <van-col span="16">
           <div class="user-name"><strong class="color-normal">{{userInfo.name || ''}}</strong><span>({{userInfo.account}})</span></div>
           <div class="user-state">状态: <span>{{userInfo.status | userStatusFilter}}</span>     </div>
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
        border-bottom:1px solid #EEEEED;
        vertical-align: bottom;
        margin-right: 27px;
        border-radius: 6%;
    }
    .user-name{
        font-size:15px;
        font-weight: bold;
        padding-bottom:10px;
        border-bottom:1px solid #eeeeed;
        color: #898889;
    }
    .user-name strong{
        margin-right:5px;
    }
    .user-state{
        margin-top: 10px;
        font-size:14px;
        color:var(--color-gray)
    }
    .user-state span{
        margin:0 4px;
    }
</style>
