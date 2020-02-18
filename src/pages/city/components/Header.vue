<!--
 * @Date: 2020-02-18 18:02:57
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-18 18:28:03
 -->
<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe60d;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-back
      position absolute
      top 0
      left 0
      color #fff
      width .64rem
      text-align center
      font-size .4rem
</style>
