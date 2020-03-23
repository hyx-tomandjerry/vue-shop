<template>
    <van-row class="company-head bg-white" gutter="50">
        <van-col span="4" >
            <img :src="getLogourl" alt="" class="company-logo">
        </van-col>
        <van-col span="20">
            <div class="company-name">{{companyInfo.name}}</div>
            <div class="company-eid">EID:{{companyInfo.eid}}</div>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "CompanyHead",
        props:{
            companyInfo:{
                type:Object,
                default(){return{}}
            }
        },
        computed:{
            getLogourl(){
                if(this.companyInfo.logourl){
                    return this.companyInfo.logourl;
                }else{
                    return require('../../../../../assets/images/common/default.png')
                }
            }
        }
    }
</script>

<style scoped>
.company-head{
    padding: 17px 0 16px 22px;
    display: flex;
    align-items: center;
    border-bottom:1px solid #eeeeed;
}
    .company-logo{
        width:60px;
        height:60px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        vertical-align: middle;
    }
    .company-name{
        font-size: 16px;
        font-weight: bold;
        color: #2A2A2A;
        margin-bottom: 5px;
    }
    .company-eid{
        font-size: 16px;
        color: #898888;;
    }
</style>
