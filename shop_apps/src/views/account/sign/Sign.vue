<template>
    <common-template name="注册">
        <div slot="intro">
            您好！欢迎来到乐象门店助手
        </div>
        <section slot="form">
            <form-input>
                <img src="~assets/images/account/user.png" alt="" slot="left">
                <input type="text" placeholder="请输入姓名"  v-model="name" slot="center">
            </form-input>
            <form-input>
                <img src="~assets/images/account/phone.png" alt="" slot="left">
                <input type="tel" maxlength="11"
                       placeholder="请输入手机号" v-model="telephone" slot="center">
                <p slot="right"><span class="color-normal">{{telephone.length}}</span>/11</p>
            </form-input>
            <form-input>
                <img src="~assets/images/account/lock.png" alt="" slot="left">
                <input :type="isShow?'text':'password'" placeholder="输入密码"  v-model="token" slot="center">
                <div slot="right">
                    <img src="~assets/images/account/eye-open.png" alt="" v-if="isShow" @click="showToken">
                    <img src="~assets/images/account/eye-close.png" alt=""  v-else @click="showToken">
                </div>
            </form-input>
            <form-input inputWidth="100">
                <img src="~assets/images/account/email.png" alt="" slot="left">
                <input type="text" placeholder="请输入验证码"  v-model="vcode" slot="center">
                <div slot="right" >
                    <van-button type="default" disabled v-if="hasCode" class="code-btn">重新获取({{num}})</van-button>
                    <van-button type="info" @click="getVcode" v-else class="code-btn">获取验证码</van-button>

                </div>
            </form-input>
            <van-button
                :type="submitType"
                block
                :disabled="disabled"
                class="login-btn" @click="signHandle">注册</van-button>
            <div class="color-regular">返回 <strong class="color-high" @click="goLogin">登录</strong></div>
        </section>
    </common-template>
</template>

<script>
    import CommonTemplate from 'components/content/account/CommonTemplate'
    import FormInput from 'components/content/account/FormInput'

    import {account_sign} from 'network/account.js'
    export default {
        name: "Sign",
        components:{CommonTemplate,FormInput},
        data(){
            return{
                name:'',
                telephone:'',
                token:'',
                vcode:'',
                isShow:false,
                btnType:'info',
                submitType:'default',
                disabled:true,
                num:10,
                hasCode:false
            }
        },
        watch:{
            name(){this.change()},
            telephone(){this.change()},
            token(){this.change()},
            vcode(){this.change()},
        },
        methods:{
            goLogin(){
                this.$router.replace({
                    path:'/login'
                })
            },
            change(){
                if(!this.name || !this.telephone || !this.token || !this.vcode){
                    this.submitType='default';
                    this.disabled=true
                }else{
                    this.submitType='info';
                    this.disabled=false;
                }
            },
            //获得验证码
            getVcode(){
                setInterval(()=>{
                    this.hasCode=true;
                    if(this.num>0){
                        this.num--
                    }else{
                        this.num=0;
                        this.hasCode=false;
                    }
                },1000)
            },
            showToken(){
                this.isShow = !this.isShow;
            },
            check(){
                if(!this.name){
                    this.$toast({message:'请输入用户名'});
                    return false;
                }
                if(!this.telephone){
                    this.$toast({message:'请输入手机号'});
                    return false;
                }
               if(!this.$utils.phoneIsCorrect(this.telephone)){
                   this.$toast({message:'电话号码不正确'});
                   return false;
               }
                if(!this.token){
                    this.$toast({message:'请输入密码'});
                    return false;
                }
                if(!this.$utils.tokenIsCorrect(this.token)){
                    this.$toast({message:'密码格式不正确'});
                    return false;
                }
                if(!this.vcode){
                    this.$toast({message:'请输入验证码'});
                    return false;
                }
                return true;
            },
            //注册
            signHandle(){
                if(this.check()){
                    let options={
                        name:this.name,
                        mobile:this.telephone,
                        token:this.token,
                        gender:this.$config.gender.man,
                        type:this.$config.type,
                        vcode:this.vcode
                    }
                    account_sign(options);
                    setTimeout(()=>{
                        this.$router.replace({
                            path:'/login'
                        })
                    },2000)
                }
            }
        }
    }
</script>

<style scoped>
    @import "~assets/css/content/account.css";


</style>
