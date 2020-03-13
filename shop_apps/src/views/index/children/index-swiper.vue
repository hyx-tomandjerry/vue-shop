<template>
   <van-swipe :autoplay="2000">
       <van-swipe-item v-for="(image,index ) in imageList" :key="index">
           <!--<img :src="image.img" alt="" v-lazy>-->
           <img src="~assets/images/shop/swiper/1.png" alt="">
       </van-swipe-item>
   </van-swipe>
</template>

<script>
    export default {
        name: "index-swiper",
        data(){
            return{
                imageList:[
                    {img:'~assets/images/shop/swiper/1.png'},
                    {img:'~assets/images/shop/swiper/2.png'},
                    {img:'~assets/images/shop/swiper/3.png'},
                    {img:'~assets/images/shop/swiper/4.png'},
                    {img:'~assets/images/shop/swiper/5.png'},
                    {img:'~assets/images/shop/swiper/6.png'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
