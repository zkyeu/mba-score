<!--
 * @Author: liliang
 * @Date: 2022-03-22 11:11:41
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-25 12:08:52
 * @FilePath: /score/src/views/admin/log.vue
 * @Description: 
-->
<template>
  <section class="log-layer">
    <div class="logo"><img src="../../assets/imgs/buaalogo.png" /></div>
    <!-- <div class="logo"></div> -->
    <div class="bg">
      <div class="form">
        <div class="tips-a">账号密码登录</div>
        <div class="tips-b">网站管理员用户可直接登录</div>
        <el-input v-model="input" placeholder="请输入登录用户名" clearable size="large" />
        <el-input
          v-model="pwd"
          type="password"
          placeholder="请输入登录密码"
          clearable
          size="large"
          @keyup.enter="login"
        />
        <div class="log-btn" @click="login">登 录</div>
        <div class="count">默认用户名:<span>admin</span> 密码:<span>mba2108</span></div>
      </div>
    </div>
    <div class="copyright"> Copyright © 2022 BUAA MBA All Rights Reserved </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, defineComponent, computed, onMounted, reactive } from 'vue';
  import router from '../../router/index';
  import { ElMessage } from 'element-plus';
  const input = ref('admin');
  const pwd = ref('');
  const login = () => {
    if (!input.value) {
      ElMessage.warning('请输入【用户名】');
    } else if (input && input.value != 'admin') {
      ElMessage.warning('【用户名】不正确，请重新输入');
    } else if (!pwd.value) {
      ElMessage.warning('请输入【登录密码】');
    } else if (pwd && pwd.value != 'mba2108') {
      ElMessage.warning('【登录密码】不正确，请重新输入');
    } else {
      let LS = window.sessionStorage;
      LS.setItem('acms', '1');
      router.push('/');
    }
  };
</script>

<style lang="less" scoped>
  .log-layer {
    width: 100vw;
    height: 100vh;
    min-height: 500px;
    overflow: hidden;
    // padding: 40px 40px 20px;
    background: #040452;
    position: relative;
    .logo {
      position: absolute;
      left: 50px;
      top: 50px;
      width: 150px;
      height: 100px;
      // background: #fff;
      img {
        width: 160px;
      }
    }
    .bg {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: calc(100vw - 100px);
      height: calc(100vh - 200px);
      background: url(../../assets/imgs/login_bg.png) no-repeat;
      background-size: contain;
      margin-top: 100px;
      .form {
        width: 300px;
        background: #fff;
        margin-right: 10%;
        padding: 50px 35px;
        max-height: 480px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 10px 15px 40px 20px rgba(255, 255, 255, 0.3);

        .tips-a {
          line-height: 28px;
          font-size: 18px;
          margin-bottom: 5px;
          font-weight: 700;
        }
        .tips-b {
          color: #999;
          font-size: 14px;
          margin-bottom: 25px;
        }

        .log-btn {
          background: #028bff;
          font-size: 16px;
          color: #fff;
          text-align: center;
          border-radius: 3px;
          height: 40px;
          line-height: 40px;
          margin-top: 20px;
          cursor: pointer;
          &:hover {
            background: #066ef5;
          }
        }

        .count {
          padding-top: 20px;
          color: #999;
          text-align: center;
          span {
            color: #555;
            margin-right: 30px;
          }
        }

        :deep(.el-input) {
          padding: 10px 0;
          letter-spacing: 4px;
        }
      }
    }
    .copyright {
      position: absolute;
      width: 100vw;
      bottom: 10px;
      text-align: center;
      color: #fff;
    }
  }
</style>
