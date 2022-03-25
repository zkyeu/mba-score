<!--
 * @Author: your name
 * @Date: 2021-08-02 20:47:46
 * @LastEditTime: 2022-03-25 10:23:12
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
      <div class="user-center">
        <img src="../../assets/imgs/photo.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import router from '../../router';
  import { useStore } from 'vuex';
  import { key } from '../../store';

  const store = useStore(key);
  const home = () => {
    router.push('/');
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
        // height: 32px;
      }
    }
  }

  // @media screen and (min-width: 1201px) {
  //   .content-body {
  //     width: 1200px;
  //   }
  // }
  // @media screen and (max-width: 1200px) {
  //   .content-body {
  //     width: 800px;
  //   }
  // }
  // /* 设置了涉猎器宽度不大于1200px时 abc 显示900px宽度 */

  // @media screen and (max-width: 800px) {
  //   .content-body {
  //     width: 700px;
  //   }
  // }
</style>
