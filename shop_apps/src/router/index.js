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
// import '../views/single-content/article-center/article-item-detail/ArticleItemDetail'
const routes=[
  {path:'/',redirect:'/index'},
  {path:'/index',component:Index,meta:{isShow:true}},
  {path:'/work',component:Work,meta:{isShow:true}},
  {path:'/notice',component:Notice,meta:{isShow:true}},
  {path:'/profile',component:Profile,meta:{isShow:true}},
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

];

const router = new VueRouter({
  routes,
  mode:'history'
});
export default router
