<!--  -->
<template>
  <tab-bar>
       <tab-bar-item path = "/home" activeColor = "#FF5777">
          <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="首页">
          <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="首页">
          <div slot="item-text">首页</div>
       </tab-bar-item>
       <tab-bar-item path = "/category" activeColor = "#FF5777">
          <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="分类">
          <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="分类">
          <div slot="item-text">分类</div>
       </tab-bar-item>
       <tab-bar-item path = "/cart" activeColor = "#FF5777">
          <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="购物车">
          <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="购物车">
          <div slot="item-text">购物车</div>
       </tab-bar-item>
       <tab-bar-item path = "/profile" activeColor = "#FF5777">
          <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="我的">
          <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="我的">
          <div slot="item-text">我的</div>
       </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>