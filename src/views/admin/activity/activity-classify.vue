<!--
 * @Author: your name
 * @Date: 2021-08-18 08:38:23
 * @LastEditTime: 2022-03-17 09:14:29
 * @LastEditors: Please set LastEditors
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
      <table-list :tableData="tableData.data" :canSelect="true" @operate="handleOperate" />
    </div>
    <div class="page">
      <pages :total="100" @currentPage="currentPage" />
    </div>

    <!-- 新建分类&编辑分类 -->
    <el-dialog v-model="showLayer" title="创建活动分类" width="450px" draggable>
      <div class="dialog-body">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          size="default"
        >
          <el-form-item label="分类名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入活动名称" />
          </el-form-item>
          <el-form-item label="父类名称" prop="parentId">
            <el-select v-model="ruleForm.parentId" placeholder="选择父类">
              <el-option label="无" value="0" />
              <el-option label="院校级" value="yx" />
              <el-option label="新生报道" value="bd" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动状态" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择活动状态">
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
    <template>
      <!-- 查看分类 -->
      <!-- <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
        <span>It's a draggable Dialog</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
          </span>
        </template>
      </el-dialog> -->
      <!-- 确认框 -->
      <!-- <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
        <span>It's a draggable Dialog</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
          </span>
        </template>
      </el-dialog> -->
      <!-- 组件 -->
      <!-- <dialog-layer :show="showLayer" title="创建活动分类" width="450px">
        <template #dialogBody> </template>
      </dialog-layer> -->
    </template>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus } from '@element-plus/icons-vue';
  import TableOption from '../../../components/library/table-options.vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import { ElMessageBox, FormInstance } from 'element-plus';
  import mockData from './mock';
  import { log } from 'console';

  const showLayer = ref(false);
  const optionParams = reactive({ obj: {} });
  const options = reactive({
    data: mockData.option,
  });
  const tableData = reactive({
    data: mockData.table,
  });

  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    name: '',
    parentId: '',
    status: '',
    desc: '',
  });
  const rules = reactive({
    name: [
      { required: true, message: '请输入分类名称', trigger: 'blur' },
      { min: 3, max: 50, message: '名称长度在3-50之间', trigger: 'blur' },
    ],
    parentId: [
      {
        required: true,
        message: '请选择父类',
        trigger: 'change',
      },
    ],
    status: [
      {
        required: true,
        message: '请选择活动状态',
        trigger: 'change',
      },
    ],
    desc: [{ required: false, message: '', trigger: 'blur' }],
  });

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log(ruleForm);
        console.log('submit!');
        showLayer.value = false;
        formEl.resetFields();
      } else {
        console.log('error submit!', fields);
      }
    });
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
    showLayer.value = false;
  };

  const handleClick = (v: any, o: any) => {
    switch (v) {
      case 'submit':
        submitForm(o);
        break;
      case 'cancel':
        resetForm(o);
        break;
      case 'create':
        console.log(v);

        showLayer.value = true;
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
    switch (v.operate) {
      case 'view':
        console.log(v.rowData);
        //     const {name,
        // id,
        // status,
        // desc} = v.rowData;

        break;
      case 'edit':
        break;
      default:
    }
    showLayer.value = true;
  };
  // 页码变化
  const currentPage = (v: any) => {
    console.log(v);
  };

  const dialogBtnEvent = (v: any) => {
    console.log('click', v);
    showLayer.value = v.boo;
    console.log(v.obj);
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
