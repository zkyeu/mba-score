<!--
 * @Author: your name
 * @Date: 2022-01-06 14:19:28
 * @LastEditTime: 2022-03-16 22:52:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vvt/src/views/frontend/login/login.vue
-->
<template>
  <section class="login">
    <div class="header">
      <div class="between">
        <div class="logo">
          <img src="../../../assets/logo.svg" alt="" width="80" height="80" />
        </div>
        <div class="nav">
          <span @click="handleBtn('index')">首页</span>
          <span @click="handleBtn('contact')">联系我</span>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="content-login">
        <div class="login-type" @click="changeLoginType">
          <img v-if="loginType === 'code'" src="../../../assets/imgs/web.png" />
          <img v-else src="../../../assets/imgs/code.png" />
        </div>
        <template v-if="loginType === 'web'">
          <div>
            <h1 class="ys">欢迎登录</h1>
            <div class="login-check form">
              <el-form ref="ruleFormRef" :model="ruleForm" label-width="70px" size="middle">
                <el-form-item label="用户名" prop="userName">
                  <el-input
                    v-model="ruleForm.data.userName"
                    placeholder="请输入用户名"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                  <el-input
                    v-model="ruleForm.data.pwd"
                    type="password"
                    placeholder="密码8-16位长度"
                    clearable
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="handleBtn('login')">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </template>
        <template v-else>
          <div>
            <h1 class="ys">扫码登录</h1>
            <div class="login-check code">
              <img :src="qrCode" />
              <div class="flash" v-if="false">
                <span>二维码已失效</span>
                <div class="btton" @click="fetchCode">点击刷新</div>
              </div>
            </div>
          </div>
        </template>

        <div class="policy"
          >登录即表示你同意<span @click="handleBtn('index')">《隐私政策》</span></div
        >
        <div class="policy reg">没账号？去<span @click="handleBtn('reg')">注册</span>一个</div>
      </div>
    </div>
    <div class="foot"></div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onMounted, reactive } from 'vue';
  import { useGlobalConfig, getScrollTop, getScrollHeight } from '../../../utils/util';
  const { $http, $confirm, $message } = useGlobalConfig();
  import router from '../../../router';
  const show = ref('index');
  const qrCode = ref('');
  const code = ref();
  const loginType = ref('web');
  const ruleForm = reactive({
    data: {
      userName: '',
      pwd: ''
    }
  });
  // 切换导航
  // TODO 目前没做
  const handleBtn = (v: string) => {
    show.value = v;
    switch (v) {
      case 'reg':
        router.push('/reg');
        break;
      case 'login':
        loginWeb();
        break;
      default:
    }
  };

  const loginWeb = () => {
    let userName = ruleForm.data.userName;
    let password = ruleForm.data.pwd;
    if (!userName) {
      return $message.warning('请输入用户名');
    }
    if (!password) {
      return $message.warning('请输入用密码');
    }
    $http
      .login({
        type: loginType.value,
        userName: userName,
        password: password
      })
      .then((res: any) => {
        if (res.errNo === 0) {
          console.log(res);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const getCode = () => {
    $http
      .getcode()
      .then((res: any) => {
        if (res.errNo === 0) {
          console.log(res);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  // 获取二维码
  const fetchCode = () => {
    $http
      .login({
        type: 'code'
      })
      .then((res: any) => {
        if (res.errNo === 0) {
          console.log(res);
          qrCode.value = res.data;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  // 更新登录方式
  const changeLoginType = () => {
    if (loginType.value === 'web') {
      loginType.value = 'qrcode';
      fetchCode();
    } else {
      loginType.value = 'web';
    }
  };
  onMounted(() => {
    changeLoginType();
    // getCode();
  });
</script>

<style lang="less" scoped>
  .login {
    .header {
      display: flex;
      justify-content: center;
      background-color: #fff;
      height: 100px;
      .between {
        display: flex;
        align-items: center;
        width: 1000px;

        .nav {
          margin-left: 200px;
          span {
            font-size: 20px;
            font-weight: 300;
            padding: 20px 30px;
            cursor: pointer;
            margin-right: 20px;
            &:hover {
              background-color: rgb(236, 245, 255);
              font-weight: 700;
            }
          }
        }
      }
    }

    .body {
      display: flex;
      justify-content: center;
      height: calc(100vh - 100px);
      .content-login {
        position: relative;
        margin-top: 100px;
        width: 400px;
        height: 440px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 80px #ccc;
        .login-type {
          position: absolute;
          right: 0;
          top: 0;
          width: 56px;
          height: 56px;
          cursor: pointer;
          z-index: 99;
          img {
            width: 56px;
            height: 56px;
          }
        }
        h1 {
          text-align: center;
          height: 100px;
          line-height: 100px;
        }
        .login-check {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
          margin: 0 auto;
          &.form {
            width: 300px;
            :deep(.el-form) {
              width: 100%;
            }
          }
          &.code {
            width: 200px;
            height: 198px;
            border: solid 1px #eee;
          }
          img {
            width: 170px;
            height: 170px;
          }
          .flash {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: absolute;
            left: 0;
            top: 0;
            width: 200px;
            height: 200px;
            background: rgba(255, 255, 255, 0.9);
            z-index: 99;
          }
          .btton {
            background-color: #0052ff;
            color: #fff;
            text-align: center;
            padding: 5px 20px;
            border-radius: 3px;
            margin-top: 20px;
            cursor: pointer;
            &:hover {
              background-color: #3773f3;
            }
          }
        }

        .policy {
          margin-top: 50px;
          text-align: center;
          color: #999;
          span {
            color: #028bff;
            cursor: pointer;
            &:hover {
              color: #016efc;
            }
          }
          &.reg {
            margin-top: 20px;
            span {
              font-weight: 700;
            }
          }
        }
      }
    }
    .ys {
      font-weight: 500;
      font-size: 22px;
      color: #8c888b;
      background: -webkit-linear-gradient(45deg, #4845e9, #f58f60, #f0d343, #189718, #225eb3);
      color: transparent;
      -webkit-background-clip: text;
      animation: ran 30s linear infinite;
    }

    @keyframes ran {
      from {
        backgroud-position: 0 0;
      }
      to {
        background-position: 2000px 0;
      }
    }
  }
</style>
