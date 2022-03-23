<!--
 * @Author: liliang | zkyeu@163.com
 * @Date: 2022-03-21 20:17:29
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-23 09:09:12
 * @FilePath: /mba-score/src/views/admin/score/score-rule.vue
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
      <el-button type="primary" :icon="Plus" @click="handleClick('single', '')">添加规则</el-button>
    </div>

    <div class="table">
      <el-table
        :data="tableData.data"
        style="width: 100%; margin-bottom: 20px"
        row-key="name"
        border
        default-expand-all
      >
        <el-table-column align="left" prop="name" label="Name" sortable width="180" />
        <el-table-column align="center" prop="date" label="活动次数" sortable width="180" />
        <el-table-column align="center" prop="date" label="活动次数" sortable width="180" />
      </el-table>
      <!-- <table-list
        ref="multipleTableRef"
        :tableData="tableData.data"
        :canSelect="true"
        @operate="handleOperate"
        @tableSelection="tableSelectionFn"
      /> -->
    </div>
    <div class="page" v-if="total > 10">
      <pages :total="total" @currentPage="currentPage" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
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
  import mockData from './rule';
  // import aaa from '../../../assets/files/学生信息模版.xlsx'

  const showLayer = reactive({
    import: false,
    create: false,
    view: false,
    edit: false,
    delete: false,
    title: ''
  });
  const total = ref(7);
  const optionParams = reactive({ obj: {} });
  const options = reactive({
    data: mockData.option
  });
  const tableData = reactive({
    data: [
      {
        id: 1,
        date: '5',
        name: '大类名称1'
      },
      {
        id: 2,
        date: '3',
        name: '大类名称2'
      },
      {
        id: 3,
        date: '8',
        name: '大类名称3',
        children: [
          {
            id: 31,
            date: '2',
            name: '小类1'
          },
          {
            id: 32,
            date: '4',
            name: '小类2'
          }
        ]
      },
      {
        id: 4,
        date: '5',
        name: '大类名称4'
      }
    ]
    // data: mockData.table
  });
  const viewObj = reactive({ data: {} });
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    data: {
      snumber: '',
      grade: '',
      class: '',
      belong: '',
      parentId: '',
      status: '',
      desc: '',
      mba: '',
      xuefen: '',
      name: '',
      mobile: '',
      studentType: '',
      year: '',
      banxing: ''
    }
  });

  const fileList = ref([]);
  const selection = ref([]);

  // 批量结算取消
  const cancelImport = () => {
    // importObj =
    console.log('123');
  };

  // 文件前的回调上传方法
  const uploadFileMe = (v: any) => {
    console.log(v);
    // uploadFileInfo = {
    //   filename: v.filename,
    //   size: v.size
    // };
  };

  // 文件上传成功返回数据
  const uploadSuccess = (file: any) => {
    console.log(file, 'file');
    // if (file.errMsg === 'OK') {
    //   this.batchUploadInfo.filename = file.data.bosname;
    // } else {
    //   this.$message({
    //     message: file.errMsg,
    //     type: 'error'
    //   });
    // }
  };

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid: any, fields: any) => {
      if (valid) {
        console.log(ruleForm);
        console.log('submit!');
        showLayer.create = false;
        formEl.resetFields();
      } else {
        console.log('error submit!', fields);
      }
    });
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
    showLayer.create = false;
  };

  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('没有保存信息，确定关闭吗?')
      .then(() => {
        done();
      })
      .catch(() => {
        // catch error
      });
  };

  const handleClick = (v: any, o: any) => {
    switch (v) {
      case 'submit':
        submitForm(o);
        ElMessage.success('提交成功！');
        showLayer.create = false;
        break;
      case 'cancel':
        resetForm(o);
        showLayer.create = false;
        break;
      case 'hidden':
        (showLayer as any)[o] = false;
        // ruleForm.data = {};
        break;
      case 'delete':
        showLayer.title = '删除活动学分';
        ElMessage.success('删除成功');
        showLayer.delete = false;
        // ruleForm.data = {};
        break;
      case 'importBtn':
        showLayer.title = '活动学分批量导入';
        showLayer.import = true;
        break;
      case 'confirmImport':
        showLayer.title = '';
        showLayer.import = false;
        ElMessage.success('导入成功！');
        break;
      case 'disppear':
        showLayer.title = '';
        showLayer.import = false;
        break;
      case 'downImport':
        window.open('../../../assets/files/活动学分信息表.xlsx', '_blank');
        break;
      case 'single':
        showLayer.title = '添加单人学分';
        showLayer.create = true;
        break;
      case 'notview':
        showLayer.title = '';
        showLayer.view = false;
        break;
      case 'passall':
      case 'failall':
        ElMessage.success('批量审核成功');
        break;
      default:
    }
  };

  // 筛选
  const optionChangeFn = (v: any) => {
    console.log(v);
  };

  // 表格选择
  const tableSelectionFn = (v: any) => {
    let idArr = v.map((i: any) => {
      return i.id;
    });
    selection.value = idArr;
  };

  // 操作
  const handleOperate = (v: any) => {
    console.log(v);

    let key = v.operate;
    ruleForm.data = v.rowData;
    switch (key) {
      case 'view':
        showLayer.title = '查看学生信息';
        showLayer.view = true;
        break;
      case 'edit':
        ruleForm.data.name = v.rowData.name;
        ruleForm.data.parentId = '院校级';
        ruleForm.data.status = v.rowData.status;
        ruleForm.data.desc = v.rowData.desc;

        showLayer.title = '编辑学生信息';
        showLayer.create = true;
        break;
      case 'delete':
        showLayer.title = '删除学生信息';
        showLayer.delete = true;
        break;
      default:
        console.log(key);
    }
  };
  // 页码变化
  const currentPage = (v: any) => {
    console.log(v);
  };

  onMounted(() => {});
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
