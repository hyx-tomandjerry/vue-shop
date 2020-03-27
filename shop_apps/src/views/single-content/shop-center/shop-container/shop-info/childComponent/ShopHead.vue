<template>
    <img :src="getCover" class="sho-img"/>
</template>

<script>
    export default {
        name: "ShopHead",
        props:{
            shopInfo:{
                type:Object,
                default(){return {}}
            }
        },
        computed:{
            getCover(){
                return this.shopInfo['coverurl']?this.shopInfo['coverurl']:require('assets/images/common/default.png')

            }
        }
    }
</script>

<style scoped>
.sho-img{
    width:100%;
    max-height:230px
}
</style>
