<!--
 * @Author: your name
 * @Date: 2021-08-18 08:38:23
 * @LastEditTime: 2022-03-16 21:49:01
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /score/src/views/admin/activity/activity-classify.vue
-->
<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">活动分类管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="btn">
      <table-option :optionData="options.data" @optionChange="optionChange" />
      <el-button type="primary" :icon="Plus" @click="dialogVisible = true">创建分类</el-button>
    </div>
    <div class="table">
      <table-list :tableData="tableData.data" @operate="handleOperate" />
    </div>
    <div class="page">
      <pages :total="100" @currentPage="currentPage" />
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
      draggable
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

//
<script lang="ts" setup>
  import { ref, defineComponent, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus } from '@element-plus/icons-vue';
  import TableOption from '../../../components/library/table-options.vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import { ElMessageBox } from 'element-plus';
  import mockData from './mock';

  const optionParams = reactive({ obj: {} });
  const options = reactive({
    data: mockData.option,
  });
  const tableData = reactive({
    data: mockData.table,
  });
  const dialogVisible = ref(false);

  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done();
      })
      .catch(() => {
        // catch error
      });
  };
</script>

<style lang="less" scoped>
  @import url('../../../assets/style/init.less');
  .single-page {
    display: block;
    // background: @root-color-f5;

    .bread {
      background: @root-color-f5;
      padding: 11px;
    }

    .btn {
      display: flex;
      justify-content: space-between;
      margin: 15px 0;
      :deep(.el-button) {
        padding: 1px 8px;
      }
    }

    .table {
    }
  }
</style>
