<template>

    <div class="clerk-head">
        <div class="head-container">
            <img :src="getCover" class="clerk-img"/>
            <div class="clerk-name">{{clerk['name']}}</div>
            <van-tag :color="clerk['status'] | userStatusColorFilter" round size="medium">{{clerk['status'] | userStatusFilter}}</van-tag>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClerkCover",
        props:{
            clerk:{
                type:Object,
                default(){return {}}
            }
        },
        computed:{
            getCover(){
                return this.clerk['headurl']?this.clerk['headurl']:require('assets/images/common/default.png')

            }
        },
        methods:{


        },
        mounted() {

        }
    }
</script>

<style scoped>
.clerk-head{
    min-height:240px;
    max-height:280px;
    position: relative;
}
.head-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:absolute;
    bottom:20px;
    left:50%;
    transform: translateX(-50%);
}
    .clerk-img{
        width:100px;
        height:100px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }
    .clerk-name{
        font-size:20px;
        margin: 11px 0;
        font-weight: bold;
        color: #ffffff;
    }
</style>
