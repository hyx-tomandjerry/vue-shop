<template>
    <div>
        <van-nav-bar title="任务管理" left-arrow @click-left="$utils.goBack"/>
    </div>
</template>

<script>
    import {receivedTasksApi} from 'network/task'
    export default {
        name: "TaskList",
        data(){
            return{
                taskList:[],
                page:1
            }
        },
        methods:{
            getTaskList(){
                receivedTasksApi(this.page).then(res=>{
                    this.taskList=res.data;
                })
            }
        },
        mounted() {
            this.getTaskList()
        }
    }
</script>

<style scoped>

</style>
