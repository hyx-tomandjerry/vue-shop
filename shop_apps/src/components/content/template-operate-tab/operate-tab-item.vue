<template>
    <div class="operate-item flex justify-content-between align-items-center" @click="operateHandle">
        <div class="operate-item-title">{{title}}</div>
        <div >
           <slot name="img"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "operate-tab-item",
        props:{
            title:String
        },
        methods:{
            operateHandle(){
                this.$emit('operateHandle')
            }
        }
    }
</script>

<style scoped>
    .operate-item{
        padding:0 18px 0 44px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        height:99px;
        line-height:99px;
        background-color: #fff;
        margin-bottom: 11px;
        border-left: 6px solid #FFB126
    }
    .operate-item-title{
        font-size:16px;
        font-weight: bold;
        color:#2A2A2A;
    }
</style>
