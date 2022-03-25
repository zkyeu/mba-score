<!--
 * @Author: liliang
 * @Date: 2022-03-23 10:10:14
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-25 22:15:37
 * @FilePath: /score/src/views/admin/view.vue
 * @Description: 
-->

<template>
  <section class="default-view">
    <div class="block-square">
      <li>
        <div class="left"><avatar class="icon" /></div>
        <div class="right">
          <p>学生数量</p>
          <p>{{ Util.currency(blockData.students, '', 0) }}</p>
        </div>
      </li>
      <li>
        <div class="left"><pie-chart class="icon" /></div>
        <div class="right">
          <p>活动累计</p>
          <p>{{ Util.currency(blockData.activitys, '', 0) }}</p>
        </div>
      </li>
      <li>
        <div class="left"><notification class="icon" /></div>
        <div class="right">
          <p>活动人次</p>
          <p>{{ Util.currency(blockData.pertime, '', 0) }}</p>
        </div>
      </li>
      <li>
        <div class="left"><notebook class="icon" /></div>
        <div class="right">
          <p>学分总计</p>
          <p>{{ Util.currency(blockData.score, '', 0) }}</p>
        </div>
      </li>
    </div>

    <!-- <el-button type="primary" icon="Edit">编辑</el-button>
        <el-button size="mini" type="primary" class="#f00" icon="More" title="详情" />
        <el-icon>
          <delete />
        </el-icon> -->

    <!-- <div class="big-title">MBA学生活动学分管理系统</div> -->
    <div class="echart">
      <div id="index"></div>
      <div id="right"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  // 组件引用部分========
  import { onMounted, reactive, ref } from 'vue';
  import * as echarts from 'echarts';
  import Data from './json';
  import router from '../../router';
  import Util from '../../utils/util';

  const blockData = reactive({
    students: 1245,
    activitys: 234,
    pertime: 98765,
    score: 98340
  });

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
        text: '学分活动图谱',
        x: 'center'
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
          },
          textStyle: {
            color: '#555',
            fontSize: 12
          }
        }
      ]
    });
  };

  const setLS = (v: Boolean) => {
    if (!v) {
      router.push('/log');
    } else {
      stuentInfo();
      right();
      router.push('/');
    }
  };

  onMounted(() => {
    setLS(Boolean(Util.checkLogin()));
  });
</script>

<style lang="less" scoped>
  .default-view {
    display: block;

    .block-square {
      display: flex;
      // justify-content: space-around;
      flex-wrap: wrap;

      li {
        display: flex;
        justify-content: space-between;
        min-width: 180px;
        width: 22%;
        margin-right: 4%;
        box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
        border-color: rgba(0, 0, 0, 0.05);
        &:last-child {
          margin-right: 0;
        }
        background: #fff;
        .icon {
          width: 40px;
          color: #028bff;
        }
        &:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, 20%);
        }
      }

      .left {
        width: 70px;
        height: 70px;
        // background: #eb461d;
        display: flex;
        justify-content: center;
        align-content: center;
      }
      .right {
        flex: auto;
        // background: #ddd;
        padding-right: 16px;
        p {
          text-align: right;
          font-size: 20px;
          color: #8c8c8c;
          line-height: 35px;

          &:last-child {
            color: #666;
            font-weight: 700;
            line-height: 30px;
            font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
              Arial, sans-serif;
          }
        }
      }
    }

    .big-title {
      display: flex;
      justify-content: center;
      font-size: 40px;
      padding: 30px;
      font-weight: 700;
      background: -webkit-linear-gradient(45deg, #eb461d, #1024db, #1b6d33, #552bd3, #7d8a0c);
      color: transparent;
      -webkit-background-clip: text;
      animation: dongtai 10s linear infinite;
    }

    .echart {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      #index {
        background: #fff;
        width: 700px;
        height: 700px;
        margin-right: 16px;
      }
      #right {
        width: 800px;
        height: 700px;
        background: #fff;
      }
    }
  }

  @keyframes dongtai {
    from {
      backgroud-position: 0 0;
    }
    to {
      background-position: 1200px 0;
    }
  }
</style>
