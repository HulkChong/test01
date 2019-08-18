<template>
    <div>
        <div class="mui-card" v-for="(item,index) in lists" :key="item.id">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
						<mt-switch v-model="item.selected" @change="changeSel(item.id,index)"></mt-switch>
                        <img :src="item.picUrl" alt=""> 
                        <div class="info">
                                <h1>{{item.title}}</h1>
                                <span class="price">{{item.price}}</span>
                                <!-- <div class="mui-numbox" data-numbox-min='0' data-numbox-max="9">
					            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="delOne(index)">-</button>
					            <input id="test" class="mui-input-numbox" ref="numberbox" type="number" @change="changeIt(item.id,index)" :value="item.num" />
					            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addOne(index)">+</button>
				            </div> -->
                            <div class="mui-numbox" data-numbox-min='0' data-numbox-max="80">
					            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					            <input id="test" class="mui-input-numbox" ref="numberbox" type="number" @change="changeIt(item.id,index)" :value="item.num" />
					            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				            </div>
                                <a href="" @click.prevent="removeItem(item.id,index)">删除</a> 
                        </div>
				</div>
			</div>
		</div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner pailie">
                    <div class="left">
                        <p>总计:{{totalNum}}</p>
                        <p>已勾选商品<span class="pricemsg">{{totalCat}}</span>种,总价<span class="pricemsg"></span>￥{{totalMoney}}元</p>
                    </div>
                    <mt-button type="danger" @click="sumup">结算</mt-button>
                </div>
            </div>
		</div>
    </div>
</template>

<script>
import mui from '../../lib/js/mui.min.js'
export default {
    data(){
        return {
            value:true,
            totalCat:0,
            totalNum:0,
            totalMoney:0,
            lists:[]
            }
    },
    created() {
        this.getLists()
    },
    mounted(){
        mui.init()
        mui('.mui-numbox').numbox()
    },
    methods: {
        getLists(){
            this.lists=this.$store.state.car
            console.log(this.lists)
        },
        changeIt(id,index){
            var num=parseInt(this.$refs.numberbox[index].value)
            // console.log("changeit触发")
            // console.log(this.$refs.numberbox[index].value)
            // console.log(id)
            this.$store.commit("updateToCar",{
                id:id,
                num:num
            })
        },
        removeItem(id,index){
            this.lists.splice(index,1)
            this.$store.commit("removeFromCar",id)
        },
        sumup(){
            this.totalMoney=0
            this.totalNum=0
            this.totalCat=0
            this.lists.forEach(item=>{
                if(item.selected==true){
                    this.totalCat++
                    this.totalNum+=item.num
                    this.totalMoney+=(item.num*item.price)
                }  
            })
            console.log(this.totalNum)
            console.log(this.totalMoney)
        },
        changeSel(id,index){
            this.$store.commit("changeSel",{
                id:id,
                selected:this.lists[index].selected
            })
        }
    },
}
</script>

<style lang="less" scoped>
    .mui-card-content-inner{
        display: flex;
        flex-wrap: wrap;
        .mint-switch{
            height: 60px;
            flex:1
        }
        .info{
            flex: 3;
            height: 60px;
            h1{
                font-size: 14px;
                height: 28px;
                overflow: hidden;
            }
            .price{
                color: red;
                font-size: 12px;
            }
            .mui-numbox{
                width:110px;
            }
        }
        img{
            flex:1;
            height: 60px;
            // width: 60px;
        }
    }
    .pailie{
        display:flex;
        justify-content: space-between;
        align-items: center;
        vertical-align: center;
    }
    .pricemsg{
        color:red;
        font-weight: bold;
    }
</style>