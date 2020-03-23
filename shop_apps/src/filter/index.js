import Vue from 'vue';
import moment from 'moment'
import config from '../common/config'
Vue.filter('format',(value,type)=>{
    let dataTime=''
    if(!value){ return ''}
    switch (type) {
        case 'YMD':
           dataTime = moment(value).format('YYYY-MM-DD');
           break;
        case 'YMDHMS':
            dataTime = moment(value).format('YYYY-MM-DD HH:mm:ss');
            break;
        case 'HMS':
            dataTime = moment(value).format('HH:mm:ss');
            break;
        case 'YM':
            dataTime = moment(value).format('YYYY-MM');
            break;
        case 'MD':
            dataTime = moment(value).format('MM-DD');
            break;
        case 'HM':
            dataTime= moment(value).format('HH:mm');
            break;
        default:
            dataTime = moment(value).format('YYYY-MM-DD');
            break;
    }
    return dataTime;
})

//用户状态
Vue.filter('userStatusFilter',(value)=>{
    if(!value){return ''}
    return config.userStatusZn[value]
})
//身份证号显示*
Vue.filter('idCardFilter',(value)=>{
    if(!value){return ''}
    return value.replace(value.slice(6,14),'********')
})
