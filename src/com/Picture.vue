<template>
    <div>
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class='["mui-control-item",item.id==1?"mui-active":""]' href="javascript;" data-wid="tab-top-subpage-1.html" v-for="item in variety" :key="item.id" @click="addPic(item.id)">
							{{item.msg}}
						</a>
					</div>
				</div>

			</div>
    <ul class="piclist">
        
            <li v-for="(item,i) in newslist" :key="item.url">
                <router-link :to="'/home/pictureinfo/'+i">
                <img v-lazy="item.picUrl">
                <h1>{{item.title}}</h1>
            </router-link>
            </li>
        
    </ul>
    </div>
</template>

<script>
import {Lazyload} from 'mint-ui'
import mui from '../../lib/js/mui.min.js'
export default {
    data(){
        return {
            variety:[{msg:"IT",id:1},{msg:"NBA",id:2},{msg:"旅游资讯",id:3},{msg:"娱乐",id:4},{msg:"社会生活",id:5}],
            newslist:[]
        }
    },
    created() {
        this.addPic(1)
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
        deceleration:0.0005
        })
    },
    methods:{
        addPic(num){
            switch (num) {
                case 1:
                    {
                        this.$http.get('http://api.tianapi.com/it/?key=9f56f00197395a47a1b0eee0b0f65099&num=10').then(result=>{
                            if(result.body.code==200){
                        this.newslist=result.body.newslist
                }
                else{
                    alert('请求数据失败')
                }
                        })
                    }
                    break;
                case 2:
                     {
                        this.$http.get('http://api.tianapi.com/nba/?key=9f56f00197395a47a1b0eee0b0f65099&num=10').then(result=>{
                            if(result.body.code==200){
                        this.newslist=result.body.newslist
                }
                else{
                    alert('请求数据失败')
                }
                        })
                    }
                    break;
                case 3:
                     {
                        this.$http.get('http://api.tianapi.com/travel/?&key=9f56f00197395a47a1b0eee0b0f65099&num=10').then(result=>{
                            if(result.body.code==200){
                        this.newslist=result.body.newslist
                }
                else{
                    alert('请求数据失败')
                }
                        })
                    }
                    break;
                case 4:
                     {
                        this.$http.get('http://api.tianapi.com/huabian/?&key=9f56f00197395a47a1b0eee0b0f65099&num=10').then(result=>{
                            if(result.body.code==200){
                        this.newslist=result.body.newslist
                }
                else{
                    alert('请求数据失败')
                }
                        })
                    }
                    break;
                    case 5:
                     {
                        this.$http.get('http://api.tianapi.com/social/?&key=9f56f00197395a47a1b0eee0b0f65099&num=10').then(result=>{
                            if(result.body.code==200){
                        this.newslist=result.body.newslist
                }
                else{
                    alert('请求数据失败')
                }
                        })
                    }
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="css" scoped>
.piclist{
    width: 100%;
    list-style: none;
    /* background-color: #ccc; */
    text-align: center;
    padding: 0px;
}
.piclist li{
    width: 95%;
    text-align: center;
    margin: 0 auto;
    box-shadow: 0 0 9px #999;
    position: relative;
}
.piclist > li  h1{
    width: 100%;
    color:white;
    font-size: 14px;
    position: absolute;
    bottom:0;
    background-color: rgba(0,0,0,.4);
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img{
    width: 100%;
    vertical-align: center;
}
</style>