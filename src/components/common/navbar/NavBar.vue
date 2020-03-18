<!--  -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 16px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
}

.left,.right {
  width: 60px;
}

.center {
  flex: 1;

}
</style>