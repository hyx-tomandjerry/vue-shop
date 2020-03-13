<template>
    <div class="normal-btn-container" :class="{'normal-btn-position':isPosition}">
        <van-button type="info" class="normal-btn" block @click="submitHandle">{{title}}</van-button>
    </div>

</template>

<script>
    export default {
        name: "CommonBtnOne",
        props:{
            isPosition:{
                type:Boolean,
                default:true
            },
            title:{
                type:String,
                default:'确定'
            }
        },
        methods:{
            submitHandle(){
                this.$emit('submit')
            }
        }
    }
</script>

<style scoped>
    .normal-btn-position{
        position:fixed;
        bottom:20px;
        right:0;
        left:0;
    }
    .normal-btn-container{
        padding: 0 15px;
        font-size:16px;

    }
    .van-button--normal{
        font-size:16px;
    }
</style>
