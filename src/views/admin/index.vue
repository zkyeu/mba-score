<!--
 * @Author: your name
 * @Date: 2021-08-02 20:10:05
 * @LastEditTime: 2022-03-25 17:17:27
 * @LastEditors: liliang
 * @Description: 后台首页
 * @FilePath: /score/src/views/admin/index.vue
-->
<template>
  <section class="main-content">
    <Headers />
    <div class="content-layer">
      <LeftNav />
      <router-view class="main-content-right" />
    </div>
  </section>
</template>

<script lang="ts">
  import LeftNav from '@/components/admin/left-nav.vue';
  import Headers from '@/components/admin/header.vue';
  export default {
    components: { Headers, LeftNav }
  };
</script>

<style lang="less" scoped>
  .main-content {
    background: #fff;

    .content-layer {
      display: flex;
      flex-direction: row;

      .main-content-right {
        background: #f00;
        flex: 1;
        min-width: 600px;
        height: calc(100vh - 72px - (16 * 6) px);
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 3px;
        }
        &::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 2px;
        }
      }
    }
  }
</style>
