<!--
 * @Author: liliang | zkyeu@163.com
 * @Date: 2022-03-18 21:55:21
 * @LastEditors: liliang
 * @LastEditTime: 2022-04-07 18:12:37
 * @FilePath: /score/src/components/admin/left-nav.vue
-->

<template>
  <section class="left-navs">
    <!-- <template v-for="(m, i) in leftNav" :key="i.id">
      <div class="title" @click="handleClick('')">
        <el-icon>
          <component :is="m.icon" />
        </el-icon>
        <h1>{{ m.title }}</h1>
        <el-icon><arrow-up /></el-icon>
      </div>

      <template v-if="m.child.length">
        <div
          v-for="(sm, j) in m.child"
          :key="sm.id"
          class="sub-title"
          @click="handleClick(sm.router)"
        >
          {{ sm.title }}
        </div>
      </template>
    </template> -->

    <el-menu
      :uniqueOpened="false"
      default-active="/"
      class="left-nav-menu"
      router
      active-text-color="#028bff"
      :default-openeds="['1', '2', '7', '713']"
    >
      <template v-for="item in leftNav">
        <el-menu-item
          :index="item.router"
          :key="item.router"
          v-if="!item.child"
          class="first-class"
        >
          <el-icon :icon="item.icon"></el-icon>
          <template #title></template>
        </el-menu-item>
        <el-sub-menu :index="String(item.id)" :key="String(item.id)" v-else>
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <!-- <el-icon v-if="item.icon === 'User'"><User /></el-icon>
            <el-icon v-if="item.icon === 'Key'"><Key /></el-icon>
            <el-icon v-if="item.icon === 'Trophy'"><Trophy /></el-icon>
            <el-icon v-if="item.icon === 'Soccer'"><Soccer /></el-icon>
            <el-icon v-if="item.icon === 'Operation'"><Operation /></el-icon> -->
            <span class="first-class">{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="sub in item.child" :key="sub.router" :index="sub.router">{{
              sub.title
            }}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, getCurrentInstance, reactive } from 'vue';
  import { useStore } from 'vuex';
  import router from '../../router/index';
  import { key } from '../../store';
  // import navData from './left-nav.js';
  import navData from './menu.json';

  const store = useStore(key);
  const leftNavData = computed(() => store.state.leftNav);
  const leftNav: any = ref(navData);
  const currentPath = ref('');

  // const handleOpen = (key: any, keyPath: any) => {
  //   console.log(key, keyPath);
  // };

  // const handleClose = (key: any, keyPath: any) => {
  //   console.log(key, keyPath);
  // };

  // const sele = (key: any, keyPath: any) => {
  //   console.log(key, keyPath);
  //   // router.push(key);
  // };
  const handleClick = (v: any) => {
    if (v) {
      router.push(v);
    }
  };
  onMounted(() => {
    // const { proxy }: any = getCurrentInstance();
    // router.push(proxy.$router.currentRoute.value.path);
    // router.push(router.currentRoute.value.path);
    // currentPath.value = router.currentRoute.value.path.replace('/', '');
  });
</script>

<style lang="less" scoped>
  .left-navs {
    // display: flex;
    width: 200px;
    // flex-direction: column;
    height: calc(100vh - 82px);
    padding-top: 10px;
    overflow-y: auto;
    .title {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 200px;
      height: 40px;
      background-color: #f6f6f6;
      margin-bottom: 4px;
      padding-left: 25px;
      cursor: pointer;
      i {
        margin-right: 10px;
      }
    }
    .sub-title {
      height: 40px;
      line-height: 40px;
      padding-left: 50px;
      cursor: pointer;
    }

    &:deep(.left-nav-menu) {
      width: 200px;
      border: none;

      .el-sub-menu__title,
      .el-menu-item {
        display: flex;
        align-items: center;
        height: 40px;
        line-height: 40px;
        padding: 0;
        &.is-active {
          background: #e6f7ff !important;
          border-right: #028bff solid 3px;
        }
      }

      .el-sub-menu [class^='el-icon-'],
      .el-menu-item [class^='el-icon-'] {
        margin-top: -1px;
      }

      .el-menu-item-group__title {
        display: none;
      }
      .el-menu-item-group .el-menu-item {
        padding-left: 50px !important;
      }
      .first-class {
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
</style>
