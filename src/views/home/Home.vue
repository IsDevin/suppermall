<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommend: [],
      keywords: [],
      dKeywords: []
      
    }
  },
  components: {
    NavBar
  },
  created() {
    getHomeMultidata()
      .then(rel => {
        this.banners = rel.data.banner.list
        this.recommend = rel.data.recommend.list
        this.keywords = rel.data.keywords
        this.dKeywords = rel.data.dKeyword
      })
      .catch(err => {
        throw err
      })
  }
}
</script>

<style scoped>
/* @import url(); 引入css类 */
.home-nav {
  background-color: var(--color-tint);
}
</style>