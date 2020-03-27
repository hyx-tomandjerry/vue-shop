<template>
    <div class="bg-white">
        <van-divider class="divider-line">报修详情</van-divider>
        <detail-row label="门店名称" :content="detailInfo['name']"></detail-row>
        <detail-row label="品牌名称" :content="detailInfo['brandName']"></detail-row>
        <detail-row label="门店地址" :content="getAddress"></detail-row>
        <detail-row label="维修类别" :content="detailInfo['type'] |repairCatalogFilter"></detail-row>
        <detail-row label="维修子类别" :content="detailInfo['categoryName']" :isCheck="true" @check="check"></detail-row>

        <transition name="van-slide-left">
            <catalog-item :id="detailInfo['category']" v-if="isShowCatalog"/>
        </transition>
        <detail-row label="报修描述" :content="detailInfo['summary']" :isEllipse="true"></detail-row>
        <image-grid title="报修附件" :files="detailInfo['files']"/>
    </div>
</template>

<script>
    import DetailRow from 'components/content/detail-row/DetailRow';
    import CatalogItem from '../../create-repair/childComponent/CatalogItem'
    import ImageGrid from 'components/common/image-grid/ImageGrid'
    export default {
        name: "OrderInfo",
        props:{
            detailInfo:{
                type:Object,
                default(){return {}}
            }
        },
        data(){
            return{
                isShowCatalog:false
            }
        },
        components:{DetailRow,CatalogItem,ImageGrid},
        computed:{
            getAddress(){
                return this.$utils.fullAdressIntro(this.detailInfo)
            }
        },
        methods:{
            check(){
                this.isShowCatalog=!this.isShowCatalog;
            }
        }
    }
</script>

<style scoped>



</style>
