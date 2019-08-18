<template>
    <div>
        <h3>标题</h3>
        <p>
            <span>发表时间</span><span>点击次数</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <!-- <img class="preview-img" v-for="(item,index) in list" :key="item.url" :src="item.src" height="100" @click="$preview.open(index,list)"> -->
        <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose" class="vue-preview">
                </vue-preview>
        </div>
        
        <!-- 图片内容区域 -->
        <!-- 现成评论区域 -->
        <div class="comments">
            <comments></comments>
        </div>
        
    </div>
</template>

<script>
import comments from '../subcom/Comments.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            list:[]
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList(){
            this.$http.get("api/picinfo").then(result=>{
                if(result.body.status==0){
                    result.body.message.forEach(item=>{
                        item.w=600;
                        item.h=400;
                        item.msrc=item.src
                    })
                    this.list=result.body.message
                    console.log(this.list[0].src)
                }
                else{
                    alert('请求数据失败')
                }
            })
        },
        handleClose(){
            console.log('over')
        }

    //     getList(){
    //         this.$http.get("api/newslist").then(result=>{
    //             if(result.body.code==200){
    //                 result.body.newslist.forEach(item=>{
    //                     item.w=600;
    //                     item.h=400;
    //                 })
    //                 this.list=result.body.newslist
    //                 console.log(this.list)
    //             }
    //             else{
    //                 alert('请求数据失败')
    //             }
    //         })
    //     }
    },
    components:{
        comments
    }
}
</script>

<style lang="less" scoped>
    .thumbs {
        
        /deep/ .my-gallery{
        display:flex;
        flex-wrap: wrap;
        figure{
        margin:5px;
        width:30%;
        img{
        width: 100%;
        box-shadow:0 0 8px #999;
        border-radius: 5px;
    }
    }
    }
    }
</style>