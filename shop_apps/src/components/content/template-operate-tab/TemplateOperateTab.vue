<template>
    <div>
        <van-nav-bar :title="navTitle" left-arrow @click-left="$utils.goBack" class="navbar-extra" :border="false"/>
        <div class="apply-container">
            <div class="apply-container-top"></div>
            <div class="apply-tab-container" >
                <slot name="container"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TemplateOperateTab",
        props:{
            navTitle:String,
        }
    }
</script>

<style scoped>
    .navbar-extra{
        background:rgb(66, 176, 237);
    }
    .van-nav-bar__title,.van-nav-bar .van-icon{
        color: #ffffff !important;
    }
    .apply-container-top{
        background:url('~assets/images/common/sale_bg.png') no-repeat ;
        background-size:cover;
        height:120px;
    }
    .apply-tab-container{
        padding:15px 20px;
        margin-top:-90px;
    }

</style>
