<!--
 * @Author: your name
 * @Date: 2022-03-19 00:34:51
 * @LastEditTime: 2022-03-27 17:43:55
 * @LastEditors: liliang
 * @Description: 
 * @FilePath: /mba-score/src/views/admin/score/component/count.vue
-->

<template>
  <section class="single-page">
    <div class="btn">
      <table-option :optionData="options.data" @optionChange="optionChange" />
      <el-button type="primary" :icon="Plus" @click="handleClick('export', '')">导出</el-button>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="uname" label="姓名" align="center" />
        <el-table-column prop="snumber" label="学号" align="center" />
        <el-table-column prop="grade" label="班级" align="center" />
        <el-table-column label="学分活动次数" align="center">
          <el-table-column prop="xiangdao" label="新生入学导向" align="center">
            <el-table-column prop="shijian" label="新生素质拓展" align="center" />
            <el-table-column prop="gongyi" label="新生晚会" align="center" />
            <el-table-column prop="gongyi" label="MBA年会" align="center" />
          </el-table-column>
          <el-table-column label="社会实践" align="center">
            <el-table-column prop="gongyi" label="新生案例大赛" align="center" />
            <el-table-column prop="gongyi" label="案例大赛" align="center" />
            <el-table-column prop="gongyi" label="创乐萌" align="center" />
            <el-table-column prop="gongyi" label="京津冀企划赛" align="center" />
            <el-table-column prop="gongyi" label="整合实践" align="center" />align="center" />
          </el-table-column>
          <el-table-column label="社会公益" align="center">
            <el-table-column prop="luntan" label="论坛讲座" align="center" />
            <el-table-column prop="wenti" label="文体实践" align="center" />
            <el-table-column prop="guoji" label="国际交流" align="center" />
            <el-table-column prop="lilun" label="理论提升" align="center" />
          </el-table-column>
        </el-table-column>
        <el-table-column prop="zongji" label="次数统计" align="center" />
      </el-table>
    </div>
    <!-- <div class="table">
      <table-list :tableData="tableData.data" :canSelect="false" @operate="handleOperate" />
    </div> -->
    <div class="page">
      <pages :total="100" @currentPage="currentPage" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onBeforeMount, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus, Promotion, Download, UploadFilled } from '@element-plus/icons-vue';
  import TableOption from '../../../../components/library/table-options.vue';
  import TableList from '../../../../components/library/table-list.vue';
  import Pages from '../../../../components/library/pagination.vue';
  import { ElMessage } from 'element-plus';
  import mockData from '../../mockData/scoreCount.json';
  import $http from '../../../../api';

  const showLayer = reactive({
    import: false,
    create: false,
    view: false,
    edit: false,
    delete: false,
    title: ''
  });
  const optionParams = ref({
    pn: 1,
    rn: 10
  });
  const pageData = ref({});
  const options = reactive({
    data: mockData.option
  });
  const tableData = ref(mockData.table);

  const handleClick = (v: any, o: any) => {
    // console.log(v);
  };

  // 筛选
  const optionChange = (v: any) => {
    optionParams.value = Object.assign(optionParams.value, v);
    getPageData();
  };

  // 页码变化
  const currentPage = (v: any) => {
    optionParams.value = Object.assign(optionParams.value, v);
    getPageData();
  };

  const getPageData = () => {
    $http
      .getactivityclassify({
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
  }
</style>
