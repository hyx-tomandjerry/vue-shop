<template>
  <div id="app">
    <router-view />
      <van-tabbar router border active-color="#42B0ED" inactive-color="#A2A2A2" v-show="$route.meta.isShow">
          <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="item.path" :info="item.info">
              <span>{{item.name}}</span>
              <img :src="tabIndex === index?item.active:item.normal" alt="" slot="icon">
          </van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>


export default {
  name: 'App',
    data(){
      return{
          tabIndex:0,
          tabbars:[
              {
                  name:'首页',
                  path:'/index',
                  normal:require("assets/images/tabbar/index.png"),
                  active:require("assets/images/tabbar/index_color.png")
              },{
                  name:'消息',
                  path:'/notice',
                  normal:require("assets/images/tabbar/message.png"),
                  active:require("assets/images/tabbar/message_color.png"),
                  info:this.$utils.getLocalItem('notice')>0 ? this.$utils.getLocalItem('notice'):''
              },{
                  name:'工作',
                  path:'/work',
                  normal:require("assets/images/tabbar/work.png"),
                  active:require("assets/images/tabbar/work_color.png")
              },{
                  name:'我的',
                  path:'/profile',
                  normal:require("assets/images/tabbar/mine.png"),
                  active:require("assets/images/tabbar/mine_color.png")
              }
          ]
      }
    },
  components: {

  },
    mounted() {
      console.log('51',this.$utils.getLocalItem('notice'))
    }
}
</script>

<style>
@import "assets/css/base.css";
    #app{
        height:100vh;
        width:100vw;
        background:#F7F7F7;
        padding-bottom:60px;
    }
</style>
