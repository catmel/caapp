<template>
    <div>
        <!-- 活动与公告 -->
        <Row>
        <i-col span="24"><h2>公告与活动</h2></i-col>
        <i-col span="24" style="color:red"> {{bus.bulletin}}</i-col>
        <i-col span="24" v-for="(v,i) in bus.supports" :key="i"> {{v.description}}</i-col>
        </Row>
        <!-- 商家信息-->
        <Row>
        <i-col span="24"><h2>商家信息</h2></i-col>
        <i-col span="24" v-for="(v,i) in bus.infos" :key="i"> {{v}}</i-col>
         </Row>
    </div>
</template>

<script >
import { seller } from "../api/apis";
    export default{
        data(){
            return {
                 bus: []

            }
        },
        created(){
            seller().then(res=>{
                console.log(res)
                 this.bus = res.data.data;
            })  
        }
        
    }
</script>

<style scoped>

</style>