<template>
    <div class="approve-container">
        <van-cell title="审批流程" :value="approveItem['name']" isLink :to="'/approve/'+typeID" />
        <div class="approve-progress" v-show="approveItem['steps']">
            <div class="font-size-middle font-weight-bold">审批步骤</div>
            <approve-check-item v-for="(item,index) in approveItem['steps']" :item="item" :index="index" :key="index"/>
            <!--<van-row class="progerss-item" v-for="(item,index) in approveItem['steps']">-->
                <!--<van-col span="4">-->
                    <!--<div class="progress-tag font-weight-bold">{{index}}</div>-->
                <!--</van-col>-->
                <!--<van-col span="20">-->
                    <!--<div class="progress-intro">{{item['acceptRoleName']}}</div>-->
                <!--</van-col>-->
            <!--</van-row>-->
        </div>
    </div>
</template>

<script>
    import ApproveCheckItem from '../approve-check-item/ApproveCheckItem'
    export default {
        name: "ApproveCheck",
        props:{
            typeID:[String,Number]
        },
        components:{ApproveCheckItem},
        data(){
            return{
                approveItem:{}
            }
        },
        created() {
            this.$bus.$on('approve',data=>{
                if(data){
                    this.approveItem=data;
                    this.$emit('approveItem',this.approveItem)
                }
            })
        }
    }
</script>

<style scoped>
.approve-container{
    background: #ffffff;
}
    .approve-progress{
        background-color: #fff;
        padding:14px 15px;
    }
    .approve-progress>div:first-child{
        margin-bottom:10px;
    }

</style>
