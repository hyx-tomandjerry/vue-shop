export default {
//    如果只有一个门店，保存门店信息
    setShopItem(state,val){
        state.shopItem = val;
    },
//    设置门店数量
    setShopCount(state,val){
        state.shopCount=val;
    },
    //设置个人信息
    setUserInfo(state,value){
        state.userInfo=value;
        localStorage.setItem('userInfo',value)
    }
}
