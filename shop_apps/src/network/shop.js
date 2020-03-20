import {ajax} from "./request";
import {Toast} from "vant";

//获取公司全部门店
export function shop_List(val){
    return ajax('ChainShops',{...val,...{onmap:0}})
}
//加入门店申请
export function shop_join(org,shop,user){
    ajax('ApplyOrInvite2Join',{org,shop,user}).then(res=>{
        if(res.code===0){
            Toast({message:'已向该门店发送申请，等待店长同意!'})
        }
    })
}
