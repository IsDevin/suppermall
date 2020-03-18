<!--  -->
<template>
  <div class="re-warper">
    <div class="re-item" v-for="(item,index) in recommends" :key="index">
      <a class="re-link"  :href="item.link">
        <img :src="item.image" :alt="item.tital">
        <div class="text">{{item.title}}</div>
      </a>
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
    //获取数据
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.re-warper {
  position: relative;
  display: flex;
  font-size: 12px;
}
.re-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  border-bottom: 10px solid rgba(204,204,204, .3);
}
.text {
  margin: 3px 0 15px 0;
}
.re-link {
  text-align: center;
}
.re-item img {
  width: 70px;
  height: 70px;
  margin: 10px 0;
}
</style>