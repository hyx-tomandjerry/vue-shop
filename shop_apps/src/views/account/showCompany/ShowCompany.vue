<template>
    <div class="show-company-container">
        <form action="/">
            <van-search
                v-model="eid"
                shape="round"
                placeholder="请输入公司EID"
                @search="searchHandle"
                @cancel="cancelHandle"
            />
        </form>
        <div class="company-container" v-if="companyItem.eid">
            <van-cell title="客户名称" :value="companyItem.name || ''" size="large" />
            <van-cell title="联系人" :value="companyItem.contactor || ''" size="large" />
            <van-cell title="联系电话" :value="companyItem.telephone || ''" size="large" />
            <van-cell title="地址" size="large" class="border-b">
                <div slot="default">
                    <span v-if="companyItem.provinceName || companyItem.cityName ||companyItem.districtName">
                        {{companyItem.provinceName}}{{companyItem.cityName}} {{companyItem.districtName}}{{companyItem.address ||''}}
                    </span>
                    <span v-else>暂未登记</span>
                </div>
            </van-cell>
        </div>
        <common-btn-one @submit="searchShopHandle" v-if="companyItem.eid"/>
    </div>
</template>

<script>

    import CommonBtnOne from 'components/content/normal-template/CommonBtnOne'
    import {account_search_company} from 'network/account.js'
    export default {
        name: "ShowCompany",
        components:{CommonBtnOne},
        data(){
            return{
                eid:'',
               companyItem:{}
            }
        },
        methods:{
            searchHandle(val){
                if(!val){
                    this.$toast({message:'请输入公司EID'})
                    return;
                }
                account_search_company(val).then(res=>{
                    this.companyItem =res.data
                })
            },
            cancelHandle(){
                this.eid=''
            },
            searchShopHandle(){
                this.$router.push({
                    name:'JoinShop',
                    params:{
                        eid:this.companyItem.id
                    }
                })
            }
        }
    }
</script>

<style scoped>
.show-company-container{
    background: #ffffff;
    height:100vh;
}
</style>
