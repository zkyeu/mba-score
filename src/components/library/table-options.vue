<!--
 * @Author: your name
 * @Date: 2022-03-16 08:07:09
 * @LastEditTime: 2022-03-27 15:36:38
 * @LastEditors: liliang
 * @Description: 
 * @FilePath: /mba-score/src/components/library/table-options.vue
-->
<template>
  <section class="lib-option-list">
    <template v-for="(item, index) in optionData">
      <!-- 输入框 -->
      <div v-if="item.type === 'input' || item.type === 'text'" class="option-input" :key="index">
        <label>{{ item.label }}：</label>
        <el-input
          v-model="dataBox.data[item.value]"
          :placeholder="'请输入' + item.label"
          clearable
          @clear="optionChange"
          @blur="optionChange"
        />
      </div>

      <!-- 输入区间框 -->
      <div
        v-if="item.type === 'inputrange' && item.range.length"
        class="option-inputrange"
        :key="index"
      >
        <label>{{ item.label }}：</label>
        <div class="input-range-block">
          <el-input-number
            v-model="dataBox.data[item.value + '_start']"
            :step="0.1"
            :min="0.1"
            :max="100"
            :precision="1"
            :controls="false"
            @clear="optionChange"
            @blur="optionChange"
          />
          <span style="padding: 0 5px">至</span>
          <el-input-number
            v-model="dataBox.data[item.value + '_end']"
            :step="0.1"
            :min="0.1"
            :max="100"
            :precision="1"
            :controls="false"
            @clear="optionChange"
            @blur="optionChange"
          />
        </div>
      </div>

      <!-- 时间区间 -->
      <div
        v-if="item.type === 'daterange' || item.type === 'datetimerange'"
        :class="item.type === 'daterange' ? 'option-daterange' : 'option-datetimerange'"
        :key="index"
      >
        <label>{{ item.label }}：</label>
        <el-date-picker
          v-model="dataBox.data[item.value]"
          :type="item.type"
          align="right"
          range-separator="至"
          :start-placeholder="item.type === 'daterange' ? '开始日期' : '开始时间'"
          :end-placeholder="item.type === 'daterange' ? '结束日期' : '结束时间'"
          :format="item.type === 'daterange' ? 'YYYY-MM-DD' : 'YYYY-MM-DD H:mm:ss'"
          :value-format="item.type === 'daterange' ? 'YYYY-MM-DD' : 'YYYY-MM-DD H:mm:ss'"
          @change="optionChange"
        />
      </div>

      <!-- 日期 -->
      <div v-if="item.type === 'date'" class="option-date" :key="index + item.value">
        <label>{{ item.label }}：</label>
        <el-date-picker
          v-model="dataBox[item.value]"
          type="date"
          align="right"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
          @change="optionChange"
        />
      </div>

      <!-- 下拉框 -->
      <div v-if="item.type === 'select'" class="option-select" :key="index">
        <label>{{ item.label }}：</label>
        <template v-if="item.depends">
          <el-select
            v-model="dataBox[item.value]"
            clearable
            :multiple="item.multiple"
            :filterable="item.filterable"
            collapse-tags
            :placeholder="'请选择' + item.label"
            :disabled="!dataBox[item.depends]"
            @change="optionChange"
          >
            <el-option
              v-for="o in item.options[dataBox[item.depends]]"
              :key="o.value"
              :label="o.label"
              :value="o.value"
            />
          </el-select>
        </template>
        <template v-else>
          <el-select
            v-model="dataBox.data[item.value]"
            clearable
            filterable
            :multiple="item.multiple"
            collapse-tags
            :placeholder="'请选择' + item.label"
            @change="optionChange"
          >
            <el-option v-for="o in item.options" :key="o.value" :label="o.label" :value="o.value" />
          </el-select>
        </template>
      </div>
    </template>
  </section>
</template>

<script lang="ts">
  import { ref, defineComponent, reactive, onMounted } from 'vue';
  export default defineComponent({
    name: 'TableOptions',
    props: {
      optionData: Object
    },
    setup: (props, ctx) => {
      const dataBox: any = reactive({ data: {} });

      const optionChange = () => {
        ctx.emit('optionChange', dataBox.data);
      };

      const initDefault = (o: any) => {
        if (!o) return;
        for (const item of o) {
          // console.log(o);

          if (item.type === 'inputrange') {
            dataBox.data[item.value + '_' + item.range[0]] = null;
            dataBox.data[item.value + '_' + item.range[1]] = null;
          } else {
            dataBox.data[item.value] = item.default;
          }
        }
      };

      onMounted(() => {
        initDefault(props.optionData);
      });

      return {
        dataBox,
        optionChange,
        initDefault
      };
    }
  });
</script>

<style lang="less" scoped>
  @common-option: {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 20px 14px 0;
  };

  .lib-option-list {
    display: flex;
    flex-wrap: wrap;

    label {
      display: inline-block;
      color: #606266;
      word-break: keep-all;
    }

    .option-date,
    .option-daterange,
    .option-datetimerange,
    .option-inputrange,
    .option-input,
    .option-select {
      @common-option();
    }
    .el-range-editor.el-input__inner {
      padding: 3px 1px 3px 10px;
    }
    :deep(.el-tag.el-tag--info) {
      background-color: rgb(247, 248, 251);
      color: rgb(51, 51, 51);
      border-color: #dde9ff;
    }
    :deep(.el-date-editor--datetimerange) {
      width: 360px;
    }
    :deep(.option-inputrange) {
      .input-range-block {
        display: flex;
        align-items: center;
        width: 160px;
      }
    }
    :deep(.el-date-editor--time-select) {
      width: 116px;
    }
    :deep(.el-date-editor--daterange),
    .el-date-editor--timerange {
      width: 270px;
      .el-range-separator {
        width: 17px;
      }
    }
    :deep(.el-date-editor--date) {
      width: 140px;
    }
    .input-with-select-wrapper {
      display: flex;
      margin-right: 20px;
      .option-select.el-select.el-select--mini,
      .option-input.el-input.el-input--mini {
        @common-option();
        :deep(.el-input .el-input__inner) {
          width: 140px;
        }
      }
      .line-wrapper {
        display: flex;
      }
      .line {
        display: inline-block;
        width: 40px;
        height: 1px;
        margin: 14px 6px 0 -14px;
        background-color: #606266;
      }
    }
    .input-with-select :deep(.el-input-group__prepend) {
      background-color: #fff;
      .el-input {
        width: 100px;
      }
    }
    :deep(.option-select-input) {
      .item-select {
        input {
          border-radius: 0;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }
      .item-input {
        margin-left: -2px;
        input {
          border-radius: 0;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
  }
</style>
