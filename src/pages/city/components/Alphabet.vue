<!--
 * @Date: 2020-02-18 18:02:57
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-19 19:57:57
 -->
<template>
  <ul class="list">
    <li class="item"
      v-for="(city,key) in cities"
      :key="key"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position absolute
    right 0
    top 1.58rem
    bottom 0rem
    width .4rem
    display flex
    flex-direction column
    justify-content center
    color $bgColor
    .item
      text-align center
      height .4rem
      line-height .4rem
</style>
