<!--
 * @Author: your name
 * @Date: 2021-08-12 11:33:22
 * @LastEditTime: 2022-03-24 19:29:38
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
  import Header from '@/components/front/header.vue';
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
    height: 50px;
    // background: #eee;
  }

  .web-content {
    display: flex;

    .left-con {
      width: 200px;
      min-width: 200px;
      background: #fff;
      height: calc(100vh - 50px);
      border-right: #ddd solid 1px;
    }

    .right-con {
      height: calc(100vh - 50px);
      flex: auto;
      box-sizing: border-box;
      background: #fff;
      overflow-y: auto;
      word-break: break-all;
      padding: 10px;
    }
  }
</style>
