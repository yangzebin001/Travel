/*
 * @Date: 2020-02-20 20:41:49
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-20 20:43:34
 */
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
