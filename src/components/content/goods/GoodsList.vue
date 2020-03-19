<!--  -->
<template>
  <div class="goods-list">
    <goods-item v-for="(item,index) in goods" :goodsItem = "item" :key="index"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  data () {
    return {
  
    }
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  },
  components: {
    GoodsItem
  }
}
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>