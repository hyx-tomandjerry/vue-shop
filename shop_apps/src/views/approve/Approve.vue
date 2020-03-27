<template>
    <div >
        <van-nav-bar title="流程模板" left-arrow @click-left="$utils.goBack"/>
        <div class="approve-container">
            <van-row class="approve-list-item" v-for="(item,index) in approveList" :key="index" @click="chooseItem(item)">
                <van-col span="6" class="text-center">
                    <img src="~assets/images/approve/repair_icon.png" alt="" class="tag-img">
                </van-col>
                <van-col span="18">
                    <div class="font-size-middle font-weight-bold color-normal">{{item['formTypeName']}}</div>
                    <div class="approve-item-name">模板名称:{{item['name']}}</div>
                    <div>创建人:{{item['creatorName']}} {{item['instdate'] | format('YYYY-MM-DD')}}</div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import {common_approve} from 'network/common.js'
    export default {
        name: "Approve",
        data(){
            return{
                approveList:[],
                item:{}
            }
        },
        methods:{
            getWorkFlows(type){
                common_approve(type).then(res=>{
                    this.approveList = res.data;
                })
            },
            chooseItem(item){
                this.item=item;
                this.$utils.goBack()
            }
        },
        mounted() {
            if(this.$route.params.type){
                this.getWorkFlows(this.$route.params.type)
            }
        },
        beforeDestroy() {
            this.$bus.$emit('approve',this.item)
        }
    }
</script>

<style scoped>
.approve-container{
    background-color: var(--bg-color);
    height:calc(100vh - 46px);
    padding:10px 15px;
}
    .approve-list-item{
        background-color: var(--bg-white);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        padding:6px 8px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size:13px;
        color:var(--color-gray);
    }
    .tag-img{
        width:44px;
        height:44px;
    }
</style>
