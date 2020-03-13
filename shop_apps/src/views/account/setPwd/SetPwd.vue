<template>
    <common-template name="设置密码">
        <section slot="form">
            <form-input>
                <img src="~assets/images/account/lock.png" alt="" slot="left">
                <input :type="isShowToken?'text':'password'" placeholder="请输入密码"  v-model="token" slot="center">
                <div slot="right">
                    <img src="~assets/images/account/eye-open.png" alt="" v-if="isShowToken" @click="showToken('token')">
                    <img src="~assets/images/account/eye-close.png" alt=""  v-else @click="showToken('token')">
                </div>
            </form-input>
            <form-input>
                <img src="~assets/images/account/lock.png" alt="" slot="left">
                <input :type="isShowConfirm?'text':'password'" placeholder="请再次输入密码"  v-model="confirmToken" slot="center">
                <div slot="right">
                    <img src="~assets/images/account/eye-open.png" alt="" v-if="isShowConfirm" @click="showToken('confirm')">
                    <img src="~assets/images/account/eye-close.png" alt=""  v-else @click="showToken('confirm')">
                </div>
            </form-input>
            <div class="pwd-intro">密码长度为6-12位,由英文和数字组成!</div>
            <van-button
                :type="btnType"
                block
                :disabled="disabled"
                class="login-btn" @click="setPwdHandle">确定</van-button>
            <div class="color-regular">返回 <strong class="color-high" @click="goLogin">登录</strong></div>
        </section>
    </common-template>
</template>

<script>
    import CommonTemplate from 'components/content/account/CommonTemplate'
    import FormInput from 'components/content/account/FormInput'

    import {account_forget_token} from 'network/account.js'
    export default {
        name: "SetPwd",
        components:{CommonTemplate,FormInput},
        data(){
            return{
                token:'',
                isShowToken:false,
                confirmToken:'',
                isShowConfirm:false,
                btnType:'default',
                disabled:true,
                telephone:'',//电话号码
                vcode:''//验证码
            }
        },
        watch:{
            token(){this.change()},
            confirmToken(){this.change()}
        },
        methods:{
            change(){
                if(!this.token || !this.confirmToken){
                    this.btnType='default';
                    this.disabled=true;
                }else{
                    this.btnType='info';
                    this.disabled=false;
                }
            },
            check(){
                if(!this.token){
                    this.$toast({message:'请输入密码!'});
                    return false;
                }
                if(!this.confirmToken){
                    this.$toast({message:'请输入确认密码!'});
                    return false;
                }
                if(!this.$utils.tokenIsCorrect(this.token)){
                    this.$toast({message:'密码格式不正确!'});
                    return false;
                }
                if(!this.$utils.tokenIsCorrect(this.confirmToken)){
                    this.$toast({message:'确认密码格式不正确!'});
                    return false;
                }
                if(this.token !== this.confirmToken){
                    this.$toast({message:'两次输入的密码不一样!'});
                    return false;
                }
                return true;
            },
            goLogin(){
                this.$router.replace({
                    path:'/login'
                })
            },
            showToken(type){
                switch (type) {
                    case 'token':
                        this.isShowToken = !this.isShowToken;
                        break;
                    case 'confirm':
                        this.isShowConfirm = !this.isShowConfirm;
                        break;
                }
            },
            setPwdHandle(){
                if(this.check()){
                    account_forget_token(this.telephone,this.token,this.vcode);
                    setTimeout(()=>{
                        this.$router.replace({
                            path:'/login'
                        })
                    },2000)
                }
            }
        },
        mounted() {
            if(this.$route.params){
                this.telephone = this.$route.params.mobile;
                this.vcode=this.$route.params.vcode
            }
        }
    }
</script>

<style scoped>
@import "~assets/css/content/account.css";
    .pwd-intro{
        margin:8px 16px;
        font-size:12px;
        color:#42B0ED;
    }
</style>
