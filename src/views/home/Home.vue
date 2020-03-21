<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <tab-bar-control v-show="isOffsetTopShow" class="show-tab" ref="control1" :title="['流行','新款','精选']"
    @typeClick = "controlClick"></tab-bar-control>

    <scroll class="content" ref="scroll" :probeType = "3"
     :pullUpLoad = "true" @scrollShow = "scrollShow" @pullingUp = "upLoadMore">
       <home-swiper :banners = "banners" @imageLoad = "swiperImageLoad"></home-swiper>
      <recommends :recommends = "recommend"></recommends>
      <featur-view></featur-view>
      <tab-bar-control ref="control2" :title="['流行','新款','精选']"
        @typeClick = "controlClick"></tab-bar-control>
      <goods-list :goods = "this.goods[currentTyppe].list"></goods-list>
    </scroll>
    <!-- probeType是否实时监听  pullUpLoad 是否监听上拉加载 -->
    <backup-top @click.native = "backupClick" class="backup" v-show="isShow"></backup-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import BackupTop from 'components/content/backuptop/BackupTop'
import TabBarControl from 'components/content/tabbarcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'


import {
  getHomeMultidata,
  getHomeGoods
  } from 'network/home'
import {debounce} from 'common/utils'

import HomeSwiper from './childComps/HomeSwiper'
import Recommends from './childComps/HomeRecommends'
import FeaturView from './childComps/FeaturView'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop' : {page: 0,list: []},
        'new' : {page: 0,list: []},
        'sell' : {page: 0,list: []}
      },
      currentTyppe: 'pop',
      isShow: false,
      tabOffsetTop: 0,
      isOffsetTopShow: false,
      saveY : 0
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    FeaturView,
    TabBarControl,
    GoodsList,
    Scroll,
    BackupTop
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeGoodsData('pop'),
    this.getHomeGoodsData('new'),
    this.getHomeGoodsData('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,300)
    //监听图片加载完成
    //在事件总线接收发射的事件
    this.$bus.$on('itemImageLoad',() => {
      //图片加载完成后刷新scroll，解决scrollHeight计算不到图片加载问题
      //原本会执行图片有几张就会执行几次，这样会大大的降低性能，使用抖动函数就可以减少执行次数
      refresh()
    })
  },
  //活动状态
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  //离开状态
  deactivated() {
    if(this.$refs.scroll.scroll.y != 0){
      this.saveY = this.$refs.scroll.scroll.y
    }
  },
  methods: {
    /**
     * 事件方法
     */
    controlClick (index) {
      switch (index) {
        case 0:
          this.currentTyppe = 'pop'
          break;
        case 1:
          this.currentTyppe = 'new'
          break;
        case 2:
          this.currentTyppe = 'sell'
          break;
      }
      this.$refs.control1.currentIndex = index
      this.$refs.control2.currentIndex = index
    },
    upLoadMore () {
      this.getHomeGoodsData (this.currentTyppe)
    },
    scrollShow (position) {
      //show backtop or not
      this.isShow = -position.y > 1000
      //tabcontrol是非吸顶
      this.isOffsetTopShow = -position.y >= this.tabOffsetTop-45
    },
    backupClick () {
      //使用ref得到组件，然后调用组件中的 scrollTo方法
      this.$refs.scroll.scrollTo(0,0)
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata () {
      getHomeMultidata ()
      .then(rel => {
        this.banners = rel.data.banner.list
        this.recommend = rel.data.recommend.list
      })
      .catch(err => {
        throw err
      })
    },
    getHomeGoodsData (type) {
      const page = this.goods[type].page+1
      getHomeGoods (type,page)
      .then(rel => {
        this.goods[type].list.push(...rel.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishUpLoad()
      })
      .catch(err => console.log(err))
    },
    swiperImageLoad () {
      //拿到tabcontrol的offsetTop
      this.tabOffsetTop = this.$refs.control2.$el.offsetTop
    }
  }
}
</script>

<style scoped>
/* @import url(); 引入css类 */
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav {
  position: relative;
    z-index: 1000;
  background-color: var(--color-tint);
}
.content {
    position: absolute;
    /* width: 100%; */
    /* height: 100%; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
}
.show-tab {
  position: relative;
  margin-bottom: 44px;
  z-index: 1000;
}
.backup {
  position: absolute;
  bottom: 50px;
  right: 5px;
}
</style>