import {ajax} from "./request";
import {Toast} from "vant";
import utils from '../common/js/utils'
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

//获得门店保修列表
export function shop_repair_list(status,shop,page){
    return ajax('ShopServiceOrders',{status,shop,offset:utils.getOffset(page)})
}

//获得维修子类别信息
export function shop_repair_catalog(id){
    return ajax('ServiceCatalog',{id})
}

//新建保修
export function shop_newRepair(shop,appointTime,type,category,summary,files,workflow){
    ajax('NewServiceOrder',{shop,appointTime,type,category,summary,files,workflow}).then(res=>{
        if(res.code===0){
            Toast({message:'新建报修成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}

//查看报修详情
export function shop_repairOrderItem(id){
    return ajax('ServiceOrder',{id,step:1})
}

//单个门店详情
export function shop_shopInfo(id){
    return ajax('ChainShop',{id})
}

//获得门店成员
export function shop_memberList(shop){
    return ajax('ShopSalesmen',{shop})
}

//获得门店区域人员列表
export function shop_areaMemberList(team){
    return ajax('Users',{team,status:-1,offset:0})
}
//获得门店设备列表
export function shop_deviceList(shop){
    return ajax('ShopDevices',{shop})
}

//修改门店面积
export function edit_shop_area(id,area){
    ajax('SetShopArea',{id,area}).then(res=>{
        if(res.code===0){
            Toast({message:'修改面积成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}

//修改门店地址
export function edit_shop_address(id,province,city,district,address,arr){
    ajax('SetShopAddress',{id,province,city,district,address,coordinate:arr.join(',')}).then(res=>{
        if(res.code===0){
            Toast({message:'修改地址成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}

//修改门店编号
export function edit_shop_seq(id,seq){
    ajax('SetShopSeq',{id,seq}).then(res=>{
        if(res.code===0){
            Toast({message:'修改编号成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}
//设为店长
export function shop_setManager(shop,user){
    ajax('SetShopManager',{shop,user}).then(res=>{
        if(res.code===0){
            Toast({message:'设置成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}

//同意店员加入
export function shop_agree_refuse(shop,user,reject){
    ajax('AcceptSalesman',{shop,user,reject}).then(res=>{
        if(res.code===0){
            Toast({message:'操作成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}
//查看摄像头信息
export function shop_device_camera_info(uuid){
    return ajax('Camera',{uuid});
}
//查看路由器信息
export function shop_device_router_info(seq){
    return ajax('Router',{seq})
}
//绑定摄像头
export function shop_bind_camera(shop,uuid){
    ajax('BindCamera',{shop,uuid}).then(res=>{
        if(res.code===0){
            Toast({message:'绑定摄像头成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}

//绑定cpe
export function shop_bind_cpe(seq,shop){
    ajax('ActivateRouter',{shop,seq}).then(res=>{
        if(res.code===0){
            Toast({message:'激活cpe成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}

//解绑摄像头
export function shop_unbind_camera(id){
    ajax('UnbindCamera',{id,status:1}).then(res=>{
        if(res.code ===0){
            Toast({message:'摄像头解绑成功!'});
            setTimeout(()=>{
                utils.goBack()
            },2000)
        }
    })
}

//删除店员
export function shop_delete_client(shop,users,permanent){
    console.log(shop.users,permanent)
    // ajax('RemoveSalesman')
}
