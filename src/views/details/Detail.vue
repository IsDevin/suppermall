<!--  -->
<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <div>{{$route.query.iid}}</div>
  </div>
</template>

<script>
import DetailNavBar from './childComps/detilaNav'

import {getDetailInfo} from 'network/detail'
export default {
  name: 'Detail',
  data () {
    return {
      
    }
  },
  components: {
    DetailNavBar
  },
  //生命周期 - 创建完成（访问当前this实例）
  created () {
    //获取详情数据
    let id = this.$route.query.iid
    console.log(id);
    getDetailInfo(id)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      throw err
      
    })
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.img {
  margin-top: 10px;
}
</style>