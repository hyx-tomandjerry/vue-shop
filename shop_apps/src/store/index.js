import Vuex from 'vuex'
import  Vue from 'vue'
import mutations from './mutations';
import getters from './getters'
Vue.use(Vuex);
const state ={
    userInfo:{},
    shopItem:{},
    shopCount:0,//门店数量
};
export default new Vuex.Store({
    state,
    mutations,
    getters
})

