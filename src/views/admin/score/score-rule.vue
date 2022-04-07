<!--
 * @Author: liliang | zkyeu@163.com
 * @Date: 2022-03-21 20:17:29
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-27 21:28:49
 * @FilePath: /score/src/views/admin/score/score-rule.vue
-->

<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">活动学分录入审核</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="btn">
      <table-option :optionData="options.data" @optionChange="optionChangeFn" />
    </div>

    <div class="table">
      <table-list
        ref="multipleTableRef"
        :tableData="tableData.data"
        @operate="handleOperate"
        rowKey="id"
        :expand="true"
      />
    </div>
    <div class="page" v-if="total > 10">
      <pages :total="total" @currentPage="currentPage" />
    </div>

    <!-- 编辑 -->
    <el-dialog
      v-model="showLayer.edit"
      :title="showLayer.title"
      width="350px"
      draggable
      custom-class="edit-info-layer"
    >
      <div class="dialog-body">
        <el-form ref="ruleFormRef" :model="ruleForm" label-width="90px" size="default">
          <el-form-item label="分类名称：" prop="colortitle" style="width: 278px">
            <div>{{ viewObj.colortitle }}</div>
          </el-form-item>
          <el-form-item label="最少阈值：" prop="less" style="width: 278px">
            <el-input v-model="viewObj.less" placeholder="请输入最少学分阈值"></el-input>
          </el-form-item>
          <el-form-item label="最大阈值：" prop="more" style="width: 278px">
            <el-input v-model="viewObj.more" placeholder="请输入最多学分阈值"></el-input>
          </el-form-item>
          <el-form-item label="单次学分：" prop="time" style="width: 278px">
            <el-input v-model="viewObj.time" placeholder="一次活动所获得学分"></el-input>
          </el-form-item>
          <el-form-item label="备注信息：" prop="desc" style="width: 278px">
            <el-input
              type="textarea"
              rows="5"
              v-model="viewObj.desc"
              placeholder="请输入备注"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel')">取消</el-button>
          <el-button type="primary" @click="handleClick('submit')">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 确认框 -->
    <el-dialog
      v-model="showLayer.delete"
      :title="showLayer.title"
      width="360px"
      custom-class="delete-layer"
    >
      <div class="body"
        ><el-icon><promotion /></el-icon>
        <p>确定要删除【{{ viewObj.colortitle }}】的信息吗？</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel')">取消</el-button>
          <el-button type="primary" @click="handleClick('delete')">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onBeforeMount, reactive } from 'vue';
  import {
    ArrowRight,
    Plus,
    Promotion,
    Download,
    UploadFilled,
    Finished,
    CloseBold
  } from '@element-plus/icons-vue';
  import TableOption from '../../../components/library/table-options.vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import mockData from '../mockData/scoreRule.json';
  import $http from '../../../api';

  const showLayer = reactive({
    edit: false,
    delete: false,
    title: ''
  });
  const pageData = ref({});
  const total = ref(7);
  const optionParams = ref({
    pn: 1,
    rn: 10
  });
  const options = reactive({
    data: mockData.option
  });
  const tableData = reactive({
    data: mockData.table
  });
  const viewObj: any = ref({});
  const ruleForm = reactive({
    colortitle: '',
    id: '',
    less: '',
    more: '',
    time: '',
    desc: ''
  });

  const submitForm = async () => {
    showLayer.edit = false;
  };

  const handleClick = (v: any) => {
    switch (v) {
      case 'submit':
        ElMessage.success('提交成功！');
        showLayer.edit = false;
        break;
      case 'cancel':
        showLayer.edit = false;
        showLayer.delete = false;
        viewObj.value = {};
        break;
      case 'delete':
        ElMessage.success('删除成功！');
        // 重新请求
        showLayer.delete = false;
        break;
      default:
    }
  };

  // 筛选
  const optionChangeFn = (v: any) => {
    // console.log(v);
  };

  // 操作
  const handleOperate = (v: any) => {
    // console.log(v);
    let key = v.operate;
    viewObj.value = v.rowData;
    switch (key) {
      case 'edit':
        showLayer.title = '编辑学分规则';
        showLayer.edit = true;
        break;
      case 'delete':
        showLayer.title = '删除活动学分';
        showLayer.delete = true;
        break;
      default:
      // console.log(key);
    }
  };
  // 页码变化
  const currentPage = (v: any) => {
    optionParams.value = Object.assign(optionParams.value, v);
    getPageData();
  };

  const getPageData = () => {
    $http
      .getscorerule({
        data: optionParams.value
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
    display: block;
    // background: @root-color-f5;

    .table {
      .select-ope {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
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
