<template>
    <div>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div id="ball" v-show="ballflag"></div>
        </transition>
        
        <div class="mui-card">
				<div class="mui-card-content">
                    <!-- <Swiper :parentlists1="lists"></Swiper> -->
					<div class="mui-card-content-inner">
                            <Swiper :parentlists="lists"></Swiper>                       
                        <!-- <img src="../../img/5g1.png" alt=""> -->
					</div>
				</div>
			</div>
        <div class="mui-card">
				<div class="mui-card-header">{{goods.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p class="price">
                            市场价:￥<del>{{goods.priceBefore}}</del>&nbsp;&nbsp;&nbsp;&nbsp;现售价:￥<span class="price-now">{{goods.priceNow}}</span>
                        </p>
                        <div class="num">
                            <p class="text-num">购买数量:</p>
                            <div class="mui-numbox" data-numbox-min='0' :data-numbox-max="goods.stock_quantity">
					            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="delOne">-</button>
					            <input id="test" class="mui-input-numbox" type="number" v-model="value" />
					            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addOne">+</button>
				            </div>
                        </div>
                        
                        <p class="buy-add"><mt-button type="danger">立即购买</mt-button>
                            <mt-button type="primary" @click="addTpShopCar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
		</div>
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>库存数量:{{goods.stock_quantity}}</p>
                        <p>上架时间:2018.10.22</p>
                        <p>摘要:{{goods.abstract}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" plain @click="addCom">商品评论</mt-button>
                </div>
		</div>
        <Comments v-show="flag"></Comments>
    </div>
</template>

<script>
// import { Swipe, SwipeItem } from 'mint-ui'
import Swiper from '../subcom/Swiper.vue'
import Comments from '../subcom/Comments.vue'
import NumberBox from '../subcom/NumberBox.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            lists:[],
            goods:'',
            flag:false,
            ballflag:false,
            x1:0,
            x2:0,
            y1:0,
            y2:0,
            value:1
        }
    },
    created() {
        this.getLists(),
        this.getGoods()
    },
    methods: {
        delOne(){
            if(this.value>0){
                this.value--
            }
            else{
                this.value=0
            }           
        },
        addOne(){
            if(this.value<this.goods.stock_quantity){
                this.value++
            }
            else{
                this.value=this.goods.stock_quantity
            }
        },
        addTpShopCar(){
            this.ballflag=!this.ballflag
            var goodsinfo={id:this.id,num:this.value,price:this.goods.priceNow,picUrl:this.goods.imgUrl,title:this.goods.title,selected:true}
            this.$store.commit('addToCar',goodsinfo)
        },
        addCom(){
            this.flag=true;
        },
        getLists(){
            this.$http.get("api/goodsinfo?id="+this.id).then(result=>{
                // console.log(result.body)
                if(result.body){
                    result.body.src.forEach(item=>{
                        item.picUrl=item.src1
                    })
                    this.lists=result.body.src
                    console.log(result.body.src)
                }
                else{
                    alert('请求数据失败')
                }
            })
        },
        getGoods(){
            this.$http.get("api/goodsdetail?id="+this.id).then(result=>{
                // console.log(result.body)
                if(result.body){
                    this.goods=result.body
                    console.log(this.goods)
                }
                else{
                    alert('请求数据失败')
                }
            })
        },
        beforeEnter(el){
            var inputpos=document.getElementById('test').getBoundingClientRect()
            this.x1=inputpos.x+inputpos.width/2
            this.y1=inputpos.y+inputpos.height/2
            el.style.left=this.x1+"px"
            el.style.top=this.y1+"px"
            el.style.transform="translate(0px,0px)"
        },
        enter(el,done){
            var shopcar=document.getElementById('shopcar').getBoundingClientRect()
            this.x2=shopcar.x+shopcar.width/2-5
            this.y2=shopcar.y+shopcar.height/2-5
            var offx=this.x2-this.x1
            var offy=this.y2-this.y1
            el.offsetWidth
            el.style.transform=`translate(${offx}px,${offy}px)`
            el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },
        afterEnter(el){
            this.ballflag=false
        }
    },
    components:{
        Swiper,
        Comments,
        NumberBox
    }
}
</script>

<style lang="less" scoped>
    #ball{
        width:15px;
        height:15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        transform: translate(88px,200px);
        z-index:99;
    }
    .mui-card-footer{
        button{
            width: 100%;
        }
    }
    .num{
        display: flex;
        flex-wrap: wrap;
        position:relative;
        margin-bottom: 20px;
        .text-num{
            line-height: 35px;
            vertical-align: center;
            margin:0px;
        }
        .mui-numbox{
            margin-left: 50px;
        }
    }
    .mui-card-content-inner{
        display: block
    }
    .buy-add{
        button{
            width: 49%;
        }
    }
    .price-now{
        color:red;
        font-size:16px;
        font-weight: bold;
    }
</style>