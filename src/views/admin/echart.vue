<!--
 * @Author: liliang
 * @Date: 2022-03-23 10:10:14
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-28 09:01:55
 * @FilePath: /score/src/views/admin/echart.vue
 * @Description: 
-->

<template>
  <section class="content">
    <div class="big-title">MBA学生活动学分管理系统</div>
    <div class="echart">
      <div id="index"></div>
      <div id="right"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  // 组件引用部分========
  import { onMounted } from 'vue';
  import * as echarts from 'echarts';
  import Data from './json';
  import router from '../../router';
  import Util from '../../utils/util';

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
      animation: dongtai 10s linear infinite;
    }

    .echart {
      display: flex;
      justify-content: space-between;
      #index {
        width: 800px;
        height: 700px;
      }
      #right {
        width: 800px;
        height: 700px;
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
