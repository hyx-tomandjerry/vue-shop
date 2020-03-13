<template>
  <common-template name="密码找回">
        <section slot="form">
            <form-input>
                <img src="~assets/images/account/phone.png" alt="" slot="left">
                <input type="tel" placeholder="请输入手机号" maxlength="11" v-model="mobile" slot="center">
                <p slot="right"><span class="color-normal">{{mobile.length}}</span>/11</p>
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
                :type="btnType"
                block
                :disabled="disabled"
                class="login-btn" @click="nextHandle">下一步</van-button>
            <div class="color-regular">返回 <strong class="color-high" @click="goLogin">登录</strong></div>

        </section>
  </common-template>
</template>

<script>
    import CommonTemplate from 'components/content/account/CommonTemplate'
    import FormInput from 'components/content/account/FormInput'
    export default {
        name: "ForgetPwd",
        components:{CommonTemplate,FormInput},
        data(){
            return{
                mobile:'',
                vcode:'',
                hasCode:false,
                num:10,
                btnType:'default',
                disabled:true
            }
        },
        watch:{
            mobile(){this.change()},
            vcode(){this.change()}
        },
        methods:{
            goLogin(){
                this.$router.replace({
                    path:'/login'
                })
            },
            change(){
                if(!this.mobile || !this.vcode){
                    this.btnType='default';
                    this.disabled=true;
                }else{
                    this.btnType='info';
                    this.disabled=false;
                }
            },
            //获得验证码
            getVcode(){
                if(this.checkTel()){
                    setInterval(()=>{
                        this.hasCode=true;
                        if(this.num>0){
                            this.num--
                        }else{
                            this.num=0;
                            this.hasCode=false;
                        }
                    },1000)
                }

            },
            checkTel(){
                if(!this.mobile){
                    this.$toast({
                        message:'手机号不能为空!'
                    })
                    return false;
                }
                if(!this.$utils.phoneIsCorrect(this.mobile)){
                    this.$toast({
                        message:'手机号不正确!'
                    })
                    return false;
                }
                return true;
            },
            checkVcode(){

                if(!this.vcode){
                    this.$toast({
                        message:'验证码不能为空!'
                    })
                    return false;
                }
                return true;
            },
            nextHandle(){
                if(this.checkVcode() && this.checkTel()){
                    this.$router.replace({
                        name:'SetPwd',
                        params:{
                            mobile:this.mobile,
                            vcode:this.vcode
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
   @import "~assets/css/content/account.css";
</style>
