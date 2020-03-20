<template>
    <div id="login " class="bg-white">
        <common-template name="登录" >
            <div slot="intro">
                还没有账号，
                <span class="color-high" @click="goSign">立即注册</span>
            </div>
            <section slot="form">
                <form-input>
                    <img src="~assets/images/account/user.png" alt="" slot="left">
                    <input type="tel" placeholder="请输入账号" maxlength="11" v-model="account" slot="center">
                    <p class="user-length" slot="right"><span class="color-normal">{{account?account.length:0}}</span>/11</p>
                </form-input>
                <form-input>
                    <img src="~assets/images/account/lock.png" alt="" slot="left">
                    <input :type="isShow?'text':'password'" placeholder="请输入密码"  v-model="token" slot="center">
                    <div slot="right">
                        <img src="~assets/images/account/eye-open.png" alt="" v-if="isShow" @click="showToken">
                        <img src="~assets/images/account/eye-close.png" alt=""  v-else @click="showToken">
                    </div>
                </form-input>
                <van-button
                    :type="btnType"
                    block
                    :disabled="disabled"
                    class="login-btn" @click="loginHandle">登录</van-button>
                <div class="flex justify-content-between token-area">
                    <div class="color-high" @click="forgetTokenHandle">忘记密码</div>
                    <van-checkbox  v-model="remeber" shape="square" checked-color="#42B0ED" @click="remeberHandle" >记住密码</van-checkbox>
                </div>
            </section>
        </common-template>

    </div>
</template>

<script>
    import CommonTemplate from 'components/content/account/CommonTemplate'
    import FormInput from '../../../components/content/account/FormInput'

    import {common_xapis} from 'network/common.js';
    import {account_login} from 'network/account.js'
    export default {
        name: "Login",
        components:{CommonTemplate,FormInput},
        data(){
            return{
                account:'',
                token:'',
                isShow:false,//隐藏/显示密码
                remeber:false,//是否记住密码
                btnType:'default',
                disabled:true,//是否禁用
            }
        },
        watch:{
            account(){this.change()},
            token(){this.change()}
        },
        mounted(){
            if(this.$utils.getLocalItem('remeber')){
                this.remeber = this.$utils.getLocalItem('remeber');
                this.account = this.$utils.getLocalItem('account');
                this.token = this.$utils.getLocalItem('token');
            }
        },

        methods:{
            remeberHandle(){
                this.$utils.setLocalItem('remeber',!this.remeber);
                this.$utils.setLocalItem('account',this.account);
                this.$utils.setLocalItem('token',this.token)
            },
            forgetTokenHandle(){
                this.$router.replace({
                    path:'/forget'
                })
            },
            //注册
            goSign(){
                this.$router.replace({
                    path:'/sign'
                })
            },
            //满足条件，才能点击
            change(){
                if(!this.account || !this.token){
                    this.btnType='default';
                    this.disabled=true;
                }else{
                    this.btnType='info';
                    this.disabled=false;
                }
            },
            //显示密码
            showToken(){
                this.isShow = !this.isShow
            },
            //满足条件
            check(){
                if(!this.token){
                    this.$toast('密码不能为空!');
                    return false;
                }
                if(!this.account){
                    this.$toast('用户名不能为空!');
                    return false;
                }
                if(!this.$utils.phoneIsCorrect(this.account)){
                    this.$toast('电话号码不正确!');
                    return false;
                }
                if(!this.$utils.tokenIsCorrect(this.token)){
                    this.$toast('密码格式不正确');
                    return false;
                }
                return true;
            },
            loginHandle(){
                if(this.check()){
                    this.disabled=true;
                    account_login(this.account,this.token).then(res=>{
                        if(res.code === -1){
                            this.$toast({
                                message:'账号或者密码不正确!'
                            })
                        }else if(res.code === 0){
                            let userInfo = res.data;
                            if(userInfo.type !== this.$config.type){
                                this.$toast({
                                    message:'该账号不能在门店助手登录!'
                                })
                                return;
                            }
                            this.$utils.setLocalItem('userInfo',res.data);
                            //获得xapis
                            common_xapis().then(apis=>{
                                this.$utils.setLocalItem('api',apis.data)
                            })
                            //判断用户状态
                            if(userInfo.status === this.$config.userStatus.free){
                                //    未加入公司
                                this.$router.replace({
                                    path:'/search'
                                })
                            }else if(userInfo.status === this.$config.userStatus.normal){
                                //正常
                                this.$router.replace({
                                    path:'/index'
                                })
                            }
                            this.disabled =false;

                        }
                    });

                }
            }
        }
    }
</script>

<style scoped>
    @import "~assets/css/content/account.css";
    .token-area{
        font-size:15px;
    }

</style>
