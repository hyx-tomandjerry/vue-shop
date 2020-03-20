<template>
    <div class="empty-container">
        <img src="~assets/images/common/noticeNo.png" alt="" class="empty-img">
    </div>
</template>

<script>
    export default {
        name: "index-article-empty"
    }
</script>

<style scoped>
    .empty-container{
        min-height:200px;
        position: relative;
    }
    .empty-img{
        width:130px;
        height:95px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
</style>
