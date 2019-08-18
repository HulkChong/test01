import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'

import router from './router/index.js'
//缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car=JSON.parse(localStorage.getItem('car')||'[]')
var store=new Vuex.Store({
    state:{
        car:car
    },//通过this.$store.state
    mutations:{
        addToCar:function(state,obj){
            var flag=false
            state.car.some(item=>{
                if(item.id==obj.id){
                    item.num+=parseInt(obj.num)
                    flag=!flag
                    return true
                }
            })
            if(!flag){
                state.car.push(obj)
            }
            localStorage.setItem('car',JSON.stringify(state.car))            
        },
        updateToCar:function(state,obj){
            console.log('触发这个updateToCar了')
            state.car.some(item=>{
                if(item.id==obj.id){
                    item.num=parseInt(obj.num)
                    localStorage.setItem('car',JSON.stringify(state.car)) 
                    return true
                }
            })

        },
        removeFromCar:function(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car)) 
        },
        changeSel:function(state,obj){
            state.car.forEach(item=>{
                if(item.id==obj.id){
                    item.selected=obj.selected
                    if(!item.selected){
                        item.num=0
                        return true
                    }
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car)) 
        }
    },//通过this.$store.commit
    getters:{
        getAllCount(state){
            var c = 0
            state.car.forEach(item=>{
                c+=item.num
            })
            return c
        }
    } //通过this.$store.getters
})


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)

Vue.http.options.root="http://49.232.54.239:5000"


var vm=new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:function(createElements){
        return createElements(App)
    },
    router,
    store
})