<!--
 * @Date: 2020-02-21 20:01:10
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-23 20:23:48
 -->
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-list></detail-list>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailList
  }
}
</script>
<style lang="stylus" scoped>

</style>
