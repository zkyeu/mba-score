<!--
 * @Author: your name
 * @Date: 2022-03-19 00:34:51
 * @LastEditTime: 2022-03-27 18:27:36
 * @LastEditors: liliang
 * @Description: 
 * @FilePath: /mba-score/src/views/admin/student/student-info.vue
-->

<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">学生信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="btn">
      <table-option :optionData="options.data" @optionChange="optionChange" />
      <el-button type="primary" :icon="Plus" @click="handleClick('importBtn', '')"
        >学生批量导入</el-button
      >
      <el-button type="primary" :icon="Plus" @click="handleClick('single', '')"
        >添加学生信息</el-button
      >
      <el-button type="primary" :icon="Plus" @click="handleClick('export', '')"
        >导出学生信息</el-button
      >
    </div>
    <div class="table">
      <table-list :tableData="tableData.data" :canSelect="false" @operate="handleOperate" />
    </div>
    <div class="page">
      <pages :total="100" @currentPage="currentPage" />
    </div>

    <!-- 导入/批量 -->
    <el-dialog
      :title="showLayer.title"
      v-model="showLayer.import"
      @closed="cancelImport"
      width="840px"
      custom-class="import-info"
    >
      <div class="import-layer">
        <div class="left">
          <div class="step">
            <div class="title">第一步：下载《学生信息模板》并按要求添加学生信息</div>
            <div class="down-file">
              <el-button type="primary" plain @click="handleClick('downImport', '')"
                >《学生信息模板》下载<el-icon class="el-icon--right"><download /></el-icon
              ></el-button>
            </div>
          </div>

          <div class="step">
            <div class="title">第二步：上传《学生信息模板》文件</div>
            <div class="upload-student-info">
              <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text"> 将文件拖到此处，或 <em>点击上传</em> </div>
                <template #tip>
                  <div class="el-upload__tip"> 只能上传.xls或.xlsx文件，且不超过500kb </div>
                </template>
              </el-upload>
            </div>
            <!-- <el-upload
          class="pmp-gap-top"
          drag
          :limit="1"
          accept=".xls, .xlsx, .csv"
          action="/commander/api/uploadfile"
          :before-upload="uploadFileMe"
          :on-success="uploadSuccess"
          :file-list="fileList"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将填写完文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload> -->
          </div>
        </div>
        <div class="right">
          <div class="step">
            <div class="title">第三步：添加基础信息</div>
            <div class="basic-info">
              <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="90px"
                size="default"
              >
                <el-form-item label="学生类型" prop="studentType">
                  <el-select v-model="ruleForm.data.studentType" placeholder="选择父类">
                    <el-option label="全部" value="0" />
                    <el-option label="MBA" value="mba" />
                    <el-option label="EMBA" value="emba" />
                    <el-option label="MEM" value="mem" />
                    <el-option label="MPAcc" value="mpacc" />
                    <el-option label="其他的自己加" value="24" />
                  </el-select>
                </el-form-item>
                <el-form-item label="学生年级" prop="year">
                  <el-select v-model="ruleForm.data.year" placeholder="选择父类">
                    <el-option label="不区分" value="0" />
                    <el-option label="2022" value="2022" />
                    <el-option label="2021" value="2021" />
                    <el-option label="2020" value="2020" />
                    <el-option label="2019" value="2019" />
                    <el-option label="2018" value="2018" />
                    <el-option label="其他的自己加" value="24" />
                  </el-select>
                </el-form-item>
                <el-form-item label="学生班型" prop="banxing">
                  <el-select v-model="ruleForm.data.banxing" placeholder="选择学生班型">
                    <el-option label="不区分" value="0" />
                    <el-option label="集中I" value="1" />
                    <el-option label="集中II" value="2" />
                    <el-option label="周末I" value="3" />
                    <el-option label="周末II" value="4" />
                    <el-option label="其他的自己加" value="24" />
                  </el-select>
                </el-form-item>
                <el-form-item label="学生班级" prop="grade">
                  <el-select v-model="ruleForm.data.grade" placeholder="选择活动班级">
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
                  <el-select v-model="ruleForm.data.status" placeholder="请选择学生状态">
                    <el-option label="全部" value="yx" />
                    <el-option label="正常" value="bd" />
                    <el-option label="退学" value="b1d" />
                    <el-option label="休学" value="24" />
                    <el-option label="其他" value="234" />
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>

      <div slot="footer" class="import-foot">
        <el-button @click="handleClick('disppear', '')">取 消</el-button>
        <el-button type="primary" @click="handleClick('confirmImport', '')">确 定</el-button>
      </div>
    </el-dialog>

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
          <el-form-item label="学生姓名" prop="name" style="width: 278px">
            <el-input v-model="ruleForm.data.name" placeholder="请输入学生姓名" />
          </el-form-item>
          <el-form-item label="学号" prop="snumber" style="width: 278px">
            <el-input v-model="ruleForm.data.snumber" placeholder="请输入学生学号" />
          </el-form-item>
          <el-form-item label="类型" prop="mba">
            <el-select v-model="ruleForm.data.mba" placeholder="选择学生类型">
              <el-option label="全部" value="0" />
              <el-option label="MBA" value="mba" />
              <el-option label="EMBA" value="emba" />
              <el-option label="MEM" value="mem" />
              <el-option label="MPAcc" value="mpacc" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="年级" prop="grade">
            <el-select v-model="ruleForm.data.grade" placeholder="选择学生年级">
              <el-option label="不区分" value="0" />
              <el-option label="2022" value="2022" />
              <el-option label="2021" value="2021" />
              <el-option label="2020" value="2020" />
              <el-option label="2019" value="2019" />
              <el-option label="2018" value="2018" />
              <el-option label="其他的自己加" value="24" />
            </el-select>
          </el-form-item>
          <el-form-item label="班级" prop="class">
            <el-select v-model="ruleForm.data.class" placeholder="选择班级">
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
            <el-select v-model="ruleForm.data.status" placeholder="请选择学生状态">
              <el-option label="全部" value="yx" />
              <el-option label="正常" value="bd" />
              <el-option label="退学" value="b1d" />
              <el-option label="休学" value="24" />
              <el-option label="其他" value="234" />
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式" prop="mobile" style="width: 278px">
            <el-input v-model="ruleForm.data.mobile" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <el-form-item label="学生照片" prop="status"> </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('cancel', ruleFormRef)">取消</el-button>
          <el-button type="primary" @click="handleClick('submit', ruleFormRef)">添加</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 查看 -->
    <el-dialog
      v-model="showLayer.view"
      :title="showLayer.title"
      width="350px"
      draggable
      custom-class="edit-info-layer"
    >
      <div class="item-list">
        <li>
          <label>学生姓名：</label>
          <div>{{ ruleForm.data.name }}</div>
        </li>
        <li>
          <label>学号：</label>
          <div>{{ ruleForm.data.snumber }}</div>
        </li>
        <li>
          <label>类型：</label>
          <div>{{ ruleForm.data.mba }}</div>
        </li>
        <li>
          <label>年级：</label>
          <div>{{ ruleForm.data.grade }}级</div>
        </li>
        <li>
          <label>班级：</label>
          <div>{{ ruleForm.data.grade }}</div>
        </li>
        <li>
          <label>学生状态：</label>
          <div>{{ ruleForm.data.status }}</div>
        </li>
        <li>
          <label>联系方式：</label>
          <div>{{ ruleForm.data.mobile }}</div>
        </li>
        <li>
          <label>学生照片：</label>
          <div>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.wzsky.net%2F2020%2F10%2F25%2F106343bc-1767-4f29-9d15-aa74dd94fb46.png&refer=http%3A%2F%2Fi-1.wzsky.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650283526&t=cf8b4bbd78344dd337a6509aee8dc1af"
              style="width: 100px"
            />
          </div>
        </li>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('notview', '')">关闭</el-button>
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
          <el-button @click="handleClick('hidden', 'delete')">取消</el-button>
          <el-button type="primary" @click="handleClick('delete', '')">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onBeforeMount, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus, Promotion, Download, UploadFilled } from '@element-plus/icons-vue';
  import TableOption from '../../../components/library/table-options.vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import mockData from '../mockData/studentInfo.json';
  import $http from '../../../api';

  const showLayer = reactive({
    import: false,
    create: false,
    view: false,
    edit: false,
    delete: false,
    title: ''
  });
  const pageData = ref({});
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
      name: '',
      year: '',
      banxing: '',
      mobile: '',
      studentType: ''
    }
  });
  const rules = reactive({
    banxing: [
      {
        required: false,
        message: '请选择活动状态',
        trigger: 'change'
      }
    ]
  });

  const fileList = ref([]);

  // 批量结算取消
  const cancelImport = () => {
    // importObj =
    // console.log('123');
  };

  // 文件前的回调上传方法
  const uploadFileMe = (v: any) => {
    // console.log(v);
    // uploadFileInfo = {
    //   filename: v.filename,
    //   size: v.size
    // };
  };

  // 文件上传成功返回数据
  const uploadSuccess = (file: any) => {
    // console.log(file, 'file');
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
        // console.log(ruleForm);
        // console.log('submit!');
        showLayer.create = false;
        formEl.resetFields();
      } else {
        // console.log('error submit!', fields);
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
        showLayer.title = '删除学生';
        ElMessage.success('删除成功');
        showLayer.delete = false;
        // ruleForm.data = {};
        break;
      case 'importBtn':
        showLayer.title = '学生信息批量导入';
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
        window.open('./files/学生信息模版.xlsx', '_blank');
        break;
      case 'export':
        ElMessage.warning('后面待开发');
        break;
      case 'single':
        showLayer.title = '添加学生信息';
        showLayer.create = true;
        break;
      case 'notview':
        showLayer.title = '';
        showLayer.view = false;
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
    // console.log(v);

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
      .getstudentinfo({
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

    .bread {
      background: @root-color-f5;
      padding: 11px;
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
