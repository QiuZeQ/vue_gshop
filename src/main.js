// 入口js

//导入vue
import Vue from 'vue'
//导入应用组件
import App from './App.vue'
//引入路由
import router from './router'
//引入vuex动态管理库
import store from './store'
//图标库（官网：https://www.iconfont.cn/）
import './assets/css/font_518606_6676bmcalnrhehfr.css'
//重置浏览器样式（官网：https://meyerweb.com/）
import './assets/css/reset.css'

import AMap from 'vue-amap'
Vue.use(AMap)
//将每次vue启动成功的提示取消掉
Vue.config.productionTip = false
//new一个Vue实例对象
// new Vue({
//   //找到根组件
//   //挂载路由
//   router,
//   //挂在vuex动态管理库
//   store,
//   //渲染app根组件
//   render: h => h(App)
// }).$mount('#app')
new Vue({
  //找到根组件
  el:'#app',
  //挂载路由
  router,
  //挂在vuex动态管理库
  store,
  //渲染app根组件
  render: h => h(App)
})
/*
Vue 的$mount()为手动挂载，
在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），
之后要手动挂载上。
new Vue时，el和$mount并没有本质上的不同。
*/
