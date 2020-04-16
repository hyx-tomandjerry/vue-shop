<template>
   <div>
       <transition name="van-slide-bottom" >
           <div class="operate-container" >
               <div class="operate-list-item flex  align-items-center"
                    v-for="(item,index) in list"
                    @click="chooseItem(item)"
                    :key="index">
                   <img :src="item.icon" width="20" height="20" alt="" />
                   <div>{{item.name}}</div>
               </div>
           </div>
       </transition>

       <!--删除店员-->
       <van-popup v-model="isShow" position="bottom">
           <div class="del-item" v-for="(item,index) in delList" :key="index" @click="delOperate(item.val)">{{item.name}}</div>
       </van-popup>
   </div>
</template>

<script>
    import {common_delete} from 'network/common.js'
    import {shop_setManager,shop_delete_client} from 'network/shop.js'
    export default {
        name: "TopRightPopup",
        props:{
            id:[String,Number],
            list:{
                type:Array,
                default(){return []}
            },
            user:[String,Number],//店员id
        },
        data(){
            return {
                isShow:false,
                delList:[
                    {name:'从公司删除',val:'company'},
                    {name:'从门店删除',val:'shop'},
                    {name:'取消',val:'cancel'},
                ]
            }
        },
        methods:{
            delOperate(type){
                switch (type) {
                    case 'company':
                        this.$dialog.confirm({
                            message:'确定要从公司删除?'
                        }).then(()=>{
                            this.isShow=false;
                            common_delete(0,this.clerk.id,1);
                            setTimeout(()=>{
                                this.$utils.goBack();
                                this.$emit('chooseItem');
                            },2000);
                        }).catch(()=>{

                        });
                        break;
                    case 'shop':
                        this.isShow=false;
                        this.$dialog.confirm({
                            message:'确定要从门店删除?'
                        }).then(()=>{
                            console.log('成功');
                            // this.$emit('chooseItem');
                            console.log(this.id, this.clerk.id, 0);
                            shop_delete_client(this.id,this.clerk.id,0)
                        }).catch(()=>{
                            console.log('失败');
                        })
                        // this.$dialog.confirm({
                        //     message:'确定要从门店删除?'
                        // }).then(()=>{
                        //     this.$emit('chooseItem');
                        //     common_delete(this.id,this.clerk.id,0);
                        // }).catch(()=>{
                        //     console.log('失败')
                        // })
                       // this.$dialog.confirm({
                       //     message:'确定要从门店删除?'
                       // }).then(()=>{
                       //      console.log('成功')
                       //     common_delete(this.id,this.clerk.id,0);
                       //     setTimeout(()=>{
                       //         this.isShow=false;
                       //         this.$utils.goBack();
                       //         this.$emit('chooseItem');
                       //     },2000);
                       // }).catch(()=>{
                       //
                       // });
                        break;
                    case 'cancel':
                        break;
                }
            },
            chooseItem(item){
                switch (item.type) {
                    case 'add':
                        //录入店员
                        this.$router.push({
                            path:'/shop/edit',
                            query:{
                                id:this.id,
                                type:item.type
                            }
                        });
                        this.$emit('chooseItem');
                        break;
                    case 'record':
                        //记一笔
                        this.$emit('chooseItem');
                        break;
                    case 'bind':
                        //绑定设备
                        this.$emit('chooseItem',item.type);
                        break;
                    case 'manager':
                        this.$dialog.confirm({
                            title:'设置店长',
                            message:'确定要将该店员设置为店长?'
                        }).then(()=>{
                            shop_setManager(this.id,this.user);
                            this.$emit('chooseItem');
                        }).catch(()=>{

                        })
                        break;
                    case 'delete':
                        //删除店员
                        this.isShow=true;
                        break;
                }

            }
        }
    }
</script>

<style scoped>

    .operate-container{
        background-image:url('~assets/images/common/topRight_bg.png') !important;
        background-repeat:  no-repeat;
        background-size:cover;
        position:fixed;
        top:23px;
        right:26px;
    }
    .operate-list-item{
        height:55px;
        color:#fff;
        padding:0 10px;
        font-size:14px;
        line-height:55px;
        max-width:200px;
        min-width:150px;
        border-bottom:1px solid #EEEEED;
    }
    .operate-list-item img{
        vertical-align: middle;
        margin-right:15px;
    }
    .operate-list-item:last-child{
        border:none
    }
    .del-item{
        display: flex;
        justify-content: center;
        padding:15px 16px;
        font-size:14px;
        line-height:24px;
        color:#333;
        width:100%;
        border-bottom:1px solid #eeeeed;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
