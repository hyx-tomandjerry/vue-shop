<template>
   <van-image-preview v-model="isShow" :images="image" @change="imgChange">
       <div slot="cover" class="color-high">
           <van-icon name="down" class="down-img" @click="downLoadHandle"/>
       </div>
   </van-image-preview>
</template>

<script>
    import {ImagePreview} from 'vant'
    export default {
        name: "ImagePreview",
        props:{
            isShow:Boolean,
            image:{
                type:Array,
                default(){return []}
            }
        },
        data(){
            return{
                index:0
            }
        },
        methods:{
            downLoadHandle(){
                console.log(this.image[this.index])
                let image =new Image();
                image.setAttribute('crossOrigin','anonymous');
                let _this=this;
                image.onload=function(){
                    let canvas = document.createElement('canvas');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    let context = canvas.getContext("2d");
                    context.drawImage(image,0,0,image.width,image.height);
                    let url = canvas.toDataURL(_this.image[_this.index]);
                    let a = document.createElement('a');
                    let event = new MouseEvent('click');
                    a.download = Math.random()*1000 +'.jpg' || "photo";//设置图片名称
                    a.href =url;
                    a.dispatchEvent(event);//触发a 链接的单击时间
                }
                image.src = this.image[this.index];
            },
            imgChange(index){
                this.index=index;
            }
        }

    }
</script>

<style scoped>
.down-img{
    font-size:40px;
}
</style>
