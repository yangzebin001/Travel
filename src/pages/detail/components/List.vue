<!--
 * @Date: 2020-02-23 20:19:27
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-23 20:41:40
 -->
<template>
  <div>
    <div class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding-left .3rem
  .item-children
    padding 0 .2rem
</style>
