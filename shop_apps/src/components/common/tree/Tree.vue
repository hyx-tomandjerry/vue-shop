<template>
    <div>
        <ul id="treeDemo" class="ztree"></ul>
    </div>
</template>

<script>
    let setting={
        isSimpleData:true,
        treeNodeKey:'id',
        treeNodeParentKey:'parent',
        view:{
            showLine:false,
            showIcon:false
        },
        data:{
            simpleData:{
                enable:true,

            }
        }
    };
    export default {
        name: "Tree",
        data(){
            return{
                zNodes:[]
            }
        },
        methods:{

        },
        mounted() {
            $.fn.zTree.init($("#treeDemo"), setting,this.zNodes);
        }
    }
</script>

<style scoped>
@import "../../../plugins/zTree/css/zTreeStyle/zTreeStyle.css";
</style>
