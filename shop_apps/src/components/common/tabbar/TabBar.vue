<template>
    <van-tabs v-model="tabCur" swipeable @click="tabCurHandle">
        <van-tab v-for="(item,index) in tabCurList" :key="index" :title="item.name">
            <slot name="content"> </slot>
        </van-tab>
    </van-tabs>
</template>

<script>
    export default {
        name: "TabBar",
        props:{
            tabCurList:{
                type:Array,
                default(){return []}
            }
        },
        data(){
            return{
                tabCur:0
            }
        },
        methods:{
            tabCurHandle(){
                this.$emit('tabCurHandle',Number(this.tabCur+1))
            },

        }
    }
</script>

<style scoped>

</style>
