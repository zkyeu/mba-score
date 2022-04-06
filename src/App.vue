<!--
 * @Author: liliang
 * @Date: 2022-03-24 09:50:07
 * @LastEditors: liliang
 * @LastEditTime: 2022-04-06 12:04:25
 * @FilePath: /score/src/App.vue
 * @Description: 
-->
<template>
  <router-view></router-view>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue';
  import router from './router';
  import Util from './utils/util';
  const setLS = (v: Boolean) => {
    if (!v) {
      router.push('/log');
    } else {
      router.push('/');
    }
  };

  onMounted(() => {
    // setLS(Boolean(Util.checkLogin()));
  });
</script>
<style lang="less">
  @import url('./assets/style/init.less');
  @common-style: {
    background: #fff;
    border-radius: 2px;
  };
  .btn {
    padding: 16px 16px 0;
    @common-style();
  }
  .table {
    padding: 16px;
    @common-style();
  }

  .page {
    padding: 0 16px;
    @common-style();
  }
</style>
