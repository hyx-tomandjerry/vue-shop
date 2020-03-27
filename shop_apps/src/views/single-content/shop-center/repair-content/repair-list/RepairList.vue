<template>
    <div>
       <van-nav-bar title="门店保修" left-arrow @click-left="$utils.goBack" :border="false"/>
        <tab-bar :tabCurList="tabCurList" @tabCurHandle="tabCurHandle">
            <div slot="content" class="repair-list-content">
               <repair-list-item :item="item" :index="index" :key="index" v-for="(item,index) in repairList" />
            </div>
        </tab-bar>
       <add-img @addOperate="createRepair"/>
    </div>
</template>

<script>

    import TabBar from 'components/common/tabbar/TabBar'
    import RepairListItem from './childComponent/RepairListItem'
    import AddImg from 'components/common/add-img/AddImg'

    import {shop_repair_list} from 'network/shop.js'
    export default {
        name: "RepairList",
        components:{TabBar,RepairListItem,AddImg},
        data(){
            return{
                tabCurList:[
                    {name:'已报修'},
                    {name:'执行中'},
                    {name:'已完成'}
                ],
                tabCur:this.$config.repairStatus.submit,
                page:1,
                repairList:[]
            }
        },
        methods:{

            createRepair(){
                this.$router.push('/shop/create')
            },
            tabCurHandle(index){
                this.tabCur=index;
                this.getRepairList()
            },
            getRepairList(){
                shop_repair_list( this.tabCur,'11',this.page).then(res=>{
                   this.repairList = res.data;
                })
            }
        },
        mounted() {
            this.getRepairList()
        }
    }
</script>

<style scoped>
.repair-list-content{
    background:var(--bg-color)
}

</style>
