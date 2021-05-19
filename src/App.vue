// 组件化开发
<template>
  <div id="app">
    <!-- 路由占位符 路由所显示的内容 -->
    <router-view />
    <!-- <FooterGuide /> 中的'/'为自封闭符，是<FooterGuide></FooterGuide>的缩写 <router-view/>也是一样的-->
    <!-- $route:当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter"/> 
  </div>
</template>
<script>
//导入底部导航栏
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components:{
    //将引入的底部导航栏组件映射为标签
    FooterGuide
  }
}
</script>
<style lang="stylus" scope>
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
