<template>
   <div class="common-template position_r bg-white">
       <van-nav-bar/>
       <div class="accoount-container">
            <div class="account-title"><slot name="name">{{name}}</slot></div>
           <div class="title-intro">
               <slot name="intro"></slot>
           </div>
           <div class="account-form"><slot name="form"></slot></div>

       </div>
       <div class="account-protocol">登录/注册即表示同意 <span  class="color-high">《乐象工程管家服务协议》</span></div>
   </div>
</template>

<script>

    export default {
        name: "CommonTemplate",
        props:{
            name:String,//标题
            intro:String,//标题介绍

        }
    }
</script>

<style scoped>
.accoount-container{
    padding:57px 12px 17px 22px;
    background: #ffffff;
}
    .account-title{
        font-size:30px;
        font-weight:bold;
        color:var(--color-normal);
        margin-bottom:5px;
    }
    .title-intro{
        font-size:var(--font-size);
        color:var(--color-gray);
        margin-bottom:60px;
    }

    .account-protocol{
        font-size:12px;
        position:fixed;
        z-index:10;
        bottom:20px;
        left:50%;
        white-space: nowrap;
        transform:translateX(-50%);
    }
    .common-template{
        height:100vh;
    }
</style>
