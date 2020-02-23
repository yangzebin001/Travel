<!--
 * @Date: 2020-02-14 16:29:00
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-02-23 21:07:59
 -->
<template>
  <div id="app">
    <!-- 将加载过的内容放入内存 -->
    <keep-alive exclude="Detail">
      <!-- 显示当前路由地址所对应的内容/ -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
