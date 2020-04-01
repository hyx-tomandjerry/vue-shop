<template>
    <div>
        <van-cell title="基本设置"  isLink to="/profile/setting">
            <img src="~assets/images/profile/set.png" slot="icon" class="tag-img" size="large"/>
        </van-cell>
        <van-cell title="修改密码"  isLink to="/profile/edit">
            <img src="~assets/images/profile/passowrd.png" slot="icon" class="tag-img" size="large"/>
        </van-cell>
        <div class="margin-gap"></div>
        <van-cell title="公司详情"  isLink to="/profile/company">
            <img src="~assets/images/profile/company.png" slot="icon" class="tag-img" size="large"/>
        </van-cell>
        <van-cell title="退出公司"  isLink @click="operate('quitCompany')">
            <img src="~assets/images/profile/quit_company.png" slot="icon" class="tag-img" size="large"/>
        </van-cell>
        <div class="margin-gap" ></div>
        <van-cell title="软件协议" isLink to="/profile/protocol">
            <img src="~assets/images/profile/mine_protocol.png" slot="icon" class="tag-img" size="large"/>
        </van-cell>
        <van-cell title="退出登录"  isLink isLink @click="operate('quit')">
            <img src="~assets/images/profile/quit.png" slot="icon" class="tag-img" size="large"/>
        </van-cell>
    </div>
</template>

<script>
    import {common_delete} from 'network/common.js'
    export default {
        name: "ProfileOperate",
        methods:{
            operate(type){
                switch (type) {
                    case 'quitCompany' :
                        this.$dialog.confirm({
                            title:'退出公司',
                            message:'您确定要退出该公司?'
                        }).then(()=>{

                            common_delete('0',this.$utils.getLocalItem('userInfo').id,1);
                            this.$utils.removeStorage('userInfo');
                            this.$utils.removeStorage('account');
                            this.$utils.removeStorage('pwd');
                            this.$utils.removeStorage('remeber');
                        }).catch(()=>{

                        })

                        break;
                    case 'quit':
                        this.$dialog.confirm({
                            message:'确定要退出?'
                        }).then(()=>{
                            this.$router.replace('/login');
                            this.$utils.removeStorage('userInfo');
                            this.$utils.removeStorage('account');
                            this.$utils.removeStorage('pwd');
                            this.$utils.removeStorage('remeber');
                        }).catch(()=>{

                        })
                        break;
                }
            }
        }
    }
</script>

<style scoped>
.tag-img{
    width:23px;
    height:23px;
    vertical-align: middle;
    margin-right: 14px;
}
    .margin-gap{
        width:100%;
        height:13px;
        background: #f7f7f7;
    }
</style>
