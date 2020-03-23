<template>
    <div >
       <van-nav-bar title="设置登录密码" left-arrow @click-left="$utils.goBack" :border="true"/>
        <div class="edit-container">
            <div class="edit-head">当前登录账号 : <strong class="color-high">{{getMobile}}</strong></div>
            <div class="edit-form-content">
                <van-field v-model="pwd" type="password" label="原始密码" required placeholder="请输入原始密码"class="border-b"/>
                <van-field v-model="newPwd" type="password" label="新密码"required  placeholder="请输入新密码"  class="border-b"/>
                <van-field v-model="confirmPwd" type="password" label="确认密码"required  placeholder="请输入确认密码" class="border-b"/>
                <div class="edit-intro">密码必须是6-20位的数字、英文组合</div>
                <div class="edit-intro color-high">忘记密码</div>
            </div>
        </div>
        <div class="btn-container">
            <van-button :type="btnType" :disabled="disable" block @click="editHandle">确定</van-button>
        </div>
    </div>
</template>

<script>
    import {common_refresh} from 'network/common.js'
    import {profile_editPwd} from 'network/profile.js'
    export default {
        name: "EditPassword",
        data(){
            return {
                pwd:'',
                newPwd:'',
                confirmPwd:'',
                btnType:'default',
                disable:true
            }
        },
        watch:{
            pwd(){this.change()},
            newPwd(){this.change()},
            confirmPwd(){this.change()},
        },
        computed:{
            getMobile(){
                return this.$utils.getLocalItem('userInfo').mobile
            }
        },
        methods:{
            change(){
                if(this.pwd && this.newPwd && this.confirmPwd){
                    this.btnType='info';
                    this.disable=false;
                }else{
                    this.btnType='default';
                    this.disable=true;
                }
            },
            check(){
                if(!this.pwd){this.$toast({message:'请输入原始密码!'}); return false;}
                if(!this.newPwd){this.$toast({message:'请输入新密码!'}); return false;}
                if(!this.confirmPwd){this.$toast({message:'请输入确认密码!'}); return false;}
                if(this.pwd !== this.$utils.getLocalItem('pwd')){this.$toast({message:'原始密码和登录密码不一致!'}); return false;}
                if(this.newPwd !== this.confirmPwd){this.$toast({message:'确认密码和新密码不一致'});return false}
                return true;
            },
            editHandle(){
                if(this.check()){
                    profile_editPwd(this.pwd,this.confirmPwd)
                }
            }
        }
    }
</script>

<style scoped>
.edit-container{
    background-color: #fff;
}
    .edit-head{
        text-align: center;
        width: 100%;
        padding: 33px 0 22px 0;
        font-size: 16px;
        font-weight: 400;
        color: #898888;
    }
    .edit-form-content{
        padding: 29px 16px 8px 19px;
    }
    .edit-intro{
        font-size:15px;
        color: #898888;
        margin:10px 0;
    }
    .btn-container{
        background: #ffffff;
        position:absolute;
        bottom:30px;
        right:10px;
        left:10px;
    }
</style>
