<!--  -->
<template>
  <div class="goods-item-warp">
    <img :src="goodsItem.show.img" alt="">
    <div>
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span>⭐{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
  
    }
  },
  props: {  
    goodsItem: {
      type: Object,
      default() {
      return {}
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

.goods-item-warp{
  width: 50%;
  font-size: 12px;
  text-align: center;
  padding: 5px;
}
.title {
  /* 设置为 块元素*/
  display:block;      
  /* white-space 属性设置如何处理元素内的空白, nowrap 规定不换行，且忽略其中的空白符*/
  white-space:nowrap; 
  overflow:hidden; 
  text-overflow:ellipsis;
  /* 以上三个属性 缺一不可*/
  margin-bottom: 5px;
}
.goods-item-warp img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 5px;
}
.price {
  margin-right: 5px;
}
</style>