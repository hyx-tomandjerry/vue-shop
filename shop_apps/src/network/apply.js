import {ajax} from "./request";
import utils from 'common/js/utils'
//我的申请列表
export function workflowInstancesApi(applier,page){
    return ajax('WorkflowInstances',{applier,...{offset:utils.getOffset(page),type:-1,status:0}})
}
//我的审批列表
export function approvalRecordsApi(page){
    return ajax('ApprovalRecords',{offset:utils.getOffset(page)})
}
