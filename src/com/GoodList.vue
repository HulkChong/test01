<template>
    <div id="list">
        <div id="item" v-for="item in list" :key="item.id">
            <div class="img" @click="jumpTo(item.id)">
                <img :src="item.imgUrl" alt="">
                <h1>{{item.title}}</h1>
                <div class="price">
                <h1 class="p1"><span>￥{{item.priceNow}}</span><span>￥{{item.priceBefore}}</span></h1>
                <h1 class="status"><span>热卖中</span><span>还剩{{item.stock_quantity}}件</span></h1>
            </div>
            </div>
        </div>
        <mt-button type="danger" @click="addList">加载更多</mt-button>
    </div>
</template>

<script>
import {button} from 'mint-ui'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getList()
    },
    methods: {
        getList(){
            this.$http.get("api/goodslists").then(result=>{
                    this.list=result.body.message
         })
        }, 
        addList(){
            this.$http.get("api/goodslists").then(result=>{
                    this.list=this.list.concat(result.body.message)
            })
        },
        jumpTo(id){
            this.$router.push('/home/goodsdetail/'+id)
        }
}
}
</script>

<style lang="css" scoped>
    #list{
         display: flex;
         flex-wrap: wrap;
         padding: 10px;
         justify-content:left;
    }
    .mint-button{
        width: 100%;
    }
    #item{
        width:48%;
        border: 1px solid #ccc;
        margin: 3px 3px;
    }
    #item>.img>img{
        display: block;
        width: 100%;
    }
    
    #item>.img>h1{
        font-size: 14px;
        text-align: center;
        height:2em;
        overflow: hidden;
    }
    #item .price{
        background-color:#ccc;
    }
    #item .p1{
        font-size: 14px;
    }
    #item .status{
        display: flex;
        justify-content: space-between;
    }
    #item .p1 span:nth-child(1){
        color:red;
        font-size: 20px;
    }
    #item .p1 span:nth-child(2){
        text-decoration: line-through;
    }
    #item .status{
        font-size: 14px;
    }
</style>