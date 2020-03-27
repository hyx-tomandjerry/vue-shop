<template>
    <van-row class="progerss-item" >
        <van-col span="4">
            <div class="progress-tag font-weight-bold">{{index}}</div>
        </van-col>
        <van-col span="20" class="progress-intro">
            <div class="flex justify-content-between">
                <div >{{item['acceptRoleName']}}</div>
                <van-tag    :color="item['status'] | approveStatusColorFilter">{{item['status'] | approveStatusFilter}}</van-tag>
            </div>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "ApproveCheckItem",
        props:{
            item:{
                type:Object,
                default(){return {}}
            },
            index:[Number,String]
        }
    }
</script>

<style scoped>
    .progerss-item{
        margin:14px 20px;
    }
    .progress-tag{
        width:30px;
        height:30px;
        line-height:30px;
        text-align: center;
        background:var(--high-text);
        color: #ffffff;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }
    .progress-intro{
        background:#EEEEED;
        padding:4px 5px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
    }
</style>
