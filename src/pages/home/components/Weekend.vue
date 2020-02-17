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
        v-for="it in weekendList"
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
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1711/14/2d6405bd0868eb.jpg_r_640x214_ce59870f.jpg',
        title: '京城欢京撒欢末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/82/5ef380ec1fcbf0.jpg_r_640x214_aee99250.jpg',
        title: '水上世界',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1711/14/2d6405bd0868eb.jpg_r_640x214_ce59870f.jpg',
        title: '京城欢京撒欢末撒欢末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/82/5ef380ec1fcbf0.jpg_r_640x214_aee99250.jpg',
        title: '水上世界',
        desc: '在帝都过周末，不仅仅是城中游！'
      }]
    }
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
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 36.09%
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
