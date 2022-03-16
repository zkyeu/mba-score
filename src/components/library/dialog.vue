<!--
 * @Author: liliang
 * @Date: 2022-03-16 21:38:31
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-16 21:40:21
 * @FilePath: /score/src/components/library/dialog.vue
 * @Description: 
-->
<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose" draggable>
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessageBox } from 'element-plus';

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
</script>

<style lang="less" scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
