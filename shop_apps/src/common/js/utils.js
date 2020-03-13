import {Toast} from 'vant'
import {errorMsg} from "./errors";
import config from '../config'
export default {
    //错误码
    getErrorMsg(err){
        if(errorMsg[err]){
            Toast({
                message:errorMsg[err]
            })
        }
    },
    setLocalItem(key,val){
        localStorage.setItem(key,JSON.stringify(val))
    },
    getLocalItem(val){
        let result  = localStorage.getItem(val);
        return JSON.parse(result)
    },

    //判断手机号是否正确
    phoneIsCorrect(val){
        let reg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(!reg.test(val)){
            return false;
        }else{
            return true
        }
    },
    //判断密码是否正确
    tokenIsCorrect(val){
        let reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
        if(!reg.test(val)){
            return false;
        }else{
            return true;
        }
    },
    //返回上一页
    goBack(){
        window.history.go(-1);
    },
    //获得页间距
    getOffset(page){
        if(page){
            return config.page *(page-1);
        }else{
            return 0;
        }
    },
    //返回地址
    fullAdressIntro(item){
        return `${item['provinceName'] || ''}${item['districtName'] || ''}${item['cityName']||''}${item['address']||''}`
    }
}
