<!--
 * @Date: 2020-02-15 16:47:57
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-15 16:47:57
 -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for='item in list'
        :key="item.id"
        class="swiper-item"
      ><img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 26.5%
    background-color #eee
    .swiper-img
      width 100%
</style>
