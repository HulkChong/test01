<template>
    <div>
        <h3>发表评论</h3>
        <br>
        <textarea name="" id="" cols="30" rows="5" maxlength="120" ref="textarea" placeholder="请输入你的评论"></textarea>
        <mt-button type="primary" size="large" @click="addOne">发表评论</mt-button>
            <div class="list">
                <div class="item" v-for="(item,i) in newslist" :key="item.author">
                    <div class="title">
                        第{{i+1}}楼&nbsp;&nbsp; 用户：{{item.author}}&nbsp;&nbsp;时间：2019:7:12 10:39:08
                    </div>
                    <div class="detail">
                        {{item.content}}
                    </div>
                </div>
            </div>
        <mt-button type="danger" size="large" plain @click="addMore">加载更多</mt-button>
    </div>
</template>

<script>
import { button } from 'mint-ui'
export default {
    data(){
        return {
            newslist:[],
        }
    },
    created() {
        this.getLists()
    },
    // updated() {
    //     this.getLists()
    // },
    methods:{
        addOne(){
            var a=this.$refs.textarea.value
            console.log(a)
            var obj={
        "content": a,
        "author": "匿名用户",
        "typeid": 43
            }
            this.newslist.unshift(obj)
        },
        getLists(){
            this.$http.get('http://api.tianapi.com/txapi/mingyan/?key=9f56f00197395a47a1b0eee0b0f65099&num=8').then(result=>{
                if(result.body.code==200){
                    this.newslist=result.body.newslist
                }
                else{
                    alert('请求数据失败')
                }
            })
        },
        addMore(){
            this.$http.get('http://api.tianapi.com/txapi/mingyan/?key=9f56f00197395a47a1b0eee0b0f65099&num=4').then(result=>{
                if(result.body.code==200){
                    this.newslist=this.newslist.concat(result.body.newslist)
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
    .list{
        margin-top:5px;
    }
    .list > .item > .title{
        color:white;
        background-color: rgb(88, 87, 87);
    }
    .list > .item > .detail{
        text-indent: 1em;
        margin-bottom:5px;
    }
</style>