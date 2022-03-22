<!--
 * @Author: your name
 * @Date: 2021-08-18 08:38:23
 * @LastEditTime: 2022-03-22 14:18:54
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
      <el-button type="primary" :icon="Plus" @click="handleClick('create', '')">创建分类</el-button>
    </div>
    <div class="table">
      <table-list :tableData="tableData.data" :canSelect="false" @operate="handleOperate" />
    </div>
    <div class="page">
      <pages :total="100" @currentPage="currentPage" />
    </div>

    <!-- 新建&编辑 -->
    <el-dialog
      v-model="showLayer.create"
      :title="showLayer.title"
      width="450px"
      draggable
      :before-close="handleClose"
    >
      <div class="dialog-body">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="90px"
          size="default"
        >
          <el-form-item label="分类名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入分类名称" />
          </el-form-item>
          <el-form-item label="父类名称" prop="parentId">
            <el-select v-model="ruleForm.parentId" placeholder="选择父类">
              <el-option label="无" value="无" />
              <el-option label="院校级" value="院校级" />
              <el-option label="新生报道" value="新生报道" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动状态" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择分类状态">
              <el-option label="院校级" value="yx" />
              <el-option label="新生报道" value="bd" />
            </el-select>
          </el-form-item>
          <el-form-item label="备注信息" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
          </el-form-item>
          <el-form-item> </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel', ruleFormRef)">取消</el-button>
          <el-button type="primary" @click="handleClick('submit', ruleFormRef)">创建</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 查看分类 -->
    <el-dialog
      v-model="showLayer.view"
      title="查看活动类别"
      width="360px"
      draggable
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      custom-class="create-layer"
    >
      <div class="item-list">
        <li>
          <label>活动ID：</label>
          <div>{{ viewObj.data.id }}</div>
        </li>
        <li>
          <label>活动名称：</label>
          <div>{{ viewObj.data.name }}</div>
        </li>
        <li>
          <label>活动分类：</label>
          <div>{{ viewObj.data.is }}</div>
        </li>
        <li>
          <label>活动性质：</label>
          <div>{{ viewObj.data.class }}</div>
        </li>
        <li>
          <label>活动状态：</label>
          <div>{{ viewObj.data.status }}</div>
        </li>
        <li>
          <label>创建时间：</label>
          <div>{{ viewObj.data.date }}</div>
        </li>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleClick('hidden', 'view')">关闭</el-button>
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
        <p>确定要删除【{{ viewObj.data.name }}】吗？</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('hidden', 'delete')">取消</el-button>
          <el-button type="primary" @click="handleClick('delete', '')">确认</el-button>
        </span>
      </template>
    </el-dialog>
    <template>
      <!-- 组件 -->
      <!-- <dialog-layer :show="showLayer" title="创建活动分类" width="450px">
        <template #dialogBody> </template>
      </dialog-layer> -->
    </template>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus, Promotion } from '@element-plus/icons-vue';
  import TableOption from '../../../components/library/table-options.vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import mockData from './mock';
  import { log } from 'console';

  const showLayer = reactive({
    create: false,
    view: false,
    edit: false,
    delete: false,
    title: ''
  });
  const optionParams = reactive({ obj: {} });
  const options = reactive({
    data: mockData.option
  });
  const tableData = reactive({
    data: mockData.table
  });

  const viewObj = reactive({
    data: {
      name: '',
      parentId: '',
      status: '',
      desc: '',
      date: '',
      is: '',
      id: '',
      class: ''
    }
  });
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    name: '',
    parentId: '',
    status: '',
    desc: ''
  });
  const rules = reactive({
    name: [
      { required: true, message: '请输入分类名称', trigger: 'blur' },
      { min: 3, max: 50, message: '名称长度在3-50之间', trigger: 'blur' }
    ],
    parentId: [
      {
        required: true,
        message: '请选择父类',
        trigger: 'change'
      }
    ],
    status: [
      {
        required: true,
        message: '请选择活动状态',
        trigger: 'change'
      }
    ],
    desc: [{ required: false, message: '', trigger: 'blur' }]
  });

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
      case 'create':
        showLayer.title = '创建活动分类';
        showLayer.create = true;
        break;
      case 'hidden':
        (showLayer as any)[o] = false;
        // viewObj.data = {};
        break;
      case 'delete':
        showLayer.title = '删除分类';
        ElMessage.success('删除成功');
        showLayer.delete = false;
        // viewObj.data = {};
        break;
      default:
    }
  };

  // 筛选
  const optionChange = (v: any) => {
    console.log(v);
  };

  // 操作
  const handleOperate = (v: any) => {
    console.log(v);

    let key = v.operate;
    viewObj.data = v.rowData;
    switch (key) {
      case 'view':
        showLayer.title = '查看活动类别';
        showLayer.view = true;
        break;
      case 'edit':
        ruleForm.name = v.rowData.name;
        ruleForm.parentId = '院校级';
        ruleForm.status = v.rowData.status;
        ruleForm.desc = v.rowData.desc;

        showLayer.title = '编辑活动类别';
        showLayer.create = true;
        break;
      case 'delete':
        showLayer.title = '删除活动类别';
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

  // const dialogBtnEvent = (v: any) => {
  //   console.log('click', v);
  //   showLayer.value = v.boo;
  //   console.log(v.obj);
  // };
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
  }
</style>
