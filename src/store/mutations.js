/*
 * @Date: 2020-02-20 20:45:00
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-20 20:45:38
 */
export default {
  // to change state
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
