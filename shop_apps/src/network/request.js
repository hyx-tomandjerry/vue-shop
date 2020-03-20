import {errorMsg} from "../common/js/errors";
import axios from 'axios'
import qs from 'qs'
import {Toast} from "vant";


let normalUrl ='http://192.168.10.222/services';
let xserverUrl='';
let baseParam ={};

let normalApi=['Login','Signup','InitPwd','RefreshOnlineUser','Errors'];
export function ajax(api,param={}){
    return new Promise((resolve,reject)=>{
        let result  = JSON.parse(localStorage.getItem('userInfo'));
        if(!result || !result.session){
            baseParam={};
        }else{
            normalUrl = result.server;
            xserverUrl = result.xserver;
            baseParam ={
                owner:result.owner,
                userId:result.id,
                session:result.session
            }
        }
        let url = getUrl(api);
        axios.defaults.baseURL =url;
        axios.defaults.timeout=5000;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        let option = {...baseParam,...param};
        axios({
            method:'POST',
            url:url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data:qs.stringify({...option,...{f:api}})
        }).then(res=>{
            if(!res){
                Toast({
                    message:'访问超时!'
                })
            }
            if(res.status ===200){
                if(api==='Login'){
                    resolve(res.data)
                }else{
                    if(res.data.code!==0){
                        errorMsgFun(res.data.code);
                    }
                    resolve(res.data)
                }


            }else{
                errorMsgFun(res.data.code)
            }


        }).catch(err=>{
            reject(err);
        })
    })
}
function errorMsgFun(code){
    if(errorMsg[code]){
        Toast({
            message:errorMsg[code]
        })
    }
}
function getUrl(api){
    let xserverApi = JSON.parse(localStorage.getItem('api')) || [];
    if(normalApi.includes(api)){
        return normalUrl;
    }else if(xserverApi.includes(api) || api ==='XAPIs'){
        return xserverUrl;
    }else{
        return normalUrl;
    }
}
