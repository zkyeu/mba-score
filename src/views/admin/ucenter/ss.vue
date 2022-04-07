<!--
 * @Author: liliang
 * @Date: 2022-03-26 19:28:18
 * @LastEditors: liliang
 * @LastEditTime: 2022-04-06 10:30:17
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
      <h1
        ><el-icon><trophy /></el-icon>学分概览</h1
      >
      <div class="item-list">
        <li><label>专业：</label>MBA</li>
        <li><label>学号：</label>ZF2108100</li>
        <li><label>姓名：</label>我名字</li>
        <li><label>已获学分：</label>19.7</li>
        <li><label>还需学分：</label><span>11.3</span></li>
      </div>
    </div>

    <h1
      ><el-icon><notebook /></el-icon>参加的活动列表<span>(表格可横向滑动查看)</span></h1
    >
    <div class="table">
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
        // console.log(res);
      })
      .catch((err: any) => {
        // console.log(err);
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
        padding: 16px;
        li {
          width: 18%;
          min-width: 200px;
          font-weight: 700;
          label {
            color: #777;
            font-weight: 400;
          }
          span {
            color: #f00;
          }
        }
      }
    }

    h1 {
      display: flex;
      align-items: center;
      background: #eee;
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
      padding: 0 14px;
      i {
        margin-right: 6px;
        color: #028bff;
      }
      span {
        color: #999;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
</style>
