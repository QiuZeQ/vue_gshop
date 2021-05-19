//导入vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'
import Login from '../views/Login/Login.vue'

//声明使用路由插件
Vue.use(VueRouter)
//在路由中定义所有路由对象
const routes = [
  {
    path:'/',redirect:'/msite',component:Msite
  },
  {
    path:'/msite',component:Msite,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/order',component:Order,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/profile',component:Profile,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/search',component:Search,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/login',component:Login
  },
]
//声明一个路由对象
const router = new VueRouter({
  routes
})
//向外暴露路由对象
export default router
