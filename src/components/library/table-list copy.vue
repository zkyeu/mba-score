<!--
 * @Author: liliang
 * @Date: 2022-04-07 17:48:05
 * @LastEditors: liliang
 * @LastEditTime: 2022-04-07 17:48:08
 * @FilePath: /score/src/components/library/table-list copy.vue
 * @Description: 
-->
<!--
 * @Author: liliang
 * @Date: 2022-03-16 08:07:09
 * @LastEditors: liliang
 * @LastEditTime: 2022-04-06 10:35:00
 * @FilePath: /score/src/components/library/table-list.vue
 * @Description: 
-->

<template>
  <section class="table-list">
    <el-table
      :ref="ref"
      :data="tableData.tablelist"
      style="width: 100%"
      :border="border"
      @selection-change="handleSelectionChange"
      :stripe="stripe"
      :row-key="rowKey"
      :default-expand-all="expand"
      :header-cell-style="{ background: '#f7f8fb', color: '#333' }"
    >
      <template v-if="canSelect">
        <el-table-column type="selection" width="38" />
      </template>

      <template v-for="(item, index) in tableData.tabletitle">
        <el-table-column
          v-if="item.value !== 'operate' && item.value !== 'colortitle'"
          :key="index"
          :prop="item.value"
          :label="item.label"
          :sortable="item.sortable"
          :align="item.align || align"
          :min-width="item.width"
          :class-name="item.class"
        >
        </el-table-column>
        <el-table-column
          v-else-if="item.value === 'colortitle'"
          :key="index + item.value"
          :prop="item.value"
          :label="item.label"
          :align="align"
          :min-width="item.width"
        >
          <template v-slot="scope">
            <span class="color-title" @click="handleOperate(item.value, scope.row)">
              {{ scope.row.colortitle }}
            </span>
          </template>
        </el-table-column>

        <el-table-column
          v-else
          :key="index + item.value + Math.random()"
          :prop="item.value"
          :label="item.label"
          :sortable="item.sortable"
          :align="align"
          :min-width="item.width || operateWidth"
          show-overflow-tooltip
          :fixed="item.fixed"
        >
          <template v-slot="scope">
            <span
              v-for="(oper, index) in scope.row.operate"
              :key="index + oper.value"
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

<script lang="ts" setup>
  import { ref } from 'vue';
  const props = defineProps({
    tableData: {
      type: Object,
      default: []
    },
    operateWidth: {
      type: String,
      default: '200px'
    },
    align: {
      type: String,
      default: 'center'
    },
    canSelect: {
      type: Boolean,
      default: false
    },
    ref: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: String,
      default: ''
    },
    expand: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['operate', 'tableSelection']);

  const handleOperate = (o: any, v: any) => {
    emit('operate', {
      operate: o,
      rowData: v
    });
  };

  const handleSelectionChange = (val: any) => {
    emit('tableSelection', val);
  };
</script>

<style lang="less" scoped>
  .table-list {
    // :deep(.el-table th.gutter) {
    //   display: table-cell !important;
    // }
    :deep(.color-title) {
      color: #028bff;
      font-weight: 500;
      cursor: pointer;
      text-align: left;
    }
    :deep(.operation-style) {
      padding: 3px 8px;
      color: #028bff;
      &:hover {
        cursor: pointer;
        font-weight: 700;
      }
      &.disabled {
        cursor: not-allowed;
        color: #aaa;
      }
    }
    :deep(.blue) {
      background: rgb(142, 166, 245);
    }
  }
</style>
