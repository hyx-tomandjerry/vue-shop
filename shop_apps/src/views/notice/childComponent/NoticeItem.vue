<template>
    <div class="notice-item">
        <div class="text-center " > <p class="notice-item-time">{{item.occtime | format('YMDHMS')}}</p></div>
        <van-row class="flex justify-content-around align-items-center">
            <van-col span="4">
                <slot name="img"></slot>
            </van-col>
            <van-col span="20" class="notice-item-content">
                <p class="color-regular">通知</p>
                <p class="color-normal">{{item.content}}</p>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "NoticeItem",
        props:{
            item:{
                type:Object,
                default(){return {}}
            },
            index:Number
        }
    }
</script>

<style scoped>
    .notice-item{
        margin-bottom:10px;
    }

    .notice-item-time{
        margin-bottom:10px;
        display: inline-block;
        color: #ffffff;
        background: rgba(0,0,0,0.1);
        padding: 2px 8px 2px 9px;
        border-radius: 4px;
    }
    .notice-item-content{
        padding: 11px;
        border-radius: 9px;
        background-color:#fff;
        color: #898888;
    }
    .notice-item-content p:first-child{
        /*margin-bottom:8px;*/
    }
</style>
