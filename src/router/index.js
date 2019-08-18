import VueRouter from 'vue-router'
import Home from '../com/Home.vue'
import Shopcar from '../com/Shopcar.vue'
import Member from '../com/Member.vue'
import About from '../com/About.vue'
import NewsList from '../com/NewsList.vue'
import NewsInfo from '../com/NewsInfo.vue'
import Picture from '../com/Picture.vue'
import GoodList from '../com/GoodList.vue'
import PictureInfo from '../com/PictureInfo.vue'
import GoodsDetail from '../com/GoodsDetail.vue'

// var login={
//     template:""
// }

var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/shopcar',component:Shopcar},
        {path:'/about',component:About},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/picture',component:Picture},
        {path:'/home/goodlist',component:GoodList},
        {path:'/home/pictureinfo/:id',component:PictureInfo},
        {path:'/home/goodsdetail/:id',component:GoodsDetail}
    ],
    linkActiveClass:"mui-active"
})

export default router
