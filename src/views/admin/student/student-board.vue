<!--
 * @Author: your name
 * @Date: 2022-03-19 00:34:51
 * @LastEditTime: 2022-03-27 17:38:33
 * @LastEditors: liliang
 * @Description: 
 * @FilePath: /mba-score/src/views/admin/student/student-board.vue
-->

<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">学生信息看板</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="board-content">
      <div id="student"></div>
      <div id="example"></div>
      <div id="score"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus, Promotion, Download, UploadFilled } from '@element-plus/icons-vue';
  import TableOption from '../../../components/library/table-options.vue';
  import TableList from '../../../components/library/table-list.vue';
  import Pages from '../../../components/library/pagination.vue';
  import { ElMessageBox, FormInstance, ElMessage } from 'element-plus';
  import * as echarts from 'echarts';

  const handleClick = (v: any, o: any) => {
    switch (v) {
      case 'downImport':
        break;
      default:
    }
  };

  const stuentInfo = () => {
    var myChart = echarts.init((document as any).getElementById('student'));
    myChart.setOption({
      title: {
        text: 'MBA2021级学生信息',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        data: ['男', '女', 'ZF21081', 'ZF21082', 'ZF21083', 'ZF21084', 'ZF21085', 'ZF21086'],
        bottom: true
      },
      series: [
        {
          name: '性别',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 16
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 178, name: '女' },
            { value: 174, name: '男' }
          ]
        },
        {
          name: '班级人数',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30
          },
          label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          },
          data: [
            { value: 78, name: 'ZF21081' },
            { value: 47, name: 'ZF21082' },
            { value: 54, name: 'ZF21083' },
            { value: 56, name: 'ZF21084' },
            { value: 56, name: 'ZF21085' },
            { value: 58, name: 'ZF21086' }
          ]
        }
      ]
    });
  };

  const example = () => {
    const lizi = echarts.init((document as any).getElementById('example'));
    lizi.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['新生入学向导', '社会实践', '社会公益', '社会导师', '赛事', '企业参观', '文体活动']
      },
      series: [
        {
          name: '新生入学向导',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: '社会实践'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: '社会公益',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '社会导师',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '赛事',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: '企业参观',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    });
  };

  const score = () => {
    const lizi = echarts.init((document as any).getElementById('score'));
    lizi.setOption({
      title: {
        text: '活动学分汇总'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['全部学生', '过半学分', '修满学分', '榜样', '标杆']
      },
      series: [
        {
          name: 'Expected',
          type: 'funnel',
          left: '10%',
          width: '80%',
          label: {
            formatter: '{b}'
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            opacity: 0.7
          },
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b}学生: {c}%'
            }
          },
          data: [
            { value: 60, name: '修满学分' },
            { value: 40, name: '榜样' },
            { value: 20, name: '危险学生' },
            { value: 80, name: '过半学分' },
            { value: 100, name: '全部学生' }
          ]
        },
        {
          name: 'Actual',
          type: 'funnel',
          left: '10%',
          width: '80%',
          maxSize: '80%',
          label: {
            position: 'inside',
            formatter: '{c}%',
            color: '#fff'
          },
          itemStyle: {
            opacity: 0.5,
            borderColor: '#fff',
            borderWidth: 2
          },
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b}Actual: {c}%'
            }
          },
          data: [
            { value: 10, name: '榜样' },
            { value: 25, name: '修满学分' },
            { value: 5, name: '危险学生' },
            { value: 60, name: '过半学分' },
            { value: 100, name: '全部学生' }
          ],
          z: 100
        }
      ]
    });
  };

  onMounted(() => {
    // let arr = [{ a: 1 }, { b: 2 }];
    // let is = arr.map((item, index) => {
    //   let obj = { ...item };
    //   return obj;
    // });
    // console.log(is);
    stuentInfo();
    example();
    score();
  });
</script>

<style lang="less" scoped>
  @import url('../../../assets/style/init.less');
  .single-page {
    display: block;

    .bread {
      background: @root-color-f5;
      padding: 11px;
    }

    .board-content {
      display: flex;
      flex-wrap: wrap;

      #student,
      #example {
        margin: 16px 0;
        width: 600px;
        height: 550px;
      }
      #score {
        width: 80vw;
        height: 700px;
      }
    }
  }
</style>
