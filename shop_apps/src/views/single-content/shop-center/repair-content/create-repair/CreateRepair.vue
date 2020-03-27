<template>
    <div>
       <van-nav-bar title="新建报修" :border="true" left-arrow @click-left="$utils.goBack" :fixed="true" :z-index="10"/>
        <div class="create-repair-container">
            <van-field v-model="shopItem.name" label="门店名称" required input-align="right" :border="true" is-link/>
            <van-field v-model="userInfo.name" label="报修人" required input-align="right" :border="true"is-link :readonly="true"/>
            <van-field v-model="userInfo.account" label="门店名称" required input-align="right" :border="true" is-link :readonly="true"/>
            <div class="margin-gap"></div>
            <van-field v-model="appointTime" label="预约维修时间"  required input-align="right" :border="true" is-link @click="chooseRepairItem('time')"/>
            <van-field v-model="getType" label="维修类别"  required input-align="right" :border="true" is-link @click="chooseRepairItem('catalog')"/>
            <catalog-item  :id="catalogID" v-if="isShowCatalog"/>
            <div class="margin-gap"></div>
            <div class="summary-content">
                <div class="summary-content-title"><span class="color-red">*</span>报修描述</div>
                <textarea  cols="46" rows="5" placeholder="请输入报修描述..." class="summary-content-text" v-model="summary"></textarea>
            </div>
            <div class="margin-gap"></div>
            <image-upload
                :is-required="true"
                :multiple="true"
                :xType="$config.doc.serviceorder"
                :xTarget="0"
                @uploadSuccess="uploadSuccess"
                :max-count="9"></image-upload>
            <div class="margin-gap"></div>
            <approve-check :typeID="$config.approvalMode.repair_service" @approveItem="getApproveItem"/>
            <bottom-button-one :btnType="btnType" :disabled="disabled" @submitHandle="createOrder"/>
        </div>
        <time-popup :isShow="isShowTime"
                    format="YYYY-MM-DD HH:mm:ss"
                    type="datetime"
                    :minDate="new Date()"
                    @confirmHandle="confirmHandle"
                    @cancelHandle="cancelHandle" />
    </div>
</template>

<script>
    import TimePopup from 'components/content/time-popup/TimePopup'
    import CatalogItem from './childComponent/CatalogItem'
    import ImageUpload from 'components/common/image-upload/ImageUpload'
    import ApproveCheck from 'components/content/approve-check/ApproveCheck'
    import BottomButtonOne from 'components/content/bottom-button/BottomButtonOne'
    import {mapState} from 'vuex'

    import {shop_newRepair} from 'network/shop.js'
    export default {
        name: "CreateRepair",
        components:{TimePopup,CatalogItem,ImageUpload,ApproveCheck,BottomButtonOne},
        data(){
            return{
                isShowTime:false,
                type:'datetime',
                appointTime:'',
                typeID:'',//维修大类别
                catalogID:'',//维修子类别
                isShowCatalog:false,
                catalogItem:{},
                files:[],
                approveID:'',
                summary:'',
                btnType:'default',
                disabled:true
            }
        },
        watch:{
            appointTime(){this.change()},
            typeID(){this.change()},
            summary(){this.change()},
            files(){this.change()},

        },
        computed:{
            ...mapState(['shopCount','shopItem','userInfo']),
            getType(){
                if(!this.typeID) {return ''}
                return this.$config.repairTypeZn[this.typeID]
            }
        },
        methods:{
            check(){
                if(!this.shopItem.id){
                    this.$toast({message:'请选择门店进行报修!'});return false;
                }
                if(!this.appointTime){
                    this.$toast({message:'请选择报修时间'});return false;
                }
                if(!this.typeID){
                    this.$toast({message:'请选择报修类别'});return false;
                }
                if(!this.summary){
                    this.$toast({message:'报修描述不能为空'});return false;
                }
                if(this.files.length <=0){
                    this.$toast({message:'请上传报修图片'});return false;
                }
                if(!this.approveID){
                    this.$toast({message:'请选择审批流程!'});return false;
                }
                return true;
            },
            createOrder(){
                if(this.check()){
                    shop_newRepair(this.shopItem.id,this.appointTime,this.typeID,this.catalogID,this.summary,this.files.join(','),this.approveID);
                }
            },
            change(){
                if(this.shopItem.id && this.appointTime && this.typeID && this.summary && this.approveID && this.files.length ){
                    this.btnType='info';
                    this.disabled=false;
                }else{
                    this.btnType='default';
                    this.disabled=true;
                }
            },
            getApproveItem(item){
                this.approveID = item.id;
            },
            uploadSuccess(array){
                this.files=array;
            },
            confirmHandle(event){
                this.appointTime=event;
                this.isShowTime=false;
            },
            cancelHandle(){
                this.isShowTime=false;
            },
            chooseRepairItem(type){
                switch (type) {
                    case 'time':
                        //选择预约时间
                        this.isShowTime=true;
                        break;
                    case 'catalog':
                        this.$router.push('/shop/repair/catalog');
                        break;
                }
            },


        },
        created() {
            this.$bus.$on('catalog',data=>{
                this.typeID = data.type;
                this.catalogID = data.catalog;
                this.isShowCatalog=true;
            })

        }
    }
</script>

<style scoped>
.create-repair-container{
    height:calc(100vh - 46px);
    margin:46px 0 ;
}
    .summary-content{
        background: #ffffff;
        padding:10px 15px;
    }
    .summary-content-title{
        color:#2A2A2A;
        margin-bottom: 8px;
    }
    .summary-content-text{
        border:none;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 8px;
        padding:10px 5px;
        background:#eeeeed;
    }

</style>
