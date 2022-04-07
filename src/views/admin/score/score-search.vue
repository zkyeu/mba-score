<!--
 * @Author: your name
 * @Date: 2022-03-19 00:34:51
 * @LastEditTime: 2022-03-27 18:13:21
 * @LastEditors: liliang
 * @Description: 
 * @FilePath: /mba-score/src/views/admin/score/score-search.vue
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
        <el-tab-pane label="学生学分总计">
          <ListCount />
        </el-tab-pane>
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
      <div class="export">
        <el-button @click="handleClick('export', '')">整体数据导出</el-button>
      </div>
    </div>

    <!-- 确认框 -->
    <el-dialog
      v-model="showLayer.export"
      :title="showLayer.title"
      width="360px"
      custom-class="delete-layer"
    >
      <div class="body">
        <el-form ref="ruleFormRef" :model="ruleForm" label-width="90px" size="default">
          <el-form-item label="学生类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="选择学生类型">
              <el-option label="全部" value="0" />
              <el-option label="MBA" value="mba" />
              <el-option label="EMBA" value="emba" />
              <el-option label="MEM" value="mem" />
              <el-option label="MPAcc" value="mpacc" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="数据年级" prop="grade" required>
            <el-select v-model="ruleForm.grade" placeholder="选择学生年级">
              <el-option label="不区分" value="0" />
              <el-option label="2022" value="2022" />
              <el-option label="2021" value="2021" />
              <el-option label="2020" value="2020" />
              <el-option label="2019" value="2019" />
              <el-option label="2018" value="2018" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="班级" prop="class" required>
            <el-select v-model="ruleForm.class" placeholder="选择班级">
              <el-option label="不区分" value="0" />
              <el-option label="21081" value="1" />
              <el-option label="21082" value="2" />
              <el-option label="21083" value="3" />
              <el-option label="21084" value="4" />
              <el-option label="21085" value="5" />
              <el-option label="21086" value="6" />
              <el-option label="20081" value="7" />
              <el-option label="20082" value="8" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="学生状态" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择学生状态">
              <el-option label="全部" value="yx" />
              <el-option label="正常" value="bd" />
              <el-option label="退学" value="b1d" />
              <el-option label="休学" value="24" />
              <el-option label="其他" value="234" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('no', '')">取消</el-button>
          <el-button type="primary" @click="handleClick('yes', '')">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import { ArrowRight, Plus, Promotion, Download, UploadFilled } from '@element-plus/icons-vue';
  import ListCount from './component/list-count.vue';
  import ListDetail from './component/list-detail.vue';
  import Overview from './component/overview.vue';
  import Process from './component/process.vue';
  import Count from './component/count.vue';

  const showLayer = reactive({
    export: false,
    title: ''
  });

  const tabClick = (v: any) => {
    // console.log(v);
  };
  const ruleForm = reactive({
    type: '',
    grade: '',
    class: '',
    status: ''
  });

  const handleClick = (v: any, o: any) => {
    switch (v) {
      case 'export':
        showLayer.export = true;
        showLayer.title = '活动学分数据导出';
        break;
      case 'yes':
        ElMessage.success('导出数据成功。');
        showLayer.export = false;
        break;
      case 'no':
        showLayer.export = false;
        ruleForm.type = '';
        ruleForm.grade = '';
        ruleForm.class = '';
        ruleForm.status = '';
        break;
    }
  };
</script>

<style lang="less" scoped>
  @import url('../../../assets/style/diy.less');
  .single-page {
    display: block;
    // background: @root-color-f5;

    .bread {
      background: @root-color-f5;
      padding: 11px;
    }

    .border-card {
      position: relative;
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

    .export {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
</style>
