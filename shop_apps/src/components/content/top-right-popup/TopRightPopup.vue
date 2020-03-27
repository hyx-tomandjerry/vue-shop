<template>
    <transition name="van-slide-bottom" >
        <div class="operate-container" >
            <div class="operate-list-item flex  align-items-center"
                 v-for="(item,index) in list"
                 @click="chooseItem(item)"
                 :key="index">
                <img :src="item.icon" width="20" height="20" alt="" />
                <div>{{item.name}}</div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "TopRightPopup",
        props:{
            id:[String,Number],
            list:{
                type:Array,
                default(){return []}
            }
        },
        methods:{
            chooseItem(item){
                switch (item.type) {
                    case 'add':
                        //录入店员
                        this.$router.push({
                            path:'/shop/edit',
                            query:{
                                id:this.id,
                                type:item.type
                            }
                        });
                        this.$emit('chooseItem');
                        break;
                    case 'record':
                        //记一笔
                        this.$emit('chooseItem')
                        break;
                    case 'bind':
                        //绑定设备
                        this.$emit('chooseItem')
                        break;
                    case 'manager':
                        this.$emit('chooseItem',item.type);
                        break;
                }

            }
        }
    }
</script>

<style scoped>

    .operate-container{
        background-repeat:  no-repeat;
        background-size:cover;
        position:fixed;
        top:23px;
        right:26px;
    }
    .operate-list-item{
        height:55px;
        color:#fff;
        padding:0 10px;
        font-size:14px;
        line-height:55px;
        max-width:200px;
        min-width:150px;
        border-bottom:1px solid #EEEEED;
    }
    .operate-list-item img{
        vertical-align: middle;
        margin-right:15px;
    }
    .operate-list-item:last-child{
        border:none
    }
</style>
