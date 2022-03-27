<!--
 * @Author: your name
 * @Date: 2022-03-19 00:34:51
 * @LastEditTime: 2022-03-27 21:26:29
 * @LastEditors: liliang
 * @Description: 
 * @FilePath: /score/src/views/admin/score/component/list-count.vue
-->

<template>
  <section class="single-page">
    <div class="btn">
      <table-option :optionData="options.data" @optionChange="optionChange" />
      <el-button type="primary" :icon="Plus" @click="handleClick('export')">导出查询</el-button>
    </div>
    <div class="table">
      <table-list :tableData="tableData.data" :canSelect="false" @operate="handleOperate" />
    </div>
    <div class="page">
      <pages :total="total" @currentPage="currentPage" />
    </div>

    <!-- 查看 -->
    <el-dialog
      v-model="showLayer"
      title="活动学分详情"
      width="900px"
      custom-class="edit-info-layer"
    >
      <div>
        <table-list :tableData="tableData.detail" :canSelect="false" />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('notview')">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onBeforeMount, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus, Promotion, Download, UploadFilled } from '@element-plus/icons-vue';
  import TableOption from '../../../../components/library/table-options.vue';
  import TableList from '../../../../components/library/table-list.vue';
  import Pages from '../../../../components/library/pagination.vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import mockData from '../../mockData/listCount.json';
  import $http from '../../../../api';

  const showLayer = ref(false);
  const pageData = ref({});
  const optionParams = ref({
    pn: 1,
    rn: 10
  });

  const options = reactive({
    data: mockData.option
  });
  const tableData = reactive({
    data: mockData.table,
    detail: mockData.detail
  });
  const total = ref(mockData.table.tablelist.length);

  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('没有保存信息，确定关闭吗?')
      .then(() => {
        done();
      })
      .catch(() => {
        // catch error
      });
  };

  const handleClick = (v: any) => {
    switch (v) {
      case 'export':
        ElMessage.success('导出成功');
        break;
      case 'notview':
        showLayer.value = false;
        break;
      default:
    }
  };

  // 筛选
  const optionChange = (v: any) => {
    optionParams.value = Object.assign(optionParams.value, v);
    getPageData();
  };

  // 操作
  const handleOperate = (v: any) => {
    let key = v.operate;
    switch (key) {
      case 'view':
        showLayer.value = true;
        break;
      default:
        console.log(key);
    }
  };

  // 页码变化
  const currentPage = (v: any) => {
    optionParams.value = Object.assign(optionParams.value, v);
    getPageData();
  };

  const getPageData = () => {
    $http
      .getlistcount({
        data: optionParams.value
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
  @import url('../../../../assets/style/init.less');
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

    .btn {
      display: flex;
      justify-content: space-between;
      margin: 15px 0;
      :deep(.el-button) {
        padding: 1px 8px;
      }
    }

    :deep(.create-layer) {
      .el-dialog__body {
        padding: 0 20px;
      }
      .el-dialog__head {
        background: @root-color-f5;
        margin: 0;
      }
      .item-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
          display: flex;
          width: 200px;
          line-height: 38px;

          label {
            width: 90px;
            text-align: right;
            padding-right: 5px;
            font-size: 16px;
          }
          div {
            color: #000;
            font-size: 16px;
          }
        }
      }
    }
    :deep(.delete-layer) {
      .body {
        display: flex;
        align-items: center;
        svg {
          width: 30px !important;
          height: 30px !important;
          color: @root-color-b;
        }
        p {
          padding-left: 10px;
          font-size: 16px;
        }
      }
    }

    :deep(.import-info) {
      .import-layer {
        display: flex;
        .left {
          width: 400px;
        }
        .right {
          width: 400px;
          border-left: #ddd dotted 1px;
          margin-left: 20px;
          padding-left: 20px;
        }
        .step {
          .title {
            font-weight: 700px !important;
            margin: 10px 0;
            color: #333;
          }
          .down-file {
            display: flex;
            justify-content: center;
            padding: 20px;
          }

          .upload-student-info {
            display: flex;
            justify-content: center;
            padding-bottom: 10px;
            svg {
              width: 99px !important;
              height: 99px !important;
            }
          }

          .basic-info {
            padding-top: 20px;
          }
        }
      }
      .import-foot {
        display: flex;
        justify-content: flex-end;
        padding: 16px;
      }
      .el-dialog__body {
        padding: 0 40px;
      }
    }

    :deep(.edit-info-layer) {
      .item-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
          display: flex;
          width: 200px;
          line-height: 38px;

          label {
            width: 90px;
            text-align: right;
            padding-right: 5px;
            font-size: 16px;
          }
          div {
            color: #000;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
