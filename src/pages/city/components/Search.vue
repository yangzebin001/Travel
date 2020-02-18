<!--
 * @Date: 2020-02-18 18:33:38
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-18 18:45:13
 -->
<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height $inputHeight
      line-height $inputHeight
      padding 0 .1rem
      text-align center
      color #666
      border-radius .06rem
</style>
