import {ajax} from "./request";
import config from '../common/config'

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


