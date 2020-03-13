<template>
    <div class="position_r flex input-area">
        <div class="input-left" ><slot name="left"></slot></div>
        <div class="input-center"><slot name="center"></slot></div>
        <div class="input-right position_a" :style="{width:inputWidth+'px'}"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        props:{
            inputWidth:{
                type:[Number,String],
                default:40
            }
        }
    }
</script>

<style scoped>
    .input-area{
        border-bottom:1px solid #EEEEEF;
        padding:32px 0 20px;
        align-items: center;
    }
    .input-left{
        width:40px;
    }
    .input-right{
        right:20px;
    }
    .input-center{
        flex:1
    }
    .input-left img{
        width:22px;
        height:22px;
        margin-right:15px;
        vertical-align: middle;
    }
    .user-length{
        right:30px;
        font-size:16px;
        color:var(--color-gray)
    }

</style>
