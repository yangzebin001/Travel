<!--
 * @Date: 2020-02-14 17:08:12
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-20 21:01:15
 -->
<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe60d;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe65f;</span>
        输入城市/游玩/主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe623;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background-color $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height $inputHeight
      line-height $inputHeight
      margin-top .11rem
      margin-left .2rem
      padding-left .2rem
      background-color #fff
      border-radius .1rem
      color #ccc
    .header-right
      color #fff
      min-width 1.24rem
      float right
      text-align center
      padding 0 .1rem
      .arrow-icon
        font-size .24rem
        margin-left -.06rem
</style>
