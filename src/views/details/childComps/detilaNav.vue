<!--  -->
<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" @click="back"><img class="nav-image" src="~assets/images/common/back.svg" alt=""></div>
      <div slot="center" class="center">
        <div v-for="(item,index) in titles" :key="index" :class="{active : currentIndex == index}" @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data () {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex : 0
    }
  },
  components: {
    NavBar
  },
  //生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    itemClick (index) {
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.nav-bar {
  color: rgb(102, 98, 98);
  font-size: 13px;
}
.nav-image {
  width: 18px;
  height: 18px;
  margin-top: 15px;
}
.center {
  display: flex;
}
.center div {
  flex: 1;
}
.active{
  color: var(--color-high-text)
}
</style>