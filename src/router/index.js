/*
 * @Date: 2020-02-14 16:29:00
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-18 18:02:29
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
