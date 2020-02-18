<!--
 * @Date: 2020-02-15 21:38:16
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-15 21:38:17
 -->
<template>
  <div class="content">
    <swiper>
      <swiper-slide
        v-for="(page,index) in pages"
        :key="index"
      >
        <div class="icons">
          <div class="icon"
            v-for="item in page"
            :key="item.id"
          >
            <div class="icon-content">
              <img class="icon-img" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return { }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .content
    margin-top .1rem
    .icons
      overflow hidden
      height 0
      padding-bottom 50%
      .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-content
          position absolute
          left 0
          top 0
          right 0
          bottom .44rem
          box-sizing border-box
          padding .1rem
          width 100%
          .icon-img
            display block
            margin 0 auto
            height 100%
        .icon-desc
          position absolute
          left 0
          bottom 0
          right 0
          height .44rem
          line-height .44rem
          color $darkTextColor
          text-align center
          ellipsis()
</style>
