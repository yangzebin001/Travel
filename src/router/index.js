/*
 * @Date: 2020-02-14 16:29:00
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-23 21:14:06
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

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
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 添加滚动行为，每次进入页面都在顶部
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
