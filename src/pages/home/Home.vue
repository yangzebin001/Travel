<!--
 * @Date: 2020-02-14 17:08:12
 * @LastEditors: BeckoninGshy
 * @LastEditTime : 2020-02-14 17:48:15
 -->
<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
