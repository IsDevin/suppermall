<!--  -->
<template>
  <div class="tabbar-contorl">
    <div v-for="(item,index) in title" :key="index" class="contorl-item"
    :class="{active : currentIndex === index}" @click="controlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      tyep: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    controlClick(index) {
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.tabbar-contorl {
  display: flex;
  text-align: center;
  padding: 10px 0;
  background-color: #fff;
}
.contorl-item {
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 1px solid var(--color-tint);
}
</style>