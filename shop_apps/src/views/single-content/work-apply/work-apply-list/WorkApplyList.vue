<template>
    <div>
        <van-nav-bar :title="this.$route.params.type==='apply'?'我的申请':'我的审批'" left-arrow @click-left="$utils.goBack()"/>
    </div>
</template>

<script>
    import {workflowInstancesApi,approvalRecordsApi} from 'network/apply';
    import {mapState} from 'vuex'
    export default {
        name: "WorkApplyList",
        data(){
            return{
                page:1,
                applyList:[]
            }
        },
        mounted() {
            this.getApplyList()
        },
        computed:mapState(['userInfo']),
        methods:{
            getApplyList(){
                switch (this.$route.params.type) {
                    case 'apply':
                        //申请
                        workflowInstancesApi(this.userInfo.id,this.page).then(res=>{
                            this.applyList=res.data;
                        })
                        break;
                    case 'check':
                        //审批
                        approvalRecordsApi(this.page).then(res=>{
                            this.applyList=res.data;
                        })
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>
