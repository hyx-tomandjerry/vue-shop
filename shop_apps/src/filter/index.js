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
//用户状态颜色
Vue.filter('userStatusColorFilter',value=>{
    if(!value){return ''}
    return config.userStatusColor[value]
})
//身份证号显示*
Vue.filter('idCardFilter',(value)=>{
    if(!value){return ''}
    return value.replace(value.slice(6,14),'********')
})
//灯具分类
Vue.filter('repairCatalogFilter',value=>{
    if(!value) {return ''}
    return config.repairTypeZn[value]
})

//保修状态
Vue.filter('repairStatusFilter',value=>{
    if(!value) {return ''}
    return config.repairStatusZn[value]
})
//报修颜色
Vue.filter('repairStatusColorFilter',value=>{
    if(!value) {return ''}
    return config.repairStatusColor[value]
})
//审批颜色状态
Vue.filter('approveStatusColorFilter',value=>{
    if(!value) {return ''}
    return config.approveStatusColor[value]
})
Vue.filter('approveStatusFilter',value=>{
    if(!value) {return ''}
    return config.approvalStatusZn[value]
})
//维修类别
Vue.filter('catalogZnFilter',value=>{
    if(!value){return ''}
    return config.repairTypeZn[value]
})

//设备
Vue.filter('deviceStatusFilter',value=>{
    if(!value){return ''}
    return config.derviceStatusZn[value]
})
Vue.filter('deviceStatusColorFilter',value=>{
    if(!value){return ''}
    return config.deviceStatusColor[value]
})
