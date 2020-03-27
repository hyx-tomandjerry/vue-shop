<template>
    <div class="summary-content">
        <div class="summary-content-title"><span class="color-red" v-if="isRequired">*</span>上传附件</div>
        <van-uploader v-model="filesList" :multiple="multiple"  :max-count="maxCount" :after-read="afterRead" :before-delete	="deleteImg" />
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {common_removeFile} from 'network/common.js'
    export default {
        name: "ImageUpload",
        computed:mapState(['userInfo']),
        props:{
            maxCount:{
                type:Number,
                default:1
            },
            isRequired:Boolean,//是否显示必选
            xType:[Number,String],
            xTarget:[Number,String],
            multiple:Boolean
        },
        data(){
            return{
                filesList:[],
                filesID:[]
            }
        },
        methods:{
            afterRead(files){
                let url= this.$config.uploadHostUrl + this.$utils.getLocalItem('token');
                let formData = new FormData();
                // formData.append('x:type',this.$config.doc.serviceorder);
                formData.append('x:type',this.xType);
                formData.append('x:owner',this.userInfo.owner);
                formData.append('x:creator',this.userInfo.id);
                formData.append('x:target',this.xTarget);
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                let imgList =[];
                if(files instanceof  Array){
                    for(let i=0;i<files.length;i++){
                        imgList = [...imgList,files[i].file]
                    }
                }else{
                    imgList =[...imgList, files.file]
                }
                for(let i=0;i<imgList.length;i++){
                    formData.set('file',imgList[i]);
                    this.$axios.post(url,formData,config).then(res=>{
                        if(res.data.code!==0){
                            this.$toast({message:'图片上传失败！'});
                        }else{
                            this.filesID= [...this.filesID,res.data.data];

                            if(this.filesID.length === imgList.length){
                                this.$toast({message:'图片上传成功!'});
                                for(let i =0;i<this.filesList.length;i++){
                                    this.filesList[i].id=this.filesID[i];
                                }
                                this.$emit('uploadSuccess',this.filesID)
                            }else{
                                this.$toast({message:'图片正在上传...', forbidClick: true, loadingType: 'spinner'})
                            }
                        }
                    })

                }


            },
            deleteImg(event){
                let index =this.filesList.indexOf(event);//获得当前图片的下标
                this.$dialog.confirm({
                    title:'删除图片',
                    message:'确定要删除图片'
                }).then(()=>{
                    common_removeFile(event.id);
                    this.filesList.splice(index,1);
                    this.filesID.splice(index,1)
                    this.$emit('uploadSuccess',this.filesID)
                }).catch(()=>{

                })
            }
        }
    }
</script>

<style scoped>
    .summary-content{
        background: #ffffff;
        padding:10px 15px;
    }
    .summary-content-title{
        color:#2A2A2A;
        margin-bottom: 8px;
    }
</style>
