<!--
 * @Date: 2020-02-21 20:01:10
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-23 20:44:42
 -->
<template>
  <div>
    <router-link
    tag="div"
    to="/"
    class="header-abs"
    v-show="showAbs"
    >
      <div class="iconfont back-icon">&#xe60d;</div>
    </router-link>
    <div class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
    >
      <router-link to="/">
      <div class="iconfont header-fixed-back">&#xe60d;</div>
    </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opactity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 20) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      console.log()
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 解绑全局事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius 50%
    background #222
    opacity 0.8
    line-height .8rem
    text-align center
    .back-icon
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      color #fff
      width .64rem
      text-align center
      font-size .4rem
</style>
