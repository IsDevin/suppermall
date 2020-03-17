<!--  -->
<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick () {
        if(this.$route.path !== this.path){
          this.$router.replace(this.path); 
        }
    }
  },
  computed: {
    isActive () {
      return this.$route.path.includes(this.path)
    },
    activeStyle () {
      return this.isActive ? {color : this.activeColor} : {}
    }
  }
}

</script>
<style scoped>
/* @import url(); 引入css类 */
.tabbar-item{
  flex: 1;
  text-align: center;
  font-size: 13px;
}

.tabbar-item img{
  width: 24px;
  height: 24px;
  vertical-align:top;
  margin: 3px 0 2px 0;
}

</style>