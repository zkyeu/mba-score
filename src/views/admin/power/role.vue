<!--
 * @Author: liliang
 * @Date: 2022-03-16 09:29:21
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-21 21:56:00
 * @FilePath: /mba-score/src/views/admin/power/role.vue
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
      <el-button type="primary" :icon="Plus" @click="handleClick('add', '')">添加权限组</el-button>
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
      <pages :total="total" @currentPage="currentPage" />
    </div>

    <!-- 访问授权 -->
    <el-dialog
      v-model="showLayer.auth"
      :title="showLayer.title"
      width="760px"
      custom-class="auth-layer"
    >
      <div class="auth-body">
        <el-tree
          ref="tree"
          :data="authData"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :props="{ class: customNodeClass }"
          @getCheckedKeys="getKey(true)"
          @node-click="handleNodeClick"
        />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel', '')">取消</el-button>
          <el-button type="primary" @click="handleClick('confirm', '')">确认</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 编辑 -->
    <el-dialog
      v-model="showLayer.create"
      :title="showLayer.title"
      width="450px"
      draggable
      :before-close="handleClose"
      custom-class="edit-info-layer"
    >
      <div class="dialog-body">
        <el-form ref="ruleFormRef" :model="ruleForm" label-width="96px" size="default">
          <el-form-item label="权限组名称" prop="uname" style="width: 380px" required>
            <el-input v-model="ruleForm.pname" placeholder="请输入登录账号" />
          </el-form-item>
          <el-form-item label="权限组描述" prop="pwd" style="width: 380px">
            <el-input
              type="textarea"
              rows="6"
              v-model="ruleForm.desc"
              placeholder="请输入登录密码"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel', '')">取消</el-button>
          <el-button type="primary" @click="handleClick('submit', ruleFormRef)">添加</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 确认框 -->
    <el-dialog
      v-model="showLayer.delete"
      :title="showLayer.title"
      width="360px"
      custom-class="auth-layer"
    >
      <div class="body"
        ><el-icon><promotion /></el-icon>
        <p>确定要删除【{{ ruleForm.name }}】的信息吗？</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel', '')">取消</el-button>
          <el-button type="primary" @click="handleClick('confirm', '')">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus } from '@element-plus/icons-vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import type Node from 'element-plus/es/components/tree/src/model/node';
  import mockData from './mock';

  const myRef = ref(null);
  const showLayer = reactive({
    auth: false,
    create: false,
    edit: false,
    delete: false,
    title: ''
  });
  const tableData = reactive({
    data: mockData.table
  });
  const total = ref(7);
  const viewObj = reactive({ data: {} });
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    desc: '',
    pname: ''
  });
  interface Tree {
    id: number;
    label: string;
    isPenultimate?: boolean;
    children?: Tree[];
  }

  const customNodeClass = (data: Tree, node: Node) => {
    if (data.isPenultimate) {
      return 'is-penultimate';
    }
    return null;
  };
  const authData: Tree[] = mockData.authData;
  const getKey = (v: any) => {
    console.log(v);
  };

  const handleNodeClick = (v: any) => {
    console.log(v);
  };

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
        showLayer.title = '添加权限组';
        break;
      case 'cancel':
        showLayer.auth = false;
        break;
      case 'delete':
        showLayer.title = '删除成员';
        ElMessage.success('删除成功');
        showLayer.delete = false;
        break;
      case 'confirm':
        ElMessage.success('设置成功');
        showLayer.auth = false;
        break;
      case 'auth':
        showLayer.title = '访问授权';
        showLayer.auth = true;
        break;

      default:
    }
  };

  // 操作
  const handleOperate = (v: any) => {
    let key = v.operate;
    switch (key) {
      case 'auth':
        showLayer.title = '访问授权';
        showLayer.auth = true;
        break;
      default:
        console.log(key);
    }
  };
  // 页码变化
  const currentPage = (v: any) => {
    console.log(v);
  };

  onMounted(() => {
    console.log(myRef.value);
  });
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
    :deep(.auth-layer) {
      .el-dialog__body {
        padding: 0 20px;
        font-size: 14px;
      }
      .el-tree {
        & > div {
          & > div {
            &:first-child {
              color: #333;
              font-weight: 700;
              font-size: 16px !important;
              margin-top: 15px;
            }
          }
        }
      }

      .el-tree-node.is-expanded.is-penultimate > .el-tree-node__children {
        display: flex;
        flex-direction: row;
      }
    }
  }
</style>
