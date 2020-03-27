<template>
    <div >
        <van-nav-bar title="软件协议" :border="true" left-arrow @click-left="$utils.goBack"/>
        <div class="protocol-content">
            <div class="protocol-content-head">
                <img src="~assets/images/profile/protocol-logo.png" alt="">
                <p>门店助手</p>
            </div>
            <div class="protocol-content-list">
                <div class="protocol-content-list-item">
                    <div>服务协议</div>
                    <div><van-icon name="arrow" /></div>
                </div>
                <div class="protocol-content-list-item">
                    <div>隐私政策</div>
                    <div><van-icon name="arrow" /></div>
                </div>
            </div>
            <div class="protocol-bottom">
                Copyright © 2019 橡木林 沪ICP备18018276号-5
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProtocolContent"
    }
</script>

<style scoped>
.protocol-content{
    background:#ffffff;
    width:100vw;
    height:100vh;
    
}
    .protocol-content-head{
        padding-top: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .protocol-content-head img{
        width:80px;
        height:80px;
    }
    .protocol-content-head p{
        font-size:15px;
        font-weight: bold;
        color:#2A2A2A;
        margin:20px 0 24px;
    }
    .protocol-content-list-item{
        height:52px;
        line-height:52px;
        padding: 0 9px 0 14px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        border-bottom:1px solid #EEEEED;
        font-size:15px;
        color:#2A2A2A;
    }
    .protocol-bottom{
        position:fixed;
        bottom:30px;
        left:50%;
        white-space: nowrap;
        transform: translateX(-50%);
    }
</style>
