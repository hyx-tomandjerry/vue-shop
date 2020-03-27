<template>
    <van-row>
        <van-col span="6" offset="1" class="color-regular">{{label}}</van-col>
        <van-col span="17" :class="{'text-ellipse':isEllipse}">
            {{content}}
            <span class="color-high check-tag" v-if="isCheck" @click="check">查看</span>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "DetailRow",
        props:{
            label:String,
            content:String,
            isCheck:Boolean,
            isEllipse:Boolean
        },
        methods:{
            check(){
                this.$emit('check')
            }
        }
    }
</script>

<style scoped>
    .van-row{
        padding-bottom: 10px;
    }
    .check-tag{
        font-size:12px;
        position:absolute;
        right:20px;

    }
</style>
