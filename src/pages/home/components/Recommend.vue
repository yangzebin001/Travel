<!--
 * @Date: 2020-02-16 21:42:53
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-21 19:59:59
 -->
<template>
  <div>
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="it in list"
        :key="it.id"
        tag="li"
        :to="'/detail/' + it.id"
      >
        <img class="item-img" :src="it.imgUrl">
        <div class="item-info">
          <p class="item-title">{{it.title}}</p>
          <p class="item-desc">{{it.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
    margin-top: .2rem
    line-height: .8rem
    background: #eeeeee
    text-indent: .2rem
  .item
    overflow hidden
    height 1.9rem
    display flex
    .item-img
      border-radius .24rem
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        height .54rem
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .4rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
