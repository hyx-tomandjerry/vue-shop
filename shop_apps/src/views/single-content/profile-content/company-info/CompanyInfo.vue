<template>
    <div class="bg-gray">
       <van-nav-bar title="公司详情" left-arrow @click-left="$utils.goBack"/>
        <company-head :companyInfo="companyInfo"/>
        <company-info-item :companyInfo="companyInfo"/>
    </div>
</template>

<script>
    import {profile_company} from 'network/profile.js'
    import {common_refresh} from 'network/common.js'

    import CompanyHead from './childComponent/CompanyHead';
    import CompanyInfoItem from './childComponent/InfoItem'
    export default {
        name: "CompanyInfo",
        components:{CompanyHead,CompanyInfoItem},
        data(){
            return{
                companyInfo:{}
            }
        },
        methods:{
            getCompanyInfo(){
                common_refresh().then(res=>{
                    profile_company(res.data.owner).then(result=>{
                        this.companyInfo=result.data;
                    })
                })
            }
        },
        mounted() {
            this.getCompanyInfo()
        }
    }
</script>

<style scoped>

</style>
