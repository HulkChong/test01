<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,i) in newslist" :key="item.url">
					<router-link :to="'/home/newsinfo/'+i">
						<img class="mui-media-object mui-pull-left" :src="item.picUrl">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'><span>{{item.ctime}}</span><span>点击次数:0</span></p>
						</div>
					</router-link>
				</li>

			</ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newslist:[]
        }
    },
    created() {
        this.getList()
    },
    methods:{
        getList(){
            this.$http.get('api/newslist').then(result=>{
                if(result.body.code==200){
                    this.newslist=result.body.newslist
                }
                else{
                    alert('请求数据失败')
                }
            })
        }
    }
}
</script>

<style lang="css" scoped>
    .mui-media-body>h1{
        font-size: 14px;
    }
    .mui-media-body>p{
        display: flex;
        justify-content: space-between;
    }
</style>