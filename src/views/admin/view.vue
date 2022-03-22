<!--
 * @Author: your name
 * @Date: 2021-08-03 17:32:56
 * @LastEditTime: 2022-03-22 13:50:41
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /score/src/views/admin/view.vue
-->
<template>
  <section class="content">
    <div class="big-title">MBA学生活动学分管理系统</div>

    <div class="echart">
      <div id="index"></div>
      <div id="right"></div>
    </div>
    <!-- <table-option :optionData="options.data" @optionChange="optionChange" />
      <table-list :tableData="tableData.data" @operate="handleOperate" />
      <pages :total="1090" @currentPage="currentPage" /> -->
  </section>
</template>

<script lang="ts" setup>
  // 组件引用部分========
  import { ref, defineComponent, computed, onMounted, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { key } from '../../store';
  // import TableOption from '../../components/library/table-options.vue';
  // import TableList from '../../components/library/table-list.vue';
  // import Pages from '../../components/library/pagination.vue';
  import * as echarts from 'echarts';
  import Data from './json';
  import router from '../../router';
  import { log } from 'console';

  const store = useStore(key);
  const msg = computed(() => store.state.count);
  const optionParams = reactive({ obj: {} });
  const options = reactive({
    data: [
      {
        value: 'id',
        type: 'input',
        label: '用户id',
        default: ''
      },
      {
        value: 'date',
        type: 'daterange',
        label: '日期',
        default: ['2022-03-10', '2022-03-15']
      },
      {
        value: 'type',
        type: 'select',
        label: '是否新流程',
        default: 1,
        options: [
          {
            value: 0,
            label: '否'
          },
          {
            value: 1,
            label: '是'
          }
        ]
      },
      {
        value: 'type_a',
        type: 'select',
        label: '是否新流程',
        default: '',
        options: [
          {
            value: 0,
            label: 'aaaaa'
          },
          {
            value: 1,
            label: 'bbbbb'
          }
        ]
      }
    ]
  });
  const tableData = reactive({
    data: {
      tabletitle: [
        {
          value: 'date',
          label: '时间'
        },
        {
          value: 'name',
          label: '姓名'
        },
        {
          value: 'address',
          label: '地址'
        },
        {
          value: 'operate',
          label: '操作'
        }
      ],
      tablelist: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          operate: [
            {
              value: 'view',
              label: '查看'
            },
            {
              value: 'edit',
              label: '编辑'
            },
            {
              value: 'delete',
              label: '删除'
            }
          ]
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          operate: [
            {
              value: 'view',
              label: '查看'
            },
            {
              value: 'edit',
              label: '编辑'
            },
            {
              value: 'delete',
              label: '删除'
            }
          ]
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          operate: [
            {
              value: 'view',
              label: '查看'
            },
            {
              value: 'edit',
              label: '编辑'
            },
            {
              value: 'delete',
              label: '删除'
            }
          ]
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          operate: [
            {
              value: 'view',
              label: '查看'
            },
            {
              value: 'edit',
              label: '编辑'
            },
            {
              value: 'delete',
              label: '删除'
            }
          ]
        }
      ]
    }
  });
  // 筛选项目变化
  const optionChange = (v: any) => {
    console.log(v);
    optionParams.obj = v;
  };

  // 表格中操作变化
  //  operate：操作key
  //  rowData：当前行数据
  const handleOperate = (v: any) => {
    console.log(v.operate);
    console.log(v.rowData);
  };

  // 页码变化
  const currentPage = (v: any) => {
    console.log('cp', v.pn);
    console.log('rn', v.rn);
  };

  const stuentInfo = () => {
    var myChart = echarts.init((document as any).getElementById('index'));
    myChart.on('updateAxisPointer', function (event: any) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
    myChart.setOption({
      title: {
        text: 'MBA2021级活动学分统计表',
        show: true,
        x: 'center'
      },
      // legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: true
      },
      dataset: {
        source: [
          ['product', '2021.9', '2021.10', '2021.11', '2021.12', '2022.1', '2022.2'],
          ['论坛活动', 56, 82, 88, 70, 59, 85],
          ['文体学分', 51, 51, 55, 53, 73, 68],
          ['社会公益', 10, 12, 69, 16, 25, 32],
          ['读书活动', 25, 37, 41, 38, 53, 49]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '50%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'product',
            value: '2021.9',
            tooltip: '2021.9'
          }
        }
      ]
    });
  };

  const right = () => {
    var myChart = echarts.init((document as any).getElementById('right'));
    myChart.hideLoading();
    myChart.setOption({
      title: {
        text: '学分活动图谱'
      },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'sankey',
          data: Data.nodes,
          links: Data.links,
          emphasis: {
            focus: 'adjacency'
          },
          lineStyle: {
            color: 'gradient',
            curveness: 0.5
          }
        }
      ]
    });
  };

  const setLS = () => {
    let LS = window.sessionStorage;
    let login = LS.getItem('acms');
    if (!login) {
      router.push('/log');
    } else {
      stuentInfo();
      right();
      router.push('/');
    }

    console.log(login);
  };

  onMounted(() => {
    setLS();
  });
</script>

<style lang="less" scoped>
  .content {
    display: block;

    .big-title {
      display: flex;
      justify-content: center;
      font-size: 40px;
      padding: 30px;
      font-weight: 700;
      background: -webkit-linear-gradient(45deg, #eb461d, #1024db, #1b6d33, #552bd3, #7d8a0c);
      color: transparent;
      -webkit-background-clip: text;
      animation: ran 10s linear infinite;
    }

    .echart {
      display: flex;
      justify-content: space-between;
      #index {
        width: 700px;
        height: 700px;
      }
      #right {
        width: 700px;
        height: 600px;
      }
    }
  }

  @keyframes ran {
    from {
      backgroud-position: 0 0;
    }
    to {
      background-position: 1200px 0;
    }
  }
</style>
