<template>
    <div class="catalog-item bg-white">
        <van-row>
            <van-col span="8" class="color-regular">子类别名称</van-col>
            <van-col span="16">{{catalogItem.name}}</van-col>
        </van-row>
        <van-row>
            <van-col span="8"  class="color-regular">子类别规格</van-col>
            <van-col span="16">{{catalogItem.size}}</van-col>
        </van-row>
        <van-row>
            <van-col span="8"  class="color-regular">子类别品牌</van-col>
            <van-col span="16">{{catalogItem.type}}</van-col>
        </van-row>
        <van-row>
            <van-col span="8"  class="color-regular">子类别型号</van-col>
            <van-col span="16">{{catalogItem.model}}</van-col>
        </van-row>
        <van-row>
            <van-col span="8"  class="color-regular">子类别备注</van-col>
            <van-col span="16" class="text-ellipse">{{catalogItem['summary']}}</van-col>
        </van-row>
        <div class="color-regular summary">子类别附件</div>
        <van-grid :gutter="10" :column-num="4">
            <van-grid-item v-for="(img,index) in catalogItem.files" :key="index">
                <van-image :src="img.url" alt="" slot="default" />
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    import {shop_repair_catalog} from 'network/shop.js'
    export default {
        name: "CatalogItem",
        props:{
            id:[String,Number]
        },
        data(){
            return{
                catalogItem:{}
            }
        },
        methods:{
            getCatalogItem(id){
                shop_repair_catalog(id).then(res=>{
                    this.catalogItem=res.data
                })

            }
        },
        created() {
           if(this.id){
               this.getCatalogItem(this.id)
           }
        }

    }
</script>

<style scoped>
    .catalog-item{
        padding: 10px 15px
    }
    .catalog-item .van-row{
        margin-bottom:4px;
    }
    .van-grid-item__content{
        padding:0 !important;
    }
    .summary{
        margin-bottom: 8px;
    }
</style>
