<!--
 * @Author: your name
 * @Date: 2021-08-03 17:32:56
 * @LastEditTime: 2022-03-12 21:58:11
 * @LastEditors: Please set LastEditors
 * @Description: 前台默认页面
 * @FilePath: /vvt/src/views/frontend/default.vue
-->
<template>
  <section class="content">
    <div class="content-left"> 1 </div>
    <div class="content-right"> 2 </div>
  </section>
</template>

<script lang="ts" setup>
  // 组件引用部分========
  import { ref, defineComponent, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { key } from '../../store';
  import { useGlobalConfig } from '../../utils/util';
  // 代码逻辑开始========
  const store = useStore(key);
  const msg = computed(() => store.state.count);
  const { $http, $confirm, $message } = useGlobalConfig();

  onMounted(() => {
    console.log('123');
  });
</script>

<style lang="less" scoped>
  .content {
    display: flex;
    // justify-content: space-between;

    .content-left {
      min-width: 330px;
      margin-right: 30px;
      // background: #f5f5f5;
      // word-break: break-all;
      flex: 1;
      font-size: 14px;
      line-height: 26px;
    }

    .content-right {
      width: 300px;
      background: #fff;
    }
  }
</style>
