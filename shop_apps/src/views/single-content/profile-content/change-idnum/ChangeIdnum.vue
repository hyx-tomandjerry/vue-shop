<template>
    <div>
       <van-nav-bar title="修改身份证号" left-arrow @click-left="$utils.goBack"/>
        <div class="edit-content">
            <div class="edit-intro">输入密码:</div>
            <van-row v-if="!isShowIdnum">
                <van-col span="18">
                    <input type="text" placeholder="请输入密码" class="edit-input" v-model="pwd">
                </van-col>
                <van-col span="4" offset="1">
                    <van-button round size="small" type="info" @click="showIdnumHandle">确定</van-button>
                </van-col>
            </van-row>
            <van-row v-else>
                <van-col span="18">
                    <input type="text" placeholder="输入身份证号" class="edit-input" v-model="idnum">
                </van-col>
                <van-col span="4" offset="1">
                    <van-button round size="small" type="info" @click="editIdnumHandle">确定</van-button>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import {common_refresh} from 'network/common.js';
    import {profile_edit} from 'network/profile.js'
    export default {
        name: "ChangeIdnum",
        data(){
            return{
                isShowIdnum:false,
                pwd:'',
                idnum:''
            }
        },
        methods:{
            check(){
                if(!this.pwd){
                    this.$toast({message:'请输入密码!'}); return false;
                }
                if(this.pwd !== this.$utils.getLocalItem('pwd')){
                    this.$toast({message:'输入密码和登录密码不一致!'}); return false
                }
                return true;
            },
            nextCheck(){
                if(!this.idnum){
                    this.$toast({message:'请输入身份证号!'}); return false;
                }
                if(!this.$utils.idnumIsCorrect(this.idnum)){
                    this.$toast({message:'身份证号不正确!'}); return false;
                }
                return true;
            },
            showIdnumHandle(){
               if(this.check()){
                   this.isShowIdnum=true;

               }
            },
            editIdnumHandle(){
                if(this.nextCheck()){
                    let userInfo =this.$utils.getLocalItem('userInfo');
                    let options={
                        gender:userInfo.gender,
                        mobile:userInfo.mobile,
                        name:userInfo.name,
                        birthday:this.$moment(userInfo.birthday).format('YYYY-MM-DD'),
                        idnum:this.idnum
                    }
                    profile_edit(options);
                }
            }
        }
    }
</script>

<style scoped>
.edit-content{
    padding: 25px 16px;
    height: calc(100vh - 46px);
    background-color: #fff;
}
    .edit-intro{
        font-size: 16px;
        color: #898888;
        margin-bottom: 11px;
    }
    .edit-input{
        width:100%;
        font-size:15px;
        border-bottom:1px solid #EEEEED;
    }
</style>
