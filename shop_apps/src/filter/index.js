import Vue from 'vue';
import moment from 'moment'
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
