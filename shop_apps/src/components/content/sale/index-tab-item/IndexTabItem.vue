<template>
    <van-row class="index-tab-item " type="flex" align="center" :style="{borderLeft:getLeftColor}" @click="tabHandle">
        <van-col span="15" offset="3" class="index-tab-item-title ">{{title}}</van-col>
        <van-col span="6">
            <img :src="src" alt="">
        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "IndexTabItem",
        props:{
            title:{
                type:String,
                default:''
            },
            item:Object,
            index:Number,
            src:String,
            leftColor:String,
            shop:[String,Number]
        },
        computed:{
            getLeftColor(){
                return "6px solid"+this.leftColor
            }
        },
        mounted(){
            console.log(this.shop);},
        methods:{
            tabHandle(){
                let url=''
                switch (this.item.val) {
                    case 'resolve':
                        url='/sale/resolve';
                        break;
                }
                this.$router.push(`${url}/${this.shop}`)

            }
        }
    }
</script>

<style scoped>
    .index-tab-item{
        height:99px;
        line-height:99px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width:100%;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background-color: #fff;
        margin-bottom:15px;
    }
    .index-tab-item img{
        width:55px;
        height:55px;
        vertical-align: middle;
    }
    .index-tab-item-title{
        font-size:16px;
        font-weight: bold;
    }
</style>
