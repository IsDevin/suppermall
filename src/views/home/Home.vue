<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners = "banners"></home-swiper>
    <recommends :recommends = "recommend"></recommends>
    <featur-view></featur-view>
    <tab-bar-control class="tabbar-control" :title="['流行','新款','精选']"></tab-bar-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabBarControl from 'components/content/tabbarcontrol/TabControl'

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
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    FeaturView,
    TabBarControl
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeGoodsData('pop'),
    this.getHomeGoodsData('new'),
    this.getHomeGoodsData('sell')
  },
  methods: {
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
.home-nav {
  background-color: var(--color-tint);
}
.tabbar-control {
  position: sticky;
  top: 44px;
}
</style>