<!--
 * @Author: your name
 * @Date: 2021-08-03 17:32:56
 * @LastEditTime: 2022-03-16 17:57:16
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /score/src/views/admin/view.vue
-->
<template>
  <section class="content">
    <!-- <div> {{ msg }}</div> -->
    <div>
      <table-option :optionData="options.data" @optionChange="optionChange" />
      <table-list :tableData="tableData.data" @operate="handleOperate" />
      <pages :total="1090" @currentPage="currentPage" />
    </div>
  </section>
</template>

<script lang="ts">
  // 组件引用部分========
  import { ref, defineComponent, computed, onMounted, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { key } from '../../store';
  import TableOption from '../../components/library/table-options.vue';
  import TableList from '../../components/library/table-list.vue';
  import Pages from '../../components/library/pagination.vue';
  import { log } from 'console';

  // 代码逻辑开始========
  export default defineComponent({
    name: 'Default',
    components: {
      TableOption,
      TableList,
      Pages,
    },
    setup: () => {
      const store = useStore(key);
      const msg = computed(() => store.state.count);
      const optionParams = reactive({ obj: {} });
      const options = reactive({
        data: [
          {
            value: 'id',
            type: 'input',
            label: '用户id',
            default: '',
          },
          {
            value: 'date',
            type: 'daterange',
            label: '日期',
            default: ['2022-03-10', '2022-03-15'],
          },
          {
            value: 'type',
            type: 'select',
            label: '是否新流程',
            default: 1,
            options: [
              {
                value: 0,
                label: '否',
              },
              {
                value: 1,
                label: '是',
              },
            ],
          },
          {
            value: 'type_a',
            type: 'select',
            label: '是否新流程',
            default: '',
            options: [
              {
                value: 0,
                label: 'aaaaa',
              },
              {
                value: 1,
                label: 'bbbbb',
              },
            ],
          },
        ],
      });
      const tableData = reactive({
        data: {
          tabletitle: [
            {
              value: 'date',
              label: '时间',
            },
            {
              value: 'name',
              label: '姓名',
            },
            {
              value: 'address',
              label: '地址',
            },
            {
              value: 'operate',
              label: '操作',
            },
          ],
          tablelist: [
            {
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
              operate: [
                {
                  value: 'view',
                  label: '查看',
                },
                {
                  value: 'edit',
                  label: '编辑',
                },
                {
                  value: 'delete',
                  label: '删除',
                },
              ],
            },
            {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
              operate: [
                {
                  value: 'view',
                  label: '查看',
                },
                {
                  value: 'edit',
                  label: '编辑',
                },
                {
                  value: 'delete',
                  label: '删除',
                },
              ],
            },
            {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
              operate: [
                {
                  value: 'view',
                  label: '查看',
                },
                {
                  value: 'edit',
                  label: '编辑',
                },
                {
                  value: 'delete',
                  label: '删除',
                },
              ],
            },
            {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
              operate: [
                {
                  value: 'view',
                  label: '查看',
                },
                {
                  value: 'edit',
                  label: '编辑',
                },
                {
                  value: 'delete',
                  label: '删除',
                },
              ],
            },
          ],
        },
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

      // 返回当前页面所有使用的数据跟逻辑========
      return {
        msg,
        options,
        tableData,
        optionChange,
        optionParams,
        handleOperate,
        currentPage,
      };
    },
  });
</script>

<style scoped>
  .content {
    display: block;
  }
</style>
