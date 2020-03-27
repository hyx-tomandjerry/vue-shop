<template>
    <van-popup
        v-model="isShow"
        round
        position="bottom" >
        <van-datetime-picker
            v-model="currentDate"
            :type="type"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirmHandle"
            @cancel="cancelHandle"
        />
    </van-popup>
</template>

<script>
    export default {
        name: "TimePopup",
        currentDate:new Date(),
        props:{
            isShow:Boolean,
            minDate:Date,
            maxDate:Date,
            type:{
                type:String,
                default:'date'
            },
            format:{
                type:String,
                default:'YYYY-MM-DD'
            }
        },
        data(){
            return{
                currentDate:new Date(),

            }
        },
        methods:{
            confirmHandle(event){
                this.$emit('confirmHandle',this.$moment(event).format(this.format))
            },
            cancelHandle(){
                this.$emit('cancelHandle',this.$moment(new Date()).format(this.format))
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
