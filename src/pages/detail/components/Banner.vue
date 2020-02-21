<!--
 * @Date: 2020-02-21 20:05:10
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-21 21:50:17
 -->
<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1702/db/db96bae1c06f0287a3.water.jpg_600x330_6c9b6ccb.jpg" alt=""
      @click="handleClickGallary"
    >
    <div class="banner-info">
      <div class="banner-title">三晋奇石博物馆</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe662;</span>39</div>
    </div>
    <common-gallary
    :imgs="imgs"
    v-show="showGallary"
    @close="handleClickGallary"
    ></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1909/ab/ab688e418cb65f05a3.water.jpg_r_800x800_0413a836.jpg',
        'http://img1.qunarzz.com/sight/p0/1909/1c/1c919a0afaecc3aa3.water.jpg_r_800x800_e38647df.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleClickGallary () {
      console.log(this.showGallary)
      this.showGallary = !this.showGallary
    }
  },
  components: {
    CommonGallary
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        padding 0 .2rem
        font-size .32rem
      .banner-number
        padding 0 .2rem
        line-height .32rem
        margin .14rem
        height .32rem
        border-radius .2rem
        font-size .24rem
        background rgba(0,0,0,.8)
        .banner-icon
          font-size .24rem
</style>
