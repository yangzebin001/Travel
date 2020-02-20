/*
 * @Date: 2020-02-20 18:57:27
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-20 21:01:33
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
