<!--
 * @Author: liliang
 * @Date: 2022-03-23 10:10:14
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-27 15:14:53
 * @FilePath: /mba-score/src/views/admin/default.vue
 * @Description: 网站首页打开预览页面
-->

<template>
  <section class="single-page">
    <div class="block-square" v-if="defaultData.blockData">
      <li>
        <div class="left"><avatar class="icon" /></div>
        <div class="right">
          <p>学生数量</p>
          <p>{{ Util.currency(defaultData.blockData.students, '', 0) }}</p>
        </div>
      </li>
      <li>
        <div class="left"><pie-chart class="icon" /></div>
        <div class="right">
          <p>活动累计</p>
          <p>{{ Util.currency(defaultData.blockData.activitys, '', 0) }}</p>
        </div>
      </li>
      <li>
        <div class="left"><notification class="icon" /></div>
        <div class="right">
          <p>活动人次</p>
          <p>{{ Util.currency(defaultData.blockData.pertime, '', 0) }}</p>
        </div>
      </li>
      <li>
        <div class="left"><notebook class="icon" /></div>
        <div class="right">
          <p>学分总计</p>
          <p>{{ Util.currency(defaultData.blockData.score, '', 2) }}</p>
        </div>
      </li>
    </div>
    <div class="block-square news-item">
      <div class="left">
        <h1>
          <span>
            <el-icon><alarm-clock /></el-icon>最近活动
          </span>
          <span>更多</span>
        </h1>
        <div class="list">
          <div v-for="(item, index) in defaultData.hdlist" :key="index">
            <p class="title">
              <span>✈</span>
              {{ item.title }}
            </p>
            <p class="date"> {{ item.date }}</p>
          </div>
        </div>
      </div>
      <div class="right" id="overview"></div>
    </div>

    <div class="echart">
      <div id="index"></div>
      <div id="right"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  // 组件引用部分========
  import { ref, onBeforeMount } from 'vue';
  import * as echarts from 'echarts';
  import Data from './json';
  import router from '../../router';
  import Util from '../../utils/util';
  import mockData from './mockData/default.json';
  import $http from '../../api';

  const defaultData = ref({});

  const overView = () => {
    var myChart = echarts.init((document as any).getElementById('overview'));
    myChart.setOption({
      title: {
        text: '近3年学生活动学分概览',
        x: 'center',
        y: 'bottom',
        padding: [20, 0, 0, 0]
      },
      legend: {
        padding: [10, 0, 0, 0]
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', '2020', '2021', '2022'],
          ['活动次数', 43, 56, 11],
          ['学分数量', 37, 62, 46],
          ['平均分', 9, 12.7, 6]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    });
  };

  const stuentInfo = () => {
    var myChart = echarts.init((document as any).getElementById('index'));
    myChart.setOption({
      title: {
        text: '班级成员数',
        subtext: 'MBA2021级',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        // orient: 'vertical',
        // left: 'left'
        bottom: 'bottom'
      },
      series: [
        {
          name: '2021级',
          type: 'pie',
          radius: '65%',

          data: [
            { value: 78, name: 'ZF21081班' },
            { value: 47, name: 'ZF21082班' },
            { value: 54, name: 'ZF21083班' },
            { value: 56, name: 'ZF21084班' },
            { value: 56, name: 'ZF21085班' },
            { value: 58, name: 'ZF21086班' }
          ],

          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  };

  const right = () => {
    var myChart = echarts.init((document as any).getElementById('right'));
    myChart.setOption({
      title: {
        // text: 'MBA2021级活动学分统计表',
        // show: true,
        // x: 'center',
        // y: 'bottom'
      },
      legend: {
        padding: [20, 0, 0, 0]
      },
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
      grid: { top: '15%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row'
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row'
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row'
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row'
        }
      ]
    });
  };

  const setLS = (v: Boolean) => {
    if (!v) {
      router.push('/log');
    } else {
      overView();
      stuentInfo();
      right();
      router.push('/');
    }
  };

  const getDefaultData = () => {
    $http
      .defaultView()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        defaultData.value = mockData;
        setLS(Boolean(Util.checkLogin()));
      });
  };

  onBeforeMount(() => {
    getDefaultData();
  });
</script>

<style lang="less" scoped>
  .single-page {
    display: block;

    .block-square {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 16px;

      li {
        display: flex;
        justify-content: space-between;
        min-width: 180px;
        width: 22%;
        margin-right: 4%;
        box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
        border: #fff 1px solid;
        box-sizing: border-box;
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
          background: #f5f5f5;
        }
        .left {
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-content: center;
        }
        .right {
          flex: auto;
          padding-right: 16px;
          p {
            text-align: right;
            font-size: 16px;
            color: #8c8c8c;
            line-height: 35px;

            &:last-child {
              font-size: 20px;
              color: #666;
              font-weight: 700;
              line-height: 30px;
              font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
                Arial, sans-serif;
            }
          }
        }
      }
    }

    .news-item {
      .left,
      .right {
        width: calc(50% - 8px);
        height: 205px;
        background: #fff;

        h1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px 0;
          span {
            display: flex;
            align-items: center;
            i {
              margin-right: 6px;
            }
          }
        }
      }
      .left {
        margin-right: 16px;

        .list {
          padding: 10px 16px;
          div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 28px;
            .title {
              min-width: 300px;
              max-width: calc(100% - 90px);
              display: block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #555;
              &:hover {
                color: #028bff;
                cursor: pointer;
                span {
                  color: #028bff;
                  transform: rotate(-45deg);
                  transition: transform 1s linear;
                }
              }
              span {
                font-size: 20px;
                margin-right: 8px;
                display: inline-block;
                width: 10px;
                height: 22px;
              }
            }
            .date {
              width: 90px;
              text-align: right;
              // background: #c00;
              color: #888;
            }
          }
        }
      }
      .right {
        #overview {
          width: 100%;
          height: 205px;
        }
      }
    }

    .echart {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      #index {
        background: #fff;
        width: calc(40% - 8px);
        height: 400px;
        margin-right: 16px;
      }
      #right {
        width: calc(60% - 8px);
        height: 400px;
        background: #fff;
      }
    }
  }
</style>
