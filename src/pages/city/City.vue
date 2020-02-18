<!--
 * @Date: 2020-02-18 18:02:57
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-18 18:38:47
 -->
<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
