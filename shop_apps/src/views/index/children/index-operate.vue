<template>
    <div class="index-operate flex justify-content-between">
        <router-link v-for="(item,index) in operateList" :key="index" :to="item.path" class="flex-1 text-center">
            <div><img :src="item.img" alt="" class="operate-img"></div>
            <div class="operate-name">{{item.name}}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "index-operate",
        data(){
            return{
                operateList:[
                    {name:'门店报修',img:require("assets/images/index/operate/index-repair.png"),path:'/shop/repair'},
                    {name:'快递包裹',img:require("assets/images/index/operate/index-express.png"),path:'/express'},
                    {name:'我的门店',img:require("assets/images/index/operate/index-shop.png"),path:'/index/shop'},
                    {name:'销售绩效',img:require("assets/images/index/operate/index-statistics.png"),path:'/sale'},
                ]
            }
        }
    }
</script>

<style scoped>
.operate-img{
    width:64px;
    height:64px;
    margin-bottom:5px;
}
    .operate-name{
        color:#2A2A2A;
        font-size:14px;
    }
</style>
