<!--
 * @Date: 2020-02-18 18:02:57
 * @LastEditors: BeckoninGshy
<<<<<<< HEAD
 * @LastEditTime: 2020-02-20 18:50:26
=======
 * @LastEditTime: 2020-02-20 18:24:22
>>>>>>> search-logic
 -->
<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <!-- 将letter随时传给list组件 -->
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
      ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleAlphabetChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    // 为alphabet到list组件传递letter做一个桥梁
    handleAlphabetChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
