<template>
    	<div>
            <div class="newsinfo-container">
                <h3 class="news-title">{{newslist.title}}</h3>
                <p class="news-subtitle">
                    <span>发表时间:{{newslist.ctime}}</span><span>点击次数:{{newslist.click}}</span>
                </p>
            </div>
               <comments></comments>
		</div>
</template>

<script>
import Comments from '../subcom/Comments.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            newslist:[]
        }
    },
    mounted() {
        this.getId()
        this.getList()
    },
    methods:{
        
        getId(){
            console.log(this.id)
        },
        getList(){
            this.$http.get(`api/newsinfo?id=${this.id}`).then(result=>{
                if(result.body){
                    this.newslist=result.body
                }
                else{
                    alert('请求数据失败')
                }
            })
        }
        },
    components:{
         "comments":Comments
    }
}
</script>

<style lang="css" scoped>
    .newsinfo-container{
        padding: 0px 4px;
    }
    .newsinfo-container>h3{
        font-size: 14px;
    }
    .newsinfo-container>p{
        color: red;
        display: flex;
        justify-content: space-between;
    }
</style>