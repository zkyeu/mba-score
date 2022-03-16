<!--
 * @Author: liliang
 * @Date: 2022-03-16 08:07:09
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-16 21:25:56
 * @FilePath: /score/src/components/library/table-list.vue
 * @Description: 
-->

<template>
  <section class="table-list">
    <el-table :data="tableData.tablelist" style="width: 100%" border>
      <el-table-column type="selection" width="38" />
      <template v-for="(item, index) in tableData.tabletitle">
        <el-table-column
          v-if="item.value !== 'operate'"
          :key="index"
          :fixed="item.fixed"
          :prop="item.value"
          :label="item.label"
          :sortable="item.sortable"
          :align="align"
        >
        </el-table-column>

        <el-table-column
          v-else
          :key="index + Math.random()"
          :prop="item.value"
          :label="item.label"
          :sortable="item.sortable"
          :align="align"
          :width="item.width || operateWidth"
          show-overflow-tooltip
        >
          <template v-slot="scope">
            <span
              v-for="(oper, index) in scope.row.operate"
              :key="index + Math.random()"
              class="operation-style"
              :class="oper.disabled ? 'disabled' : ''"
              @click="handleOperate(oper.disabled ? '' : oper.value, scope.row)"
            >
              {{ oper.label }}
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'TableList',
    props: {
      tableData: Object,
      operateWidth: {
        type: String,
        default: '200px',
      },
      align: {
        type: String,
        default: 'center',
      },
    },
    setup: (props, ctx) => {
      const handleOperate = (o: any, v: any) => {
        ctx.emit('operate', {
          operate: o,
          rowData: v,
        });
      };

      return {
        handleOperate,
      };
    },
  });
</script>

<style lang="less" scoped>
  .table-list {
    :deep(.operation-style) {
      padding: 3px 8px;
      color: #2483ff;
      &:hover {
        cursor: pointer;
        font-weight: 700;
      }
      &.disabled {
        cursor: not-allowed;
        color: #aaa;
      }
    }
  }
</style>
