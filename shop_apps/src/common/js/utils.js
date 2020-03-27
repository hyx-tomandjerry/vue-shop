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
    removeStorage(val){
        localStorage.removeItem(val)
    },
    //判断手机号是否正确
    phoneIsCorrect(val){
        let reg=/^[1][3,4,5,7,8][0-9]{9}$/;
        return reg.test(val);
    },
    //判断密码是否正确
    tokenIsCorrect(val){
        let reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
        return reg.test(val);
    },
    //判断身份证号是否正确
    idnumIsCorrect(val){
        let reg= /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        return reg.test(val)
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
    },
    //数组图片过滤
    filterImg(array){
        return array.map(item=>item.url);
    },
    //图片转成base64
    binarySystem (baseurl) {
        let arr = baseurl.split(',');
        baseurl = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        let nameImg = [];
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
            nameImg.push(bstr.charCodeAt(n))
        }
        return nameImg
    },

    //计算某一时间到现在的天数



}
