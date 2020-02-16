<!--
 * @Date: 2020-02-16 21:42:53
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-16 21:42:57
 -->
<template>
  <div>
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom"
        v-for="it in recommendList"
        :key="it.id"
      >
        <img class="item-img" :src="it.imgUrl">
        <div class="item-info">
          <p class="item-title">{{it.title}}</p>
          <p class="item-desc">{{it.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_200x200_6cd905a1.jpg',
        title: '京城欢京撒欢末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p48/201211/09/b42748a870a4931a93835fbb.jpg_200x200_4c2fed17.jpg',
        title: '水上世界',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_200x200_6cd905a1.jpg',
        title: '京城欢京撒欢末撒欢末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p48/201211/09/b42748a870a4931a93835fbb.jpg_200x200_4c2fed17.jpg',
        title: '水上世界',
        desc: '在帝都过周末，不仅仅是城中游！'
      }]
    }
  }
}
</script>

<style lang="stylus" scope>
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
