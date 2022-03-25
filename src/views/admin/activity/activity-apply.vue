<!--
 * @Author: liliang | zkyeu@163.com
 * @Date: 2022-03-19 00:07:30
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-25 14:34:37
 * @FilePath: /score/src/views/admin/activity/activity-apply.vue
-->

<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">学生活动审核</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="btn">
      <table-option :optionData="options.data" @optionChange="optionChange" />
    </div>
    <div class="table">
      <table-list :tableData="tableData.data" :canSelect="false" @operate="handleOperate" />
    </div>
    <div class="page">
      <pages :total="15" @currentPage="currentPage" />
    </div>

    <!-- 新建&编辑 -->
    <el-dialog
      v-model="showLayer.create"
      :title="showLayer.title"
      width="650px"
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
          基础信息 学生信息 辅助信息
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入活动名称" />
          </el-form-item>
          <el-form-item label="存档编码" prop="uniqueNumber">
            <el-input v-model="ruleForm.uniqueNumber" placeholder="请输入活动存档编码" />
          </el-form-item>
          <el-form-item label="学生类型" prop="studentType">
            <el-select v-model="ruleForm.studentType" placeholder="选择父类">
              <el-option label="全部" value="0" />
              <el-option label="MBA" value="mba" />
              <el-option label="EMBA" value="emba" />
              <el-option label="MEM" value="mem" />
              <el-option label="MPAcc" value="mpacc" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动年级" prop="grade">
            <el-select v-model="ruleForm.grade" placeholder="选择父类">
              <el-option label="不区分" value="0" />
              <el-option label="2022" value="2022" />
              <el-option label="2021" value="2021" />
              <el-option label="2020" value="2020" />
              <el-option label="2019" value="2019" />
              <el-option label="2018" value="2018" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动班级" prop="grade">
            <el-select v-model="ruleForm.grade" placeholder="选择活动班级">
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
          <el-form-item label="学年学期" prop="year">
            <el-select v-model="ruleForm.year" placeholder="选择学年学期">
              <el-option label="不区分" value="0" />
              <el-option label="2021-2022学年 第一学期" value="1" />
              <el-option label="2020-2021学年 第二学期" value="2" />
              <el-option label="2020-2021学年 第一学期" value="3" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动归类" prop="belong">
            <el-select v-model="ruleForm.belong" placeholder="选择活动归属类别">
              <el-option label="不区分" value="0" />
              <el-option label="新生入学向导" value="1" />
              <el-option label="社会公益" value="2" />
              <el-option label="院校赛事" value="21" />
              <el-option label="企业实践" value="22" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动等级" prop="class">
            <el-select v-model="ruleForm.status" placeholder="请选择活动等级">
              <el-option label="院校级" value="yx" />
              <el-option label="学院级" value="bd" />
              <el-option label="年级" value="b1d" />
              <el-option label="班级" value="b2d" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动状态" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择活动状态">
              <el-option label="全部" value="yx" />
              <el-option label="正常" value="bd" />
              <el-option label="暂停" value="b1d" />
              <el-option label="停止" value="b2d" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="完成情况" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择活动完成情况">
              <el-option label="全部" value="yx" />
              <el-option label="已完成" value="bd" />
              <el-option label="暂停" value="b1d" />
              <el-option label="未开始" value="b2d" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="活动性质" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择活动性质">
              <el-option label="全部" value="yx" />
              <el-option label="线上" value="bd" />
              <el-option label="线下" value="b1d" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="线下输入地址" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择活动地址">
              <el-option label="全部" value="yx" />
              <el-option label="线上" value="bd" />
              <el-option label="线下" value="b1d" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="报名时间" prop="status"> </el-form-item>
          <el-form-item label="活动时间" prop="status"> </el-form-item>
          <el-form-item label="负责人" prop="status"> </el-form-item>
          <el-form-item label="备注" prop="status"> </el-form-item>
          <el-form-item label="宣传图片" prop="status"> </el-form-item>
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
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus, Promotion } from '@element-plus/icons-vue';
  import TableOption from '../../../components/library/table-options.vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import mockData from './mock3';
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
      uniqueNumber: '',
      studentType: '',
      grade: '',
      year: '',
      belong: '',
      parentId: '',
      status: '',
      desc: '',
      is: '',
      class: '',
      id: '',
      date: ''
    }
  });
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    name: '',
    uniqueNumber: '',
    studentType: '',
    grade: '',
    year: '',
    belong: '',
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

  onMounted(() => {});
</script>

<style lang="less" scoped>
  @import url('../../../assets/style/diy.less');
  .single-page {
    display: block;

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
