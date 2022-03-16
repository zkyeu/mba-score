<!--
 * @Author: liliang
 * @Date: 2022-03-16 21:38:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-17 00:43:43
 * @FilePath: /score/src/components/library/dialog.vue
 * @Description: 
-->
<template>
  <section class="dialog-layer">
    <el-dialog v-model="show" :title="title" :before-close="handleClose" draggable :width="width">
      <slot name="dialogBody"></slot>
      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClick('no')">Cancel</el-button>
          <el-button type="primary" @click="handleClick('yes')">Confirm</el-button>
        </span>
      </template> -->
    </el-dialog>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { ElMessageBox } from 'element-plus';

  const props = defineProps({
    show: Boolean,
    title: String,
    width: String,
  });

  const emit = defineEmits(['btnClick', 'change', 'delete']);

  const dialogVisible = ref(false);

  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done();
      })
      .catch(() => {
        // catch error
      });
  };

  const handleClick = (v: string) => {
    let boo = false;
    let obj: any = {};
    if (v === 'yes') {
      obj['a'] = 1;
    }
    emit('btnClick', {
      boo: boo,
      obj: obj,
    });
  };

  onMounted(() => {
    console.log('===>', props.title);
  });
</script>

<style lang="less" scoped>
  .dialog-layer {
    background: #c00;
    :deep(.el-dialog__body) {
      padding: 10px 20px;
    }
  }
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
