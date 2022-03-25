<!--
 * @Author: your name
 * @Date: 2021-08-02 20:47:46
 * @LastEditTime: 2022-03-25 16:19:23
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /score/src/components/front/header.vue
-->
<template>
  <div class="layer-header">
    <div class="logo" @click="home">
      <img src="../../assets/imgs/logo-white.png" />
      <h1 class="ys">活动学分管理系统</h1>
    </div>

    <div class="right-block">
      <div class="user-center" ref="buttonRef">
        <img src="../../assets/imgs/photo.png" />
      </div>
      <el-popover
        ref="popoverRef"
        :virtual-ref="buttonRef"
        trigger="hover"
        virtual-triggering
        width="120px"
      >
        <div class="u-layer">
          <li @click="cpw">修改密码</li>
          <li @click="logout">退出登录</li>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  import router from '../../router';
  import { useStore } from 'vuex';
  import { key } from '../../store';
  const buttonRef = ref();
  const store = useStore(key);
  const home = () => {
    router.push('/');
  };

  const logout = () => {
    ElMessage.warning('后面开发');
  };

  const cpw = () => {
    ElMessage.warning('后面开发改密码');
  };
</script>

<style lang="less" scoped>
  .layer-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    height: 72px;
    background: url('../../assets/imgs/header-banner.png') no-repeat;
    background-position: top;
    background-size: 1440px 72px;
    background-color: #028bff;
    z-index: 999;

    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;

      img {
        width: 240px;
        margin-right: 10px;
        &:hover {
          position: absolute;
          width: 300px;
          top: 0;
          left: 0;
          background: #fff;
        }
      }

      h1 {
        border-left: 2px #fff solid;
        padding: 1px 10px;
        color: #fefefe;
        font-size: 16px;
      }
    }
  }
  .right-block {
    display: flex;
    align-items: center;

    .user-center {
      width: 34px;
      height: 34px;
      border-radius: 20px;
      border: #ddd solid 1px;
      overflow: hidden;
      cursor: pointer;
      color: #ddd;
      img {
        width: 34px;
      }
    }
  }
</style>

<style lang="less">
  .u-layer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    // width: 100px;
    height: 100px;
    padding: 10px;
    li {
      width: 85%;
      cursor: pointer;
      padding: 10px;
      text-align: center;
      &:hover {
        background: #f5f5f5;
        font-weight: 700;
      }
    }
  }
</style>
