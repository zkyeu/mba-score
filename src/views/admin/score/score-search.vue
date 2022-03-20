<!--
 * @Author: your name
 * @Date: 2022-03-19 00:34:51
 * @LastEditTime: 2022-03-20 18:25:10
 * @LastEditors: liliang
 * @Description: 
 * @FilePath: /score/src/views/admin/score/score-search.vue
-->

<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">活动学分查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="border-card">
      <el-tabs type="border-card" @tab-click="tabClick">
        <el-tab-pane label="学分列表">
          <ListDetail />
        </el-tab-pane>
        <el-tab-pane label="学分统计">
          <Overview />
        </el-tab-pane>
        <el-tab-pane label="学分进度">
          <Process />
        </el-tab-pane>
        <el-tab-pane label="学分活动次数">
          <Count />
        </el-tab-pane>
        <el-tab-pane label="异常学分">Task</el-tab-pane>
      </el-tabs>
    </div>

    <!-- 确认框 -->
    <el-dialog
      v-model="showLayer.delete"
      :title="showLayer.title"
      width="360px"
      custom-class="delete-layer"
    >
      <div class="body"
        ><el-icon><promotion /></el-icon>
        <p>确定要删除【{{ ruleForm.data.name }}】的信息吗？</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('hidden', 'delete')">取消</el-button>
          <el-button type="primary" @click="handleClick('delete', '')">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import { ArrowRight, Plus, Promotion, Download, UploadFilled } from '@element-plus/icons-vue';
  import ListDetail from './component/list.vue';
  import Overview from './component/overview.vue';
  import Process from './component/process.vue';
  import Count from './component/count.vue';

  const showLayer = reactive({
    delete: false,
    title: ''
  });

  const tabClick = (v: any) => {
    console.log(v);
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

    .border-card {
      margin-top: 20px;
      :deep(.el-tabs) {
        &.el-tabs--border-card {
          border: none !important;
          box-shadow: none !important;
        }
        .el-tabs__nav-scroll {
          border-top: solid 1px #eee;
        }
      }
    }
  }
</style>
