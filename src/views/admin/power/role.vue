<!--
 * @Author: liliang
 * @Date: 2022-03-16 09:29:21
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-21 13:59:14
 * @FilePath: /score/src/views/admin/power/role.vue
 * @Description: 
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
      <el-button type="primary" :icon="Plus" @click="handleClick('add')">添加权限组</el-button>
    </div>
    <div class="table">
      <table-list
        ref="multipleTableRef"
        :tableData="tableData.data"
        @operate="handleOperate"
        :stripe="true"
        :border="false"
      />
    </div>
    <div class="page" v-if="total > 10">
      <pages :total="2" @currentPage="currentPage" />
    </div>

    <!-- 编辑 -->
    <el-dialog
      v-model="showLayer.create"
      :title="showLayer.title"
      width="350px"
      draggable
      :before-close="handleClose"
      custom-class="edit-info-layer"
    >
      <div class="dialog-body">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm.data"
          :rules="rules"
          label-width="90px"
          size="default"
        >
          <el-form-item label="登录账号" prop="uname" style="width: 278px">
            <el-input v-model="ruleForm.data.uname" placeholder="请输入登录账号" />
          </el-form-item>
          <el-form-item label="密码" prop="pwd" style="width: 278px">
            <el-input v-model="ruleForm.data.pwd" placeholder="请输入登录密码" />
          </el-form-item>
          <el-form-item label="密码确认" prop="pwd2" style="width: 278px">
            <el-input v-model="ruleForm.data.pwd2" placeholder="请再次输入登录密码" />
          </el-form-item>
          <el-form-item label="成员姓名" prop="name" style="width: 278px">
            <el-input v-model="ruleForm.data.name" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="成员身份" prop="mba">
            <el-select v-model="ruleForm.data.mba" placeholder="选择身份">
              <el-option label="全部" value="0" />
              <el-option label="主任" value="mba" />
              <el-option label="副主任" value="emba" />
              <el-option label="老师" value="mem" />
              <el-option label="学生" value="mpacc" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel')">取消</el-button>
          <el-button type="primary" @click="handleClick('submit', ruleFormRef)">添加</el-button>
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
        <p>确定要删除【{{ ruleForm.data.name }}】的信息吗？</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel')">取消</el-button>
          <el-button type="primary" @click="handleClick('confirm')">确认</el-button>
        </span>
      </template>
    </el-dialog>
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
  import mockData from './mock';

  const showLayer = reactive({
    create: false,
    edit: false,
    delete: false,
    title: ''
  });
  const tableData = reactive({
    data: mockData.table
  });
  const viewObj = reactive({ data: {} });
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    data: {
      uname: '',
      name: '',
      role: '',
      pwd: '',
      pwd2: ''
    }
  });

  // 批量结算取消
  const cancelImport = () => {
    // importObj =
    console.log('123');
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
      case 'add':
        showLayer.create = true;
        showLayer.title = '添加成员';
        break;
      case 'cancel':
        showLayer.create = false;
        break;
      case 'delete':
        showLayer.title = '删除成员';
        ElMessage.success('删除成功');
        showLayer.delete = false;
        break;
      case 'confirm':
        ElMessage.success('删除成功');
        showLayer.delete = false;
        break;

      default:
    }
  };

  // 操作
  const handleOperate = (v: any) => {
    console.log(v);

    let key = v.operate;
    ruleForm.data = v.rowData;
    switch (key) {
      case 'delete':
        showLayer.title = '删除权限组';
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
      justify-content: flex-end;
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
