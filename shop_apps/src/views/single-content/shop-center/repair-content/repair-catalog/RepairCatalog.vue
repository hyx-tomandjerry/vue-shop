<template>
    <div>
       <van-nav-bar title="报修类别" left-arrow @click-left="$utils.goBack" right-text="确定" @click-right="chooseCatalogHandle"/>
        <div class="catalog-content">
            <van-row>
                <van-col span="8" class="bg-gray">
                    <div class="lef-tab-item"
                         @click="leftNavHandle(item.id)"
                         :class="{'left-nav-active':leftIndex === item.id}"
                         v-for="(item,index) in $config.repairTypeArray" :key="index">{{item.name}}</div>
                </van-col>
                <van-col span="16" class="right-nav-content">
                    <div class="right-nav-item"
                         @click="rightNavHandle(item.id)"
                         :class="{'right-nav-active':rightIndex === item.id}"
                         v-for="(item,index) in rightNavList" :key="index" >{{item.name}}</div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import {common_catalog} from 'network/common.js'
    export default {
        name: "RepairCatalog",
        data(){
            return{
                activeIndex:0,
                leftIndex:2,
                rightIndex:0,
                rightNavList:[]
            }
        },
        computed:{

        },
        methods:{
            leftNavHandle(id){
                this.leftIndex = id;
                this.rightIndex =0;
                this.getCatalogList(id)
            },
            rightNavHandle(id){
                console.log(id)
                this.rightIndex=id;
            },
            chooseCatalogHandle(){

                this.$utils.goBack()

            },
            getCatalogList(id){
                common_catalog().then(res=>{
                   this.rightNavList = res.data.filter(item=>item.catalog===id)
                })
            }
        },
        mounted() {
            this.getCatalogList(this.leftIndex)
        },
        destroyed() {
            this.$bus.$emit('catalog',{
                type:this.leftIndex,
                catalog:this.rightIndex
            })
        }

    }
</script>

<style scoped>
.catalog-content{
    background: #ffffff;
    height:calc(100vh - 46px)
}
    .left-nav-active{
        border-right:2px solid var(--high-text);
        background: #ffffff;
        color:var(--high-text) !important;
        font-weight: bold;
    }
    .right-nav-active{
        background:var(--high-text) !important;
        color: #ffffff;
    }
    .lef-tab-item{
        height:60px;
        line-height:60px;
        text-align: center;
        color:var(--color-normal);
    }
    .right-nav-content{
        padding:20px 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .right-nav-item{
        width:40%;
        background:var(--bg-color);
        height:30px;
        line-height:30px;
        text-align: center;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        margin: 10px 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
