<template>

    <van-row class="list-item bg-white" type="flex" align="center" @click="checkDevice">
        <van-col span="2" offset="2" class="text-center">
            <img src="~assets/images/shop/device/camera.png"
                       width="45"
                       height="45"
                       v-if="item['ownerName']==='camera'"/>
        </van-col>
        <van-col span="14" offset="1">
            <div v-if="item['ownerName']==='camera'">摄像头序列号: <span>{{item.name}}</span></div>
        </van-col>
        <van-col span="4">
            <van-tag
                size="medium"
                round
                :color="item.status|deviceStatusColorFilter">
                {{item.status | deviceStatusFilter}}</van-tag>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "DeviceListItem",
        props:{
            item:{
                type:Object,
                default(){return {}}
            },
            shopInfo:{
                type:Object,
                default(){return {}}
            },
            index:[String,Number]
        },
        methods:{
            checkDevice(){
                switch (this.item['ownerName']) {
                    case 'camera':
                        this.$router.push({
                            path:"/shop/device/camera/"+this.item.seq+"/"+this.shopInfo.id
                        })
                        break;
                    case 'router':

                        break;
                }

            }
        }

    }
</script>

<style scoped>
    .list-item{
        padding:8px 0;
        border-bottom:1px solid #EEEEED;
    }
    span{
        margin-left:7px;
    }
    img{
        vertical-align: middle;
    }
</style>
