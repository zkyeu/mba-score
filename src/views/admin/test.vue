<!--
 * @Author: liliang
 * @Date: 2022-03-25 17:21:07
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-25 17:22:29
 * @FilePath: /score/src/views/admin/test.vue
 * @Description: 
-->
<template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const show = ref(true);
</script>

<style lang="less">
  .transition-box {
    background: #ddd;
    padding: 100px;
  }
</style>
