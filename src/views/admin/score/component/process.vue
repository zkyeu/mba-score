<!--
 * @Author: your name
 * @Date: 2022-03-19 00:34:51
 * @LastEditTime: 2022-03-20 18:35:49
 * @LastEditors: liliang
 * @Description: 
 * @FilePath: /score/src/views/admin/score/component/process.vue
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
        <el-table-column label="学分完成进度" align="center">
          <el-table-column label="必修" align="center">
            <el-table-column prop="xiangdao" label="新生入学导向" align="center" />
            <el-table-column prop="shijian" label="社会实践" align="center" />
            <el-table-column prop="gongyi" label="社会公益" align="center" />
          </el-table-column>
          <el-table-column label="选修" align="center">
            <el-table-column prop="luntan" label="论坛讲座" align="center" />
            <el-table-column prop="wenti" label="文体实践" align="center" />
            <el-table-column prop="guoji" label="国际交流" align="center" />
            <el-table-column prop="lilun" label="理论提升" align="center" />
          </el-table-column>
        </el-table-column>
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
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus, Promotion, Download, UploadFilled } from '@element-plus/icons-vue';
  import TableOption from '../../../../components/library/table-options.vue';
  import TableList from '../../../../components/library/table-list.vue';
  import Pages from '../../../../components/library/pagination.vue';
  import { ElMessage } from 'element-plus';
  import mockData from '../process';

  const showLayer = reactive({
    import: false,
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
  const tableData = ref(mockData.table);

  const handleClick = (v: any, o: any) => {
    console.log(v);
  };

  // 筛选
  const optionChange = (v: any) => {
    console.log(v);
  };

  // 页码变化
  const currentPage = (v: any) => {
    console.log(v);
  };

  onMounted(() => {
    let arr = [
      {
        snumber: 'ZF2108223',
        uname: '沈寿豪'
      },
      {
        snumber: 'ZF2108201',
        uname: '陈佳'
      },
      {
        snumber: 'ZF2108202',
        uname: '陈立旋'
      },
      {
        snumber: 'ZF2108203',
        uname: '成帅'
      },
      {
        snumber: 'ZF2108204',
        uname: '程方瑞'
      },
      {
        snumber: 'ZF2108205',
        uname: '程潇毅'
      },
      {
        snumber: 'ZF2108206',
        uname: '邓裴'
      },
      {
        snumber: 'ZF2108207',
        uname: '封云潇'
      },
      {
        snumber: 'ZF2108208',
        uname: '高冀雄'
      },
      {
        snumber: 'ZF2108209',
        uname: '高强'
      },
      {
        snumber: 'ZF2108210',
        uname: '郝静娜'
      },
      {
        snumber: 'ZF2108211',
        uname: '黄志坤'
      },
      {
        snumber: 'ZF2108212',
        uname: '兰丹子皇'
      },
      {
        snumber: 'ZF2108213',
        uname: '李坚'
      },
      {
        snumber: 'ZF2108214',
        uname: '李钊'
      },
      {
        snumber: 'ZF2108215',
        uname: '李振'
      }
    ];
    let is = arr.map((item, index) => {
      let obj = {
        ...item,
        grade: 'ZF21082班',
        xiangdao: '1/6',
        shijian: '0.5',
        gongyi: '0.3',
        luntan: '0.5',
        wenti: '0.3',
        guoji: '0',
        lilun: '0.1'
      };
      return obj;
    });
    console.log(is);
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
