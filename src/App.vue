<!--
 * @Date: 2020-02-14 16:29:00
 * @LastEditors  : BeckoninGshy
 * @LastEditTime : 2020-02-14 17:16:11
 -->
<template>
  <div id="app">
    <!-- 显示当前路由地址所对应的内容/ -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
