<template>
    <div class="bg-white">
        <van-divider class="divider-line">服务详情</van-divider>
        <van-row class="workflow-status">
            <van-col span="6" offset="1">审核进度:</van-col>
            <van-col span="16">

                <van-tag :color="detailInfo['approval'] | approveStatusColorFilter"
                         round
                         size="large"
                         v-if="detailInfo.status === $config.repairStatus.submit">
                    {{detailInfo['approval']|approveStatusFilter }}
                </van-tag>
                <van-tag
                    size="large"
                    :color="detailInfo['status'] | repairStatusColorFilter"
                    round
                    v-else>{{detailInfo['status'] | repairStatusFilter}}</van-tag>
            </van-col>
        </van-row>
        <detail-row label="申请时间" :content="detailInfo['applyDate'] | format('YYYY-MM-DD')" />
        <detail-row label="预约时间" :content="detailInfo['appointTime']  | format('YYYY-MM-DD')" />
        <detail-row label="门店编号" :content="detailInfo['shopSeq']" />
        <detail-row label="订单编号" :content="detailInfo['seq']" />
    </div>
</template>

<script>
    import DetailRow from 'components/content/detail-row/DetailRow'
    export default {
        name: "ServiceInfo",
        components:{DetailRow},
        props:{
            detailInfo:{
                type:Object,
                default(){return {}}
            }
        }
    }
</script>

<style scoped>
.workflow-status{
    padding:5px 0 20px;
    border-bottom:1px solid #eeeeed;
    margin-bottom:10px;
}
</style>
