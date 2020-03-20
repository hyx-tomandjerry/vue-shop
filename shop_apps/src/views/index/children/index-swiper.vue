<template>
   <van-swipe :autoplay="2000" class="index-swipe">
       <van-swipe-item v-for="(image,index ) in imageList" :key="index">
           <img :src="image.img" alt=""  height="136" width="100%" class="swipe-img">
       </van-swipe-item>
   </van-swipe>

</template>

<script>
    export default {
        name: "index-swiper",
        data(){
            return{
                imageList:[
                    {img:require("assets/images/index/swiper/1.png")},
                    {img:require("assets/images/index/swiper/2.png")},
                    {img:require("assets/images/index/swiper/3.png")},
                    {img:require("assets/images/index/swiper/4.png")},
                    {img:require("assets/images/index/swiper/5.png")},
                    {img:require("assets/images/index/swiper/6.png")},
                ]
            }
        }
    }
</script>

<style scoped>
.swipe-img{
    border-radius:5px;
}
    .index-swipe{
        margin-bottom:15px;
    }
</style>
