<template>
    <van-sticky>
        <div class="index-head">
            <div class="index-head-img">
                <img :src="companyInfo['ownerLogoUrl']" alt="" v-if="companyInfo['ownerLogoUrl']" class="index-head-img">
                <img src="~assets/images/common/default.png" alt="" class="index-head-img" v-else>
            </div>
            <h3>{{companyInfo.name}}</h3>
        </div>
    </van-sticky>

</template>

<script>
    export default {
        name: "index-head",
        props:{
            companyInfo:{
                type:Object,
                default(){return {}}
            }
        },
        data(){
            return {
                defaultImg:'~assets/images/common/default.png'
            }
        }
    }
</script>

<style scoped>
.index-head{
    display: flex;
    align-items: center;
    padding-bottom:13px;
}
    .index-head-img{
        width:38px;
        height:38px;
        border-radius:100%;
        margin-right:15px;
        vertical-align: middle;
    }
    .index-head h3{
        color:var(--normal-text)
    }
</style>
