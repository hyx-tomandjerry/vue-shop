import {ajax} from "./request";
import config from '../common/config'
import {Toast} from "vant";
import utils from '../common/js/utils'

//登录
export function account_login(user,token){
    return  ajax('Login', {user, token})
}
//注册
export function account_sign(val){
   ajax('Signup',val).then(res=>{
       if(res.code===0){
           Toast({message:'用户注册成功!'});
       }
   })
}
//忘记密码
export function account_forget_token(mobile,token,vcode){
    ajax('InitPwd',{mobile,token,vcode}).then(res=>{
        if(res.code===0){
            Toast({message:'设置密码成功!'});
        }
    })
}
//搜索公司eid
export function account_search_company(eid){
    return ajax('Customer',{eid})
}
