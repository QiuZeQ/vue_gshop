<template>
    <div class="msite">
        <!-- 首页头部 -->
        <HearderTop :title="address">
            <span class="header_search" slot="left">
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span class="header_login" slot="right">
                <span class="header_login_text">登录&nbsp;|&nbsp;注册</span>
            </span>
        </HearderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/1.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/2.jpg">
                  </div>
                  <span>商超便利</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/3.jpg">
                  </div>
                  <span>美食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/4.jpg">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/5.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/6.jpg">
                  </div>
                  <span>准时达</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/7.jpg">
                  </div>
                  <span>预订早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/8.jpg">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/9.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/10.jpg">
                  </div>
                  <span>商超便利</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/11.jpg">
                  </div>
                  <span>美食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/12.jpg">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/13.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/14.jpg">
                  </div>
                  <span>准时达</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/1.jpg">
                  </div>
                  <span>预订早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/2.jpg">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList />
        </div>
    </div>
</template>

<script>
//导入轮播组件以及轮播分页组件
import Swiper, { Pagination, Navigation } from 'swiper';
//使用轮播组件和分页组件
Swiper.use([Pagination, Navigation]);
//导入轮播组件的样式
import 'swiper/swiper-bundle.css';

//导入组件
import HearderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  data(){
    return{
      address:''
    }
  },
    mounted(){
        //创建一个Swiper实例对象，实现轮播图
        new Swiper('.swiper-container',{
            loop:true,//可以循环轮播 无缝连接
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    components:{
        //映射成标签
        HearderTop,
        ShopList
    },
    methods:{
      getLocation(){
        const _this = this
        AMap.plugin('AMap.Geolocation',function(){
          var geolocation = new AMap.Geolocation({
            //是否使用高精度定位，默认为true
            enableHighAccuracy:true,
            //设置定位超时时间，默认无穷大
            timeout:10,
          })
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation,'complete',onComplete)
          AMap.event.addListener(geolocation,'error',onError)

          function onComplete(data){
            //data是具体的定位信息
            console.log('定位成功信息：',data)
            _this.address = data.formattedAddress
            console.log(_this.address)
          }

          function onError(data){
            //定位出错
            console.log('定位失败错误：',data)
            _this.getLngLatLocation()
          }
        })
      },
      getLngLatLocation(){
        AMap.plugin('AMap.CitySearch',function(){
          var CitySearch = new AMap.CitySearch()
          CitySearch.getLocalCity(function(status,result){
            if(status === 'complete'  && result.info === 'SUCCESS'){
              //查询成功，result即为当前所在城市信息
              console.log('通过ip获取当前城市：',result)
              //逆向地理编码
              AMap.plugin('AMap.Geocoder',function(){
                var geocoder = new AMap.Geocoder({
                  //city指定编码查询的城市，支持传入城市名，adcode和citycode
                  city:result.adcode
                })

                var lnglat = result.rectangle.split(';')[0].split(',')
                geocoder.getAddress(lnglat,function(status,data){
                  if(status === 'complete' && data.info === 'SUCCESS'){
                    //result为对应的地理位置详细信息
                    console.log(data)
                  }
                })
              })
            }
          })
        })
      }
    },
    created(){
      this.getLocation()
    }
}
</script>

<style lang="stylus">
    @import '../../assets/stylus/mixins.styl'
    .msite  //首页
            width 100%
            .msite_nav
                bottom-border-1px(#e4e4e4)
                margin-top 45px
                height 200px
                background #fff
                .swiper-container
                    width 100%
                    height 100%
                    .swiper-wrapper
                        width 100%
                        height 100%
                        .swiper-slide
                            display flex
                            justify-content center
                            align-items flex-start
                            flex-wrap wrap
                            .link_to_food
                                width 25%
                                .food_container
                                    display block
                                    width 100%
                                    text-align center
                                    padding-bottom 10px
                                    font-size 0
                                img
                                    display inline-block
                                    width 50px
                                    height 50px
                                span
                                    display block
                                    width 100%
                                    text-align center
                                    font-size 13px
                                    color #666
                .swiper-pagination
                    >span.swiper-pagination-bullet-active
                        background #FFC125
            .msite_shop_list
                top-border-1px(#e4e4e4)
                margin-top 5px
                background #fff
                .shop_header
                    padding 10px 10px 0
                    .shop_icon
                        margin-left 5px
                        color #999
                    .shop_header_title
                        color #999
                        font-size 14px
                        line-height 20px
</style>