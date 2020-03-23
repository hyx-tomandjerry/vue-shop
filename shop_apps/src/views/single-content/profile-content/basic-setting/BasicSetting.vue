<template>
    <div class="basic-setting-container">
       <van-nav-bar title="基本资料" left-arrow right-text="提交" @click-left="$utils.goBack" @click-right="submitHandle"/>
        <div class="basic-setting-list">
            <van-cell title="头像" class="align-items-center" isLink>
                <div slot="default">
                    <van-uploader  max-count="1" :after-read="afterRead">
                        <img :src="userInfo.headurl ? userInfo.headurl : '~assets/images/common/avatar.jpg'" alt="" class="avatar-img" icon="photo">
                    </van-uploader>
                </div>
            </van-cell>
            <van-cell title="昵称"  isLink >
                <input slot="default" placeholder="请输入昵称" v-model="userInfo.name" class="text-right">
            </van-cell>
             <van-cell title="电话" isLink :value="userInfo.mobile" to="/profile/change"/>
            <div class="margin-gap"></div>
            <van-cell title="性别" :value="userInfo.gender===0?'男':'女'" isLink  @click="isShowGender=true"/>
            <van-cell title="身份证号"  isLink>
                <div slot="default">
                    <p v-if="userInfo.idnum">{{userInfo.idnum | idCardFilter}}</p>
                    <input type="number" placeholder="请输入身份证号" v-model="idcard" v-else class="text-right">
                </div>
            </van-cell>
            <van-cell title="出生日期" :value="userInfo.birthday" isLink @click="isShowBir=true">
                <div slot="default">
                    <p v-if="birth">{{birth}}</p>
                    <p v-else>{{userInfo.birthday | format('YYYY-MM-DD')}}</p>
                </div>
            </van-cell>

        </div>

        <!--出生日期弹出框-->
        <!--<van-calendar v-model="isShowBir" :min-date="minDate"  @confirm="birthdayHandle"  color="#42B0ED"></van-calendar>-->
        <van-popup
            v-model="isShowBir"
            round
            position="bottom" >
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="confimBir"
                @cancel="isShowBir=false"
            />
        </van-popup>
        <!--显示性别-->
        <van-popup
            v-model="isShowGender"
            round
            closeable
            position="bottom">
            <van-picker :columns="['男','女']" @change="genderHandle" :default-index="1" ></van-picker>
        </van-popup>

    </div>
</template>

<script>
    import {common_refresh,common_token} from 'network/common.js'
    import {profile_edit} from 'network/profile.js'
    export default {
        name: "BasicSetting",
        data(){
            return{
                userInfo:{},
                isShowBir:false,//显示日期弹出框
                isShowGender:false,//显示性别
                genderIndex:0,
                idcard:'',
                birth:'',
                minDate:new Date(1971,0,1),
                currentDate:new Date(),
                maxDate:new Date(new Date().getFullYear()+10,0,1)
            }
        },
        methods:{
            confimBir(event){
                if(event){
                    this.birth= this.$moment(event).format('YYYY-MM-DD');
                    this.isShowBir=false;
                }
            },
            afterRead(file){
                let url=this.$config.uploadHostUrl + this.$utils.getLocalItem('token');
                let formData = new FormData();
                if(file instanceof  Array){
                    for(let i=0;i<file.length;i++){
                        formData.append('file'+i,file[i].flex)
                    }
                }else{
                    formData.append('file',file.file);
                }
                formData.append('x:type',this.$config.doc.headCover);
                formData.append('x:owner',this.userInfo.owner);
                formData.append('x:creator',this.userInfo.id);
                formData.append('x:target',this.userInfo.id);
                //添加请求头
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                this.$axios.post(url,formData,config).then(res=>{
                   if(res.data.code===0){
                       this.refreshHandle();
                       this.$toast({
                           message:'头像上传成功!'
                       })
                   }
                })
            },
            submitHandle(){
                let options={
                    gender:this.userInfo.gender,
                    mobile:this.userInfo.mobile,
                    name:this.userInfo.name,
                    birthday:this.birth?this.birth:this.$mount(this.userInfo.birthday).format('YYYY-MM-DD'),
                    idnum:this.idcard?this.idcard:this.userInfo.idnum
                }
                profile_edit(options);
            },
            refreshHandle(){
                common_refresh().then(res=>{
                    this.userInfo=res.data;
                })
            },
            birthdayHandle(date){
                this.birth=this.$moment(date).format('YYYY-MM-DD');
                this.isShowBir=false;
            },
            genderHandle(picker,value,index){
                this.userInfo.gender=index;
            },
            getUploadToken(){
                common_token().then(res=>{
                    this.$utils.setLocalItem('token',res.data)
                })
            }
        },
        mounted() {
            this.refreshHandle();
            this.getUploadToken()
        }
    }
</script>

<style scoped>
.basic-setting-container{
    background:var(--bg-color)
}
    .margin-gap{
        width:100%;
        height:13px;
        background:var(--bg-color)
    }
    .avatar-img{
        width:50px;
        height:50px;
        -webkit-border-radius: 100%;
        vertical-align: middle;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }
</style>
