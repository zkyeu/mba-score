<!--
 * @Author: liliang
 * @Date: 2022-03-26 19:28:18
 * @LastEditors: liliang
 * @LastEditTime: 2022-04-02 19:12:40
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

    <div class="over-view">
      <h1>学分概览</h1>
      <div class="item-list">
        <li>专业：MBA</li>
        <li>学号：ZF2108100</li>
        <li>姓名:我名字</li>
        <li>总学分：19.7</li>
        <li>还需学分：11.3</li>
      </div>
    </div>

    <div class="table">
      <h1>参加的活动列表</h1>
      <table-list :tableData="pageData" :canSelect="false" />
    </div>

    <div class="page">
      <pages :total="100" @currentPage="currentPage" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onBeforeMount, reactive } from 'vue';
  import { ArrowRight, Plus, Promotion } from '@element-plus/icons-vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import mockData from '../mockData/ss.json';
  import $http from '../../../api';

  const pageData = ref({});

  const pageParams = ref({
    pn: 1,
    rn: 10
  });

  // 页码变化
  const currentPage = (v: any) => {
    pageParams.value = Object.assign(pageParams.value, v);
    getPageData();
  };

  const getPageData = () => {
    $http
      .getactivitydiy({
        data: pageParams.value
      })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        pageData.value = mockData;
      });
  };

  onBeforeMount(() => {
    getPageData();
  });
</script>

<style lang="less" scoped>
  @import url('../../../assets/style/diy.less');

  .single-page {
    .over-view {
      background: #fff;
      margin-bottom: 16px;

      .item-list {
        display: flex;
        li {
          width: 20%;
          min-width: 200px;
        }
      }
    }

    h1 {
      background: #eee;
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
    }
  }
</style>
