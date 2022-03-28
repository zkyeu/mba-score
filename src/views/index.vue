<!--
 * @Author: your name
 * @Date: 2021-08-12 11:33:22
 * @LastEditTime: 2022-03-27 21:45:22
 * @LastEditors: liliang
 * @Description: 前台首页
 * @FilePath: /score/src/views/index.vue
-->

<template>
  <div class="web-head">
    <Header />
  </div>
  <div class="web-content">
    <div class="left-con">
      <LeftNav />
    </div>
    <div class="right-con">
      <router-view class="main-content-right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Header from '@/components/admin/header.vue';
  import LeftNav from '@/components/admin/left-nav.vue';
</script>

<style lang="less" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  :deep(.el-table) th.gutter {
    display: table-cell !important;
  }

  .web-head {
    display: flex;
    justify-content: space-between;
    height: 72px;
  }

  .web-content {
    display: flex;
    height: calc(100vh - 72px);

    .left-con {
      width: 200px;
      min-width: 200px;
      background: #fff;
      height: calc(100vh - 72px);
      overflow-y: auto;
    }

    .right-con {
      height: calc(100vh - 72px - 16px);
      flex: auto;
      box-sizing: border-box;
      overflow-y: auto;
      word-break: break-all;
      margin: 16px 16px 0;
    }
  }
</style>
