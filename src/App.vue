<template>
<div id="app-container">
    <!-- <mt-header fixed title="WJLCC"></mt-header> -->
    <mt-header fixed title="WJLCC">
  <router-link to="/" slot="left">
    <mt-button icon="back" @tab="jump">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <div id="main">
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
    		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lc" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lc" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link id="shopcar" class="mui-tab-item-lc" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lc" to="/about">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">关于</span>
			</router-link>
		</nav>  
</div>
    
</template>

<script>
import {Header} from 'mint-ui'
export default {
    data(){
        return {
            total:0
        }
    },
    methods: {
        jump(){
            this.$router.go(-1)
        }
    }
    
}
</script>

<style scoped>
    *{
        touch-action: pan-y
    }
    .mint-head{
        z-index:99;
    }
    #main{
        /* height: 100%; */
        padding-top:40px ;
        overflow-x: hidden;
        height: 650px;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform:translateX(-100%);
        position:absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.4s ease;
    }
    .mui-bar-tab .mui-tab-item-lc{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
    .mui-bar-tab .mui-tab-item-lc.mui-active {
    color: #007aff;
}
    .mui-bar-tab .mui-tab-item-lc .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
    .mui-bar-tab .mui-tab-item-lc .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-lc {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
</style>
