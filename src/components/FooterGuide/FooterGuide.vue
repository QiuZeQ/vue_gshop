<template>
    <div class="footer_guide">
        <!-- :class:动态绑定class样式 {on:'/msite' ===$route.path}判断当前路径，并在对应的组件显示对应颜色 -->
        <span class="guide_item" :class="{on:'/msite' ===$route.path}" @click="goTo('/msite')">
        <span class="item_icon">
            <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
        </span>
        <span class="guide_item" :class="{on:'/search' ===$route.path}" @click="goTo('/search')">
        <span class="item_icon">
            <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
        </span>
        <span class="guide_item" :class="{on:'/order' ===$route.path}" @click="goTo('/order')">
        <span class="item_icon">
            <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
        </span>
        <span class="guide_item" :class="{on:'/profile' ===$route.path}" @click="goTo('/profile')">
        <span class="item_icon">
            <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
        </span>
    </div>
</template>

<script>
export default {
    methods:{
        goTo(path){
            // $router:控制路由
            /*
                $router和$route的区别
                $router他是vuerouter实例应用,主要实现路由跳转，
                想跳转不同的路径使用router.push方法
                $route是一个跳转的路由对象，
                每一个路由都会有一个$route对象，
                是一个局部的对象，
                可以获取对应的name，path，params，query等
             */
            /* 
                replace和push的区别
                router.replace:设置 replace 属性（默认值: false）的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。即使点击返回按钮也不会回到这个页面。
                        加上replace: true后，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
                router.push:这个方法会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，则回到之前的 URL。
            */
           //在当前页面重新点击会报错。利用catch去除报错
            this.$router.replace(path).catch(err => {
                // 重复点击相同的url
            })
        }
    }
}
</script>


<style lang="stylus" scoped>
    @import '../../assets/stylus/mixins.styl'
    .footer_guide
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            /* 
                flex 1 flex 是 flex-grow、flex-shrink、flex-basis的缩写
                flex 的默认值是以上三个属性值的组合，flex 的默认值是 0 1 auto。
                flex-grow:用于设置或检索弹性盒子的扩展比率
                flex-shrink:默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。
                flex-basis:用于设置或检索弹性盒伸缩基准值
            */
            flex 1
            text-align center
            /* flex-direction column:垂直显示 */
            flex-direction column
            /*
                align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式
                align-items center:纵轴上居中对齐显示 
            */
            align-items center
            margin 5px
            color #999999
            &.on
                color #FFC125
            span
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 22px
</style>