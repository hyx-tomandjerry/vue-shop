<template>
    <img src="~assets/images/common/add.png" alt="" class="add-img" @click="addOperate">
</template>

<script>
    export default {
        name: "AddImg",
        methods:{
            addOperate(){
                this.$emit('addOperate')
            }
        }
    }
</script>

<style scoped>
    .add-img{
        width:68px;
        height:68px;
        flex-shrink: 0;
        position: fixed;
        right:30px;
        bottom:50px;
    }
</style>
