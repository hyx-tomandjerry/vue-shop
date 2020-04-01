import {ajax} from "./request";
import {Toast} from "vant";
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
export function common_delete(shop,users,permanent){
    console.log(shop);
    ajax('RemoveSalesman',{shop,users,permanent}).then(res=>{
        console.log(res)
        if(res.code===0){
            Toast({message:'操作成功!'})
        }
    })
}
//获得门店数量
export function common_MyShops(){
    return ajax('MyShops',{address:''})
}
//获得维修类别
export function common_catalog(){
    return ajax('ServiceCatalogs')
}

//删除图片
export function common_removeFile(files){
    ajax('RemoveFiles',{files}).then(res=>{
        if(res.code===0){
            Toast({message:'图片删除成功!'})
        }
    })
}

//获得所有流程模板
export function common_approve(type){
    return ajax('Workflows',{type})
}


