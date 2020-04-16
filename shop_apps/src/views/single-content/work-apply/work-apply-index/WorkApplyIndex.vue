<template>
    <div>
        <template-operate-tab nav-title="工作申请">
            <operate-tab-item title="我的申请" slot="container" @operateHandle="operateHandle('apply')">
                <img src="~assets/images/work-apply/shenqing.png" alt="" slot="img" class="apply-img">
            </operate-tab-item>
            <operate-tab-item title="我的审批" slot="container" @operateHandle="operateHandle('check')">
                <img src="~assets/images/work-apply/shenpi.png" alt="" slot="img" class="check-img">
            </operate-tab-item>
        </template-operate-tab>
    </div>
</template>

<script>
    import TemplateOperateTab from '../../../../components/content/template-operate-tab/TemplateOperateTab';
    import OperateTabItem from '../../../../components/content/template-operate-tab/operate-tab-item';
    export default {
        name: "WorkApplyIndex",
        components:{OperateTabItem,TemplateOperateTab},
        methods:{
            operateHandle(type){
                this.$router.push({
                    path:'/apply/list/'+type
                })
            }
        }
    }
</script>

<style scoped>

    .apply-img{
        width:55px;
        height:33px;
        vertical-align: middle;
    }
    .check-img{
        width:42px;
        height:48px;
        vertical-align: middle;
    }
</style>
