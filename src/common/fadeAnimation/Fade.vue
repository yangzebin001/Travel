<!--
 * @Date: 2020-02-23 21:22:53
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-23 21:25:17
 -->
<template>
  <transition>
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'FadeAnimation'
}
</script>
<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity 0
  .v-enter-active, .v-leave-active
    transition opacity .5s
</style>
