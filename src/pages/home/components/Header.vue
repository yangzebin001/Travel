<!--
 * @Date: 2020-02-14 17:08:12
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-18 18:13:38
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
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe623;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background-color: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .11rem
      margin-left: .2rem
      padding-left: .2rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem
        margin-left -.06rem
</style>
