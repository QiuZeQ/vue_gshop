<template>
    <!--首页头部-->
        <header class="header">
            <!-- slot:插槽 通过props命名，接收string类型的值-->
          <slot name="left"></slot>
          <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
          </span>
          <slot name="right"></slot>
        </header>
</template>

<script>
export default {
    /*
        props和slot的区别
        props是用来接收参数的 例如父组件向子组件传参 可以放在props中
        slot：插槽 slot分发模式主要用于在组件中插入标签或者组件之间的相互嵌套
     */
    props:{
        title:String
    }
}
</script>

<style lang="stylus" scoped>
    .header
                background-color #FFC125
                position fixed
                z-index 100
                left 0
                top 0
                width 100%
                height 45px
                .header_search
                    position absolute
                    left 15px
                    top 50%
                    transform translateY(-50%)
                    width 10%
                    height 50%
                    .icon-sousuo
                        font-size 25px
                        color #fff
                .header_title
                    position absolute
                    top 50%
                    left 50%
                    transform translate(-50%, -50%)
                    width 50%
                    color #fff
                    text-align center
                    .header_title_text
                        font-size 20px
                        color #fff
                        display block
                .header_login
                    font-size 14px
                    color #fff
                    position absolute
                    right 15px
                    top 50%
                    transform translateY(-50%)
                    .header_login_text
                        color #fff
</style>