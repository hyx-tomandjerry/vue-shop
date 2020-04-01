<template>
    <div>
        <van-nav-bar :title="getTitle" left-arrow @click-left="$utils.goBack" >
            <van-icon name="scan" slot="right" size="30" @click="bindDevice"/>
        </van-nav-bar>
        <van-field v-model="uuid" label="设备序列号" />

        <bottom-button-one :isPosition="true" :btnType="btnType" :disabled="disabled" @submitHandle="getDeviceInfo"/>
        <!--&lt;!&ndash;扫描二维码&ndash;&gt;-->
        <!--<div id="bcid">-->

        <!--</div>-->

        <!--设备详情-->
        <van-overlay :show="isShowDevice">
            <div class="wrapper" @click.stop>
                <div class="device-info text-center">
                    <div class="device-info-title">{{formType ==='cpe'?'cpe信息':'摄像头信息'}}</div>
                    <van-icon name="close" class="device-info-close" @click="isShowDevice=false"/>
                    <div class="device-info-content">
                        <van-cell title="设备名称" :value="deviceItem.name" value-class="text-left" title-class="text-left"/>
                        <van-cell title="uuid" :value="deviceItem['uuid']" value-class="text-left" v-if="formType ==='camera'" title-class="text-left"/>
                        <van-cell title="设备序列号" :value="deviceItem['seq']" value-class="text-left" v-if="formType ==='cpe'" title-class="text-left"/>
                        <van-cell title="购买时间" :value="deviceItem['buyDate'] | format('YYYY-MM-DD')" value-class="text-left" title-class="text-left"/>
                    </div>
                    <div class="device-info-bottom">
                        <van-button type="info" block @click="bindDevice">绑定</van-button>
                    </div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
    import BottomButtonOne from 'components/content/bottom-button/BottomButtonOne'
    import {shop_shopInfo,shop_device_camera_info,shop_device_router_info,shop_bind_camera,shop_bind_cpe} from 'network/shop.js';
    // 扩展API加载完毕后调用onPlusReady回调函数
    document.addEventListener( "plusready", onPlusReady, false );
    // 扩展API加载完毕，现在可以正常调用扩展API
    function onPlusReady() {
        let e = document.getElementById("bcid");
        e.removeAttribute( "disabled" );
    }
    let scan = null;
    export default {
        name: "BindDevice",
        components:{BottomButtonOne},
        data(){
            return{
                shopItem:{},
                formType:'',
                uuid:'',
                disabled:true,
                btnType:'default',
                deviceItem:{},
                isShowDevice:false

            }
        },
        watch:{
            uuid(){this.change()}
        },
        mounted() {

            this.getShopInfo(this.$route.params['shop'])
            this.formType = this.$route.params['type'];
        },
        computed:{
            getTitle(){
                return this.$route.params['type']==='camera'?'绑定摄像头':'绑定CPE'
            }
        },
        methods:{
            change(){
                if(this.uuid){
                    this.btnType='info';
                    this.disabled = false;
                }else{
                    this.btnType='default';
                    this.disabled = true;
                }
            },
            getDeviceInfo(){
                if(!this.uuid){
                    this.$toast({message:'请输入设备序列号!'})
                    return ;
                }
                switch (this.formType) {
                    case 'camera':
                        shop_device_camera_info(this.uuid).then(res=>{
                            this.deviceItem = res.data;
                        })
                        break;
                    case 'cpe':
                        shop_device_router_info(this.uuid).then(res=>{
                            this.deviceItem = res.data;
                        })
                        break;
                }
                this.isShowDevice = true;
            },
            getShopInfo(id){
                shop_shopInfo(id).then(res=>{
                    this.shopItem =res.data;
                })
            },
            bindDevice(){
                // this.startRecognize();
                // this.startScan()
                this.isShowDevice =false;
                switch (this.formType) {
                    case 'camera':
                        shop_bind_camera(this.shopItem.id,this.uuid);
                        break;
                    case 'cpe':
                        shop_bind_cpe(this.uuid,this.shopItem.id);
                        break;
                }
            },
            onmarked( type, result ) {
                var text = '未知: ';
                switch(type){
                    case plus.barcode.QR:
                        text = 'QR: ';
                        break;
                    case plus.barcode.EAN13:
                        text = 'EAN13: ';
                        break;
                    case plus.barcode.EAN8:
                        text = 'EAN8: ';
                        break;
                }
                alert( text+result );
            },
            startRecognize(){
                scan = new plus.barcode.Barcode('bcid');
                scan.onmarked = this.onmarked;
            },
            startScan(){
                scan.start();
            }

        },
        created() {




        }

    }
</script>

<style scoped>
#bcid{
    position:absolute;
    top:0;
    z-index:10;
    bottom:0;
    right:0;
    left:0;
    width:100%;
    background-color:#EEEEEF;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;

}
.device-info{
    min-width:300px;
    max-width:400px;
    background: #ffffff;
    position: relative;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
}
    .device-info-title{
        font-size:15px;
        font-weight: bold;
        color: #2a2a2a;
        padding: 10px 0;
        border-bottom:1px solid #eeeeed;
    }
    .device-info-close{
        position:absolute;
        top:8px;
        color: #898888;
        right:4px;
        font-size:20px;
    }
    .device-info-content{
        padding:20px 0 30px;

    }
    .device-info-bottom{
        padding: 10px 14px;
        border-top:1px solid #eeeeed;
    }
</style>
