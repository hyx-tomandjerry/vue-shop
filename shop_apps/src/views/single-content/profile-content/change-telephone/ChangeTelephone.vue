<template>
    <div class=" change-container">
       <van-nav-bar title="更换手机号" left-arrow @click-left="$utils.goBack"/>
        <form-input>
            <input type="tel" placeholder="请输入账号" maxlength="11" v-model="account" slot="center">
            <p class="user-length" slot="right"><span class="color-normal">{{account?account.length:0}}</span>/11</p>
        </form-input>
        <form-input inputWidth="100">
            <input type="text" placeholder="请输入验证码"  v-model="vcode" slot="center">
            <div slot="right" >
                <van-button type="default" disabled v-if="hasCode" class="code-btn" style="padding:0;">重新获取({{num}})</van-button>
                <van-button type="info" @click="getVcode" v-else class="code-btn">获取验证码</van-button>

            </div>
        </form-input>
        <form-input>
            <input :type="isShow?'text':'password'" placeholder="输入密码"  v-model="token" slot="center">
            <div slot="right">
                <img src="~assets/images/account/eye-open.png" alt="" v-if="isShow" @click="showToken">
                <img src="~assets/images/account/eye-close.png" alt=""  v-else @click="showToken">
            </div>
        </form-input>
       <div class="btn-container">
           <van-button :type="btnType" :disabled ="disable" block @click="changeHandle" >确定</van-button>
       </div>
    </div>
</template>

<script>
    import FormInput from 'components/content/account/FormInput'
    export default {
        name: "ChangeTelephone",
        components:{FormInput},
        data(){
            return{
                account:'',//手机号
                vcode:'',//验证码
                hasCode:false,
                num:60,
                token:'',
                isShow:false,
                btnType:'default',
                disable:true

            }
        },
        watch:{
            account(){this.change()},
            token(){this.change()},
            vcode(){this.change()}
        },
        methods:{
            changeHandle(){
                if(this.check()){
                    profile_changeTel(this.account,this.token,this.vcode)
                }
            },
            check(){
                if(!this.account){
                    this.$toast({message:'账号不能为空!'})
                    return false
                }
                if(!this.$utils.phoneIsCorrect(this.account)){
                    this.$toast({message:'电话号码不正确'});
                    return false;
                }
                if(!this.vcode){
                    this.$toast({message:'请填写验证码!'})
                    return false
                }
                if(!this.token){
                    this.$toast({message:'请输入密码!'})
                    return false
                }
                if(!this.$utils.tokenIsCorrect(this.token)){
                    this.$toast({message:'密码格式不正确'});
                    return false;
                }
               if(this.token !== this.$utils.getLocalItem('pwd')){
                   this.$toast({message:'输入密码不正确'});
                   return false;
               }
                return true;
            },
            change(){
                if(this.account && this.vcode && this.token){
                    this.btnType='info';
                    this.disable=false;
                }else{
                    this.btnType='default';
                    this.disable=true;
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
            showToken(){this.isShow= !this.isShow}
        }
    }
</script>

<style scoped>
.change-container{
    width:100vw;
    height:100vh;
    background: #ffffff;
}
.code-btn{
    height:28px;
    line-height:28px;
    padding:0 10px;
}
    .btn-container{
        margin:30px 11px;
        font-size:15px;
        font-weight: bold;
    }
    .btn-container .van-button{
        border-radius:10px;
    }
</style>
