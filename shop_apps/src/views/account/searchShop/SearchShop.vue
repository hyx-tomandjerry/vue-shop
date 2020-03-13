<template>
   <div>
       <van-nav-bar title="筛选门店" left-arrow @click-left="goBack" />
       <van-cell title="选择品牌" :value="brandItem.name" is-link @click="showModal('brand')"></van-cell>
       <van-cell title="选择区域" :value="zoneItem.name" is-link @click="showModal('zone')"></van-cell>


       <ul id="treeDemo"  class="ztree"></ul>







       <!--区域弹出框-->
       <van-action-sheet v-model="isShowBrand" title="选择品牌">
           <div class="content">
               <van-radio-group v-model="brandID">
                   <van-cell-group>
                       <van-cell :title="item.val" clickable @click="chooseItem('brand',item)" v-for="(item,index) in brandList" :key="index">
                           <van-radio slot="right-icon" :name="item.id"></van-radio>
                       </van-cell>
                   </van-cell-group>
               </van-radio-group>
           </div>
       </van-action-sheet>
   </div>
</template>

<script>
    import {common_brand,common_area} from 'network/common.js'
    let setting = {
        // isSimpleData : true,              //数据是否采用简单 Array 格式，默认false
        treeNodeKey : "id",               //在isSimpleData格式下，当前节点id属性
        treeNodeParentKey : "parent",        //在isSimpleData格式下，当前节点的父节点id属性
        showLine : true,                  //是否显示节点间的连线         //每个节点上是否显示 CheckBox
    };
    export default {
        name: "SearchShop",
        data(){
            return{
                brandItem:{name:'',id:-1},//品牌
                brandID:-1,
                zoneItem:{name:'',id:-1},//区域
                isShowBrand:false,
                owner:'',
                brandList:[],
                areaList:[],
                zNodes:[]

            }
        },
        methods:{
            nextLevelHandle(){

            },
            getBrandList(owner){
                common_brand(owner).then(res=>{
                   this.brandList=res.data;
                })
            },
            //获得全部区域
            getDepartmentList(owner){
                common_area(owner).then(res=>{
                    this.areaList=res.data;
                    $.fn.zTree.init($("#treeDemo"), setting,res.data);
                })
            },
            goBack(){

            },
            chooseItem(type,item){
                switch (type) {
                    case 'brand':
                        this.brandItem = item;
                        this.brandID=item.id;
                        this.isShowBrand=false;
                        break;
                    case 'zone':
                        this.zoneItem = item;
                        this.isShowBrand=false;
                        break;
                }
            },
            showModal(type){
                switch (type) {
                    case 'brand':
                        this.isShowBrand=true;
                        break;
                    case 'zone':
                        break;
                }
            }
        },
        mounted() {

            // console.log(this.$route.query.owner)
            this.getBrandList(this.$route.query.owner)
            this.getDepartmentList(this.$route.query.owner)
        }
    }
</script>

<style scoped>
    @import "../../../plugins/zTree/css/zTreeStyle/zTreeStyle.css";
</style>
