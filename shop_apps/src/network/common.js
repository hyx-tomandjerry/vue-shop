import {ajax} from "./request";
import config from '../common/config'
import utils from '../common/js/utils'
//获得xapis接口

export function common_xapis(){
    return ajax('XAPIs')
}
//获得全部区域接口
export function common_area(owner){
    return ajax('Departments',{owner,...{type:config.type,parent:-1}})
}

//获得公司全部品牌接口
export function common_brand(owner){
    return ajax('MyBrands',{owner})
}

//刷新个人信息接口
export function common_refresh(){
    return ajax('RefreshOnlineUser')
}
//获得文章接口
export function common_MyArticles(type,page){
    return ajax('MyArticles',{type,offset:utils.getOffset(page)})
}
//获得文章详情
export function common_Article(id){
    return ajax('Article',{id})
}

//获得消息个数接口
export function common_MyEventNumbers(){
    return ajax('MyEventNumbers')
}

//获得消息接口接口
export function common_EventFlows(account,catalog,page){
    return ajax('EventFlows',{...{contract:0,status:0,offset:utils.getOffset(page),owner:0},account,catalog})
}
//上传文件获得token
export function common_token(){
    return ajax('UploadToken')
}

//从公司或者门店删除店员
export function common_delete(val){
   return ajax('RemoveSalesman')
}


