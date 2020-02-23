<!--
 * @Date: 2020-02-21 20:01:10
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-23 19:24:59
 -->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 100rem
</style>
