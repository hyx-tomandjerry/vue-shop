<template>
    <div>
        <van-nav-bar :title="getTitle" left-arrow @click-left="$utils.goBack"></van-nav-bar>
        <van-field v-model="shopItem.name" label="门店名称" required input-align="right" :border="true" :is-link="shopCount !==1"/>

        <div v-if="type==='add'">
            <van-field v-model="name" label="店员姓名" required input-align="right" :border="true" />
            <van-field v-model="telephone" label="联系方式" required input-align="right" type="tel"   :border="true"  maxlength="11"/>
        </div>
        <div v-if="type==='area'">
            <van-field v-model="shopItem.area" label="门店面积" required input-align="right" :border="true" />
        </div>
        <div v-if="type==='seq'">
            <van-field v-model="shopItem.seq" label="门店编号" required input-align="right" :border="true" />
        </div>
        <bottom-button-one :isPosition="true" :btnType="btnType" :disabled="disabled" @submitHandle="operateForm"/>
    </div>
</template>

<script>
    import BottomButtonOne from 'components/content/bottom-button/BottomButtonOne'
    import {shop_shopInfo} from 'network/shop.js'
    import {mapState} from 'vuex'
    import {account_sign} from 'network/account.js'
    import {edit_shop_area,edit_shop_address,edit_shop_seq} from 'network/shop.js'
     export default {
        name: "ShopOperate",
         components:{BottomButtonOne},
        data(){
            return{
                id:'',
                type:'',
                shopItem:{},
                name:'',
                telephone:'',
                btnType:'default',
                disabled:true
            }
        },
        computed:{
            ...mapState(['shopCount']),
            getTitle(){
                switch (this.type) {
                    case 'add':
                        return '录入店员';
                    case 'area':
                        return '修改门店面积';
                    case 'seq':
                        return '修改门店编号'

                }
            }
        },
         watch:{
            name(){this.change()},
            telephone(){this.change()}
         },
        methods:{
            operateForm(){
                switch (this.type) {
                    case 'add':
                        if(this.addCheck()){
                            let options={
                                name:this.name,
                                mobile:this.telephone,
                                type:this.$config.type,
                                team:this.id
                            };
                            account_sign(options,'join')
                        }
                        break;
                    case 'area':
                        edit_shop_area(this.id,this.shopItem.area)
                        break;
                    case 'seq':
                        edit_shop_seq(this.id,this.shopItem.seq)
                        break;
                }
            },
            getShopInfo(id){
                shop_shopInfo(id).then(res=>{
                    this.shopItem =res.data;
                })
            },
            change(){
                if(this.type==='add'){
                    if(this.name && this.telephone){
                        this.disabled=false;
                        this.btnType='info'
                    }else{
                        this.disabled=true;
                        this.btnType='default'
                    }
                }
            },
            addCheck(){
                if(!this.name){
                    this.$toast({message:'姓名不能为空!'}); return false;
                }
                if(!this.telephone){
                    this.$toast({message:'联系方式不能为空!'}); return false;
                }
                if(!this.$utils.phoneIsCorrect(this.telephone)){
                    this.$toast({message:'联系方式不存在!'}); return false;
                }
                return true;
            }
        },
        mounted() {
            this.id = this.$route.query['id']?this.$route.query['id']:'';
            this.type = this.$route.query['type']?this.$route.query['type']:'';
            if(this.id){
                this.getShopInfo(this.id)
            }
            this.btnType = this.type ==='add'?'default':'info';
            this.disabled = this.type ==='add';

        }
    }
</script>

<style scoped>

</style>
