<!--
 * @Author: liliang
 * @Date: 2022-03-26 18:41:46
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-26 19:29:16
 * @FilePath: /score/src/views/admin/ucenter/ss.vue
 * @Description: 
-->

<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">学分查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>学分查询</div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus } from '@element-plus/icons-vue';

  const handleClick = (v: any) => {
    switch (v) {
      case 'add':
        console.log(0);

        break;

      default:
    }
  };

  onMounted(() => {
    // console.log(myRef.value);
  });
</script>

<style lang="less" scoped>
  @import url('../../../assets/style/diy.less');
  .single-page {
    display: block;
  }
</style>
