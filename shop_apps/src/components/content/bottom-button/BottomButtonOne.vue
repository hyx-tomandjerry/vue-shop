<template>
    <div class="btn-container" :class="{'position-btn':isPosition}">
        <van-button :type="btnType" block :disabled="disabled" @click="submitHandle">{{title}}</van-button>
    </div>
</template>

<script>
    export default {
        name: "BottomButtonOne",
        props:{
            title:{
                type:String,
                default:'确定'
            },
            isPosition:{
                type:Boolean,
                default:false
            },
            btnType:{
                type:String,
                default:'default'
            },
            disabled:{
                type:Boolean,
                default:true
            }
        },
        methods:{
            submitHandle(){
                this.$emit('submitHandle')
            }
        }
    }
</script>

<style scoped>
    .btn-container{
        border-top:13px solid #F7F7F7;
        background-color: #fff;
        padding:10px 15px;

    }
    .position-btn{
        position: fixed;
        z-index:10;
        bottom:0;
        width:100%;
    }
</style>
