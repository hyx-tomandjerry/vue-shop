<template>
    <div>
        <van-nav-bar title="摄像头详情" left-arrow @click-left="$utils.goBack" right-text="解绑" @click-right="unbindDevice"/>
        <van-cell size="large" title="设备名称" :value="deviceItem['name']"/>
        <van-cell size="large" title="绑定门店" :value="deviceItem['targetName']"/>
        <van-cell size="large" title="设备序列号" :value="deviceItem['uuid']"/>
        <van-cell size="large" title="出库时间" :value="deviceItem['outDate']| format('YMDHMS')"/>
        <van-cell size="large" title="签收时间" :value="deviceItem['accDate']| format('YMDHMS')"/>
        <van-cell size="large" title="绑定时间" :value="deviceItem['actDate']| format('YMDHMS')"/>
    </div>
</template>

<script>
    import {shop_device_camera_info,shop_unbind_camera} from 'network/shop.js'
    export default {
        name: "CameraInfo",
        data(){
            return{
                shopItem:{},
                deviceItem:{},
                isShowpop:false
            }
        },
        mounted() {

            this.getDeviceInfo(this.$route.params['seq'])
        },
        methods:{
            unbindDevice(){
                this.$dialog.confirm({
                    title:'解绑摄像头',
                    message:'设备将与门店解除绑定，是否确认解绑？'
                }).then(()=>{
                    shop_unbind_camera(this.deviceItem.id)
                }).catch(()=>{

                })
            },
            getDeviceInfo(seq){
                shop_device_camera_info(seq).then(res=>{
                    this.deviceItem = res.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
