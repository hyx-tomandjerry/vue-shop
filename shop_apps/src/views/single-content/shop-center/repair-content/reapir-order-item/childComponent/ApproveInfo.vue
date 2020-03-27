<template>
    <div class="bg-white">
        <van-divider class="divider-line">审批流程</van-divider>
        <approve-check-item v-for="(item,index) in detailInfo['steps']" :item="item" :index="index" :key="index"/>
    </div>
</template>

<script>
    import ApproveCheckItem from 'components/content/approve-check-item/ApproveCheckItem'
    export default {
        name: "ApproveInfo",
        components:{ApproveCheckItem},
        props:{
            detailInfo:{
                type:Object,
                default(){return {}}
            }
        }
    }
</script>

<style scoped>

</style>
