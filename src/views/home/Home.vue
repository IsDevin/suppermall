<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <scroll class="content" ref="scroll" :probeType = "3" :pullUpLoad = "true" @scrollShow = "scrollShow">
       <home-swiper :banners = "banners"></home-swiper>
      <recommends :recommends = "recommend"></recommends>
      <featur-view></featur-view>
      <tab-bar-control class="tabbar-control" :title="['流行','新款','精选']"
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
      isShow: false
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
    },
    scrollShow (position) {
      this.isShow = -position.y > 1000
      // if(-position.y > 1000)
      //   this.isShow = true
      // else
      //   this.isShow = false
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
        
      })
      .catch(err => console.log(err))
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
  background-color: var(--color-tint);
}
.content {
  height: 100%;
  overflow: hidden;
}
.backup {
  position: absolute;
  bottom: 50px;
  right: 5px;
}
</style>