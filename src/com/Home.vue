<template>
    <div>
        <swiper :parentlists="lists"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                            <span class="mui-icon mui-icon-home"></span>
                            <div class="mui-media-body">新闻资讯</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/picture">
                            <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                            <div class="mui-media-body">图片详情</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlist">
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">商品购买</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">location</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">Search</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">Phone</div></a></li>
            </ul> 
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import Swiper from '../subcom/Swiper.vue'
export default {
    data(){
        return {
            lists:[]
        }
    },
    created() {
        this.getLists()
    },
    methods:{
        getLists(){
            this.$http.get("api/pic").then(result=>{
                // console.log(result.body)
                if(result.body.code==200){
                    this.lists=result.body.piclists
                    //console.log(this.lists)
                }
                else{
                    alert('请求数据失败')
                }
            })
        }
    },
    components:{
        swiper:Swiper
    }

}
</script>

<style lang="css" scoped>
    div{
        height: 200px;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0px;
        background-color: white;

    }

    
</style>