<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type : Boolean,
      default: false
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  methods: {
    scrollTo(x,y,time=400) {
      this.scroll.scrollTo(x,y,time)
    }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      
      this.scroll.on('scroll',(position) => {
        this.$emit('scrollShow',position)
      })         
  }
}
</script>
<style scoped>
</style>