<!--
 * @Author: liliang
 * @Date: 2022-03-16 08:07:09
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-16 17:54:40
 * @FilePath: /score/src/components/library/pagination.vue
 * @Description: 
-->

<template>
  <section class="pages">
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      @size-change="sizeChange"
      @current-change="currentChange"
    />
    <!-- <el-pagination
      background
      :layout="layout"
      :total="total"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :current-page="currentPage"
      @size-change="sizeChange"
      @current-change="currentChange"
    /> -->
  </section>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  export default defineComponent({
    name: 'TableList',
    props: {
      total: Number,
      align: {
        type: String,
        default: 'center',
      },
    },
    setup: (props, ctx) => {
      const currentPage = ref(1);
      const postParams = reactive({
        page: {
          pn: 1,
          rn: 10,
        },
      });
      const currentPageFn = () => {};
      const sizeChange = (v: any) => {
        currentPage.value = 1;
        postParams.page.pn = 1;
        postParams.page.rn = v;
        ctx.emit('currentPage', postParams.page);
      };

      const currentChange = (v: any) => {
        currentPage.value = v;
        postParams.page.pn = v;
        ctx.emit('currentPage', postParams.page);
      };

      return {
        currentPage,
        postParams,
        sizeChange,
        currentChange,
        currentPageFn,
      };
    },
  });

  // @Prop({ type: Number, default: 0 }) private total!: 0;
  // @Prop({ type: Number, default: 10 }) private pageSize!: 0;
  // @Prop({ type: Number, default: 1 }) private currentPage!: 0;
  // @Prop({ type: Array }) private pageSizes;

  // @Emit()
  // currentChange(cp) {
  //   // console.log(cp);
  //   return cp;
  // }
  // @Emit()
  // sizeChange(rn) {
  //   return rn;
  // }
</script>

<style lang="less" scoped>
  .pages {
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }
</style>
