<!--
 * @Date: 2020-02-21 20:01:10
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-23 20:43:51
 -->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailList from './components/List'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailList,
    DetailHeader
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票-1'
          }, {
            title: '成人三馆联票-2'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 100rem
</style>
