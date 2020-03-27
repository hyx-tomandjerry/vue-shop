<template>
    <div class="clerk-item bg-white">
       <van-cell title="门店名称" :value="shopItem['name']" size="large"/>
       <van-cell title="手机号码" :value="clerk['account']" size="large"/>
       <van-cell title="工作状态" :value="clerk['status'] | userStatusFilter" size="large"/>
       <van-cell title="职位" :value="getJob" size="large"/>
    </div>
</template>

<script>
    export default {
        name: "ClerkItem",
        props:{
            clerk:{
                type:Object,
                default(){return {}}
            },
            shopItem:{
                type:Object,
                default(){return {}}
            }
        },
        computed:{
            getJob(){
                if(this.shopItem['manager'] === this.clerk.id){
                    return '店长'
                }
                return '店员'
            }
        }
    }
</script>

<style scoped>

</style>
