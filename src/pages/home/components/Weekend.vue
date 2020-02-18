<!--
 * @Date: 2020-02-17 21:01:08
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-17 21:01:08
 -->
<template>
  <div>
    <div class="recommend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom"
        v-for="it in list"
        :key="it.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="it.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{it.title}}</p>
          <p class="item-desc">{{it.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return { }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    line-height: .8rem
    background: #eeeeee
    text-indent: .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    padding .1rem
    text-indent .1rem
    .item-title
      height .54rem
      line-height .54rem
      font-size .3rem
    .item-desc
      line-height .4rem
      font-size .26rem
      color #ccc
      ellipsis()
</style>
