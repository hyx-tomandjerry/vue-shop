import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Index = ()=>import('views/index/Index.vue');
const Work = ()=>import('views/work/Work.vue');
const Notice = ()=>import('views/notice/Notice.vue');
const Profile = ()=>import('views/profile/Profile.vue');
const Login =()=>import ('views/account/login/Login.vue');
const Sign = ()=>import('views/account/sign/Sign.vue');
const ForgetPwd =()=>import('views/account/forgetPwd/ForgetPwd');

const routes=[
  {path:'/',redirect:'/index'},
  {path:'/index',component:Index,meta:{isShow:true}},
  {path:'/work',component:Work,meta:{isShow:true}},
  {path:'/notice',component:Notice,meta:{isShow:true}},
  {path:'/profile', component:Profile,meta:{isShow:true},},
  //  审批流程
  {path:'/approve/:type', component:()=>import('views/approve/Approve')},
  //  账号
  {path:'/login',component:Login},
  {path:'/sign',component:Sign},
  {path:'/forget',component:ForgetPwd},
  {path:'/setPwd',name:'SetPwd',component:()=>import('views/account/setPwd/SetPwd')},
  {path:'/search',name:'search',component:()=>import('views/account/searchCompany/SearchCompany')},//搜索公司
  {path:'/showCompany',name:'search',component:()=>import('views/account/showCompany/ShowCompany')},//显示公司
  {path:'/join',name:'JoinShop',component:()=>import('views/account/joinShop/JoinShop')},//加入门店
  {path:'/searchShop',name:'SearchShop',component:()=>import('views/account/searchShop/SearchShop')},//搜索门店门店
    //文章列表
    {path:'/article/:type',component:()=>import('views/single-content/article-center/article-list/ArrticelList')},
    {path:'/article/detail/:type/:id',component:()=>import('views/single-content/article-center/article-item-detail/ArticleItemDetail')},//文章详情

// 基本设置
    {path:'/profile/setting',component:()=>import('views/single-content/profile-content/basic-setting/BasicSetting')},//基本设置
    {path:'/profile/edit',component:()=>import('views/single-content/profile-content/edit-password/EditPassword')},//修改密码
    {path:'/profile/company',component:()=>import('views/single-content/profile-content/company-info/CompanyInfo')},//公司详情
    {path:'/profile/change',component:()=>import('views/single-content/profile-content/change-telephone/ChangeTelephone')},//更换手机号
    {path:'/profile/protocol',component:()=>import('views/single-content/profile-content/protocol-content/ProtocolContent')},//软件协议
    {path:'/profile/idnum',component:()=>import('views/single-content/profile-content/change-idnum/ChangeIdnum')},//更换身份证

    //报修
    {path:'/shop/repair',component:()=>import ('views/single-content/shop-center/repair-content/repair-list/RepairList')},//门店保修列表
    {path:'/shop/create',
        meta:{KeepAlive:true},
        component:()=>import ('views/single-content/shop-center/repair-content/create-repair/CreateRepair')},//新建报修
    {path:'/shop/repair/catalog',component:()=>import ('views/single-content/shop-center/repair-content/repair-catalog/RepairCatalog')},//维修类别
    {path:'/shop/repair/detail/:id',component:()=>import ('views/single-content/shop-center/repair-content/reapir-order-item/RepairOrderItem')},//报修详情

    //门店
    {path:'/shop',component:()=>import('views/single-content/shop-center/shop-container/shop-info/ShopInfo')
    },//我的门店
    {path:'/shop/edit',component:()=>import('views/single-content/shop-center/shop-container/shop-operate/ShopOperate')},//编辑操作
    {path:'/shop/clerk',component:()=>import('views/single-content/shop-center/shop-container/clerk-info/ClerkInfo')},//店员详情

    //设备
    {path:'/shop/device/bind/:shop/:type',component:()=>import('views/single-content/shop-center/shop-container/device-center/bind-device/BindDevice')},//绑定设备
    {path:'/shop/device/camera/:seq/:shop',component:()=>import('views/single-content/shop-center/shop-container/device-center/camera-info/CameraInfo')},//摄像头信息
    // import '../views/single-content/shop-center/shop-container/device-center/camera-info/CameraInfo'
];

const router = new VueRouter({
  routes,
    mode:'history'
});
export default router
