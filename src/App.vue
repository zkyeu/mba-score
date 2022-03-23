<!--
 * @Author: your name
 * @Date: 2021-07-28 15:51:41
 * @LastEditTime: 2022-03-23 19:02:57
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /score/src/App.vue
-->
<template>
  <!-- <img src="./assets/logo.png" /> -->
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App'
  });
</script>

<style lang="less">
  @import url('../src/assets/style/init.less');
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  :deep(.el-table) th.gutter {
    display: table-cell !important;
  }
</style>
