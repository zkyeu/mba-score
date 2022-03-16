<template>
  <section v-loading="loading" class="completed-table">
    <div class="completed-table-option">
      <table-options :optionData="listoptions" @option-change="filterChange" />
    </div>
    <div class="completed-table-list">
      <table-list
        :tableData="tableData"
        align="center"
        @handle-operation="handleOperation"
      />
    </div>
    <div class="completed-table-pages">
      <Pages
        :total="total"
        :pageSize="params.rn"
        :pageSizes="pageSizes"
        :current-page="params.pn"
        @current-change="currentPageChange"
        @size-change="sizeChange"
      />
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from 'vue-property-decorator';
import TableOptions from '@/components/library/table-options.vue';
import TableList from '@/components/library/table-list.vue';
import Pages from '@/components/library/pagination.vue';
import $http from '@/api/api';

interface ListRes {
  num: number;
  tabllelist: object[];
  tabletitle: object[];
}
interface OtherParams {
  option: { type: string };
  list?: object;
}
interface PathMap {
  option: string;
  list: string;
}
@Component({
  components: {
    TableList,
    TableOptions,
    Pages
  }
})
export default class CompletedTable extends Vue {
  @Prop({ default: {} }) readonly otherParams!: OtherParams;
  @Prop({ default: {} }) readonly pathMap!: PathMap;
  @Prop({ type: Array }) private pageSizes;

  listoptions: any = [];
  // 表格数据
  tableData: any = {};
  params: Object = {
    pn: 1,
    rn: 10
  };
  total: Number = 0;
  loading: Boolean = false;

  currentPageChange(pn) {
    this.params['pn'] = pn;
    this.fetchTableData();
  }
  sizeChange(rn) {
    this.params['rn'] = rn;
    this.fetchTableData();
  }
  /**
   * 参数data包含筛选更改的键值对
   */
  filterChange(data: object) {
    this.params = { ...this.params, ...data };
    this.params['pn'] = 1;

    this.fetchTableData();
  }

  @Emit()
  handleOperation(data) {
    return data;
  }
  // 初始化默认数据
  initDefaultParmas(state, source) {
    source.map((item) => {
      if (item.type === 'daterange') {
        if (JSON.stringify(item.default) === '[]') {
          state[item.value + '_starttime'] = '';
          state[item.value + '_endtime'] = '';
        }
      } else {
        state[item.value] = item.default;
      }
    });
  }
  // 请求筛选项目列表
  fetchOptions() {
    let type: string = this.otherParams.option.type;
    const data = { ...this.otherParams.option };
    $http[this.pathMap.option]({ data })
      .then((res: any) => {
        this.initDefaultParmas(this.params, res[type]);
        this.listoptions = res[type];
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  // 获取表格数据
  fetchTableData() {
    this.loading = true;
    const data = {
      ...this.params,
      ...this.otherParams.list
    };
    $http[this.pathMap.list]({ data })
      .then((res: ListRes) => {
        this.tableData = res;
        this.total = res.num;
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  fetchData() {
    this.fetchOptions();
    this.fetchTableData();
  }
  created() {
    const { rn = 10, pn = 1 } = this.$route.query;
    Vue.set(this.params, 'rn', Number(rn));
    Vue.set(this.params, 'pn', Number(pn));
  }
  mounted() {
    this.fetchData();
  }

  @Watch('otherParams', { deep: true })
  @Watch('pathMap', { deep: true })
  paramsChange() {
    this.fetchData();
  }

  @Watch('params', { deep: true })
  dataChange() {
    this.$emit('paramsChange', this.params);
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/style/variable.less';
.completed-table {
  .completed-table-option {
    padding: 20px 20px 10px;
    background-color: @color-white;
  }
  .completed-table-list {
    padding: 0 20px;
    background-color: @color-white;
  }
  .completed-table-pages {
    margin-top: 20px;
  }
}
</style>
