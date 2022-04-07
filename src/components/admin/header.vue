<!--
 * @Author: liliang
 * @Date: 2022-01-09 16:26:17
 * @LastEditors: liliang
 * @LastEditTime: 2022-04-07 18:13:18
 * @FilePath: /score/src/components/admin/header.vue
 * @Description: 
-->

<template>
  <div class="layer-header">
    <div class="logo" @click="home">
      <img src="../../assets/imgs/logo-white.png" />
      <h1 class="ys">活动学分管理系统</h1>
    </div>

    <div class="right-block">
      <div class="message" v-if="true" @click="handleClick('message')">
        <el-icon><message /></el-icon>
        <span>9</span>
      </div>
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
          <li @click="handleClick('cpw')">修改密码</li>
          <li @click="handleClick('logout')">退出登录</li>
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

  const handleClick = (v: any) => {
    switch (v) {
      case 'message':
        ElMessage.warning('后面开发消息功能');
        break;
      case 'logout':
        ElMessage.warning('后面开发');
        break;
      case 'cpw':
        ElMessage.warning('后面开发改密码');
        break;
      default:
    }
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

    .message {
      position: relative;
      top: 5px;
      cursor: pointer;
      i {
        width: 50px;
        height: 30px;
        margin-right: 16px;
        color: #fff;
        svg {
          width: 30px;
          height: 30px;
        }
      }
      span {
        display: block;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: #fff;
        border-radius: 10px;
        font-size: 10px !important;
        position: absolute;
        top: -5px;
        right: 16px;
        background: #d00;
      }
    }

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
