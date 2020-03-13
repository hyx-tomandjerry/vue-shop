import Vuex from 'vuex'
import  Vue from 'vue'
import mutations from 'mutations'
Vue.use(Vuex);
const store  = new Vuex.store({
    state:{
        userInfo:{}
    },
    mutations
})
