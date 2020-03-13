<template>
    <div class="search-company">
        <van-nav-bar title="搜索公司" left-arrow  @click-left="$utils.goBack()" @click-right="quitHandle">
            <i class="iconfont  icon-tuichu" slot="right"></i>
        </van-nav-bar>
        <div class="search-company-content">
            <h1>加入你的团队</h1>
            <p class="color-regular">你可以通过以下方式，加入你的团队。</p>
            <div class="flex justify-content-between align-items-center search-content" @click="searchCompanyHandle">
               <div>
                   <img src="~assets/images/account/search-company/search.png" alt="">
                  <span class="color-normal font-size-big">搜索团队号EID加入</span>
               </div>
                <van-icon name="arrow" size="18"/>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "SearchCompany",
        methods:{
            quitHandle(){
                this.$router.replace({
                    path:'/login'
                })
            },
            searchCompanyHandle(){
                this.$router.push({path:'/showCompany'})
            }
        }
    }
</script>

<style scoped>
.search-company{
    height:100vh;
    background: #ffffff;
}
    .search-company-content{
        padding:27px 26px 0 25px;
    }
    .search-company-content h1{
        font-size:27px;
        color:var(--color-normal);
        font-weight: bold;
        margin-bottom:10px;

    }
    .search-company-content p{
        margin-bottom:40px;
    }
    .search-company-content img{
        margin-right:18px;
        vertical-align: middle;
    }
    .search-content{
        border-bottom:1px solid #EEEEED;
        padding-bottom:18px;
    }
</style>
