import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
//1.引入路由
import router from './router/index'
//2.引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;
//3.引入vant
import './common/js/components'
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant);

import utils from 'common/js/utils'
Vue.prototype.$utils = utils;

import config from 'common/config'
Vue.prototype.$config = config;

//时间格式胡
import moment from 'moment';
Vue.prototype.$moment = moment;
//使用ztree
import './common/js/jquery-1.4.4.min';
import './plugins/zTree/js/jquery.ztree.core.min.js'
import './plugins/zTree/js/jquery.ztree.excheck.min.js'

//引入store
import store from './store/index'

//ie摆平问提
import '@babel/polyfill'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()



//eventBus
let EventBus = new Vue();
Object.defineProperties(Vue.prototype,{
    $bus:{get:()=> EventBus}
});



//过滤器
import './filter/index'
new Vue({
  render: h => h(App),
    router,
    store,
}).$mount('#app');
