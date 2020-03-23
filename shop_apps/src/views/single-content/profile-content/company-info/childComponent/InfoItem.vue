<template>
    <div class="bg-white">
        <van-cell title="公司名称" :value="companyInfo.name" class="text-ellipse"/>
        <van-cell title="公司简称" :value="companyInfo.alias" />
        <van-cell title="公司EID" :value="companyInfo.eid" />
        <van-cell title="公司联系人" :value="companyInfo.contactor" />
        <van-cell title="公司联系电话" :value="companyInfo.telephone" />
        <van-cell title="公司地址" :value="$utils.fullAdressIntro(companyInfo)" class="text-ellipse" />
        <van-cell title="成立时间" :value="companyInfo.regdate | format('YYYY-MM-DD')" />
        <van-cell title="工商信息" :value="companyInfo.license" />
    </div>
</template>

<script>
    export default {
        name: "InfoItem",
        props:{
            companyInfo:{
                type:Object,
                default(){return{}}
            }
        }
    }
</script>

<style scoped>

</style>
