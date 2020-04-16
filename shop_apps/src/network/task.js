import {ajax} from './request'
import utils from 'common/js/utils'
//任务管理列表
export function receivedTasksApi(page){
   return ajax('ReceivedTasks',{offset:utils.getOffset(page),status:0})
}
