<!--  -->
<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" :key="index" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper,SwiperItem } from 'components/common/swiper/index'
export default {
  data () {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad () {
      if(!this.isLoad) {
        this.$emit('imageLoad')
        this.isLoad = true
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>