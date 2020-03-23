import {ajax} from "./request";
import {Toast} from "vant";
import utils from '../common/js/utils'
//编辑基本信息
export function profile_edit(val){
    ajax('SetProfile',val).then(res=>{
        if(res.code===0){
            Toast({message:'编辑基本信息成功!'})
        }
    })
}

//获得公司的基本信息
export function profile_company(id){
    return ajax('Customer',{id})
}
//修改电话号码
export function profile_changeTel(account,pwd,vcode){
    ajax('ChangeMobile',{account,pwd,vcode}).then(res=>{
        if(res.code===0){
            Toast({message:'修改手机号码成功!'});
            utils.goBack();
        }
    })
}
//修改密码
export function profile_editPwd(token,original){
    ajax('ResetPwd',{token,original}).then(res=>{
        if(res.code===0){
            Toast({message:'密码修改成功!'});
            utils.goBack();
        }
    })
}
