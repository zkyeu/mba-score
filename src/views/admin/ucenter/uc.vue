<!--
 * @Author: liliang
 * @Date: 2022-03-26 18:41:46
 * @LastEditors: liliang
 * @LastEditTime: 2022-04-06 11:03:23
 * @FilePath: /score/src/views/admin/ucenter/uc.vue
 * @Description: 
-->

<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">账号与安全</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="detail">
      <h1
        ><el-icon><tickets /></el-icon>个人信息</h1
      >
      <div class="item">
        <li>
          <label>用户名：</label>
          <span>liliang</span>
        </li>
        <li>
          <label>姓名：</label>
          <span>李亮</span>
        </li>
        <li>
          <label>学号：</label>
          <span>ZF2108126</span>
        </li>
        <li>
          <label>电话：</label>
          <span>18500551311</span>
        </li>
      </div>
    </div>
    <div class="detail">
      <h1
        ><el-icon><setting /></el-icon>安全设置</h1
      >
      <div class="setting">
        <li>
          <div class="left">登录密码</div>
          <div class="center">安全性高的密码可以使账号更安全，建议您定期更换密码。</div>
          <div class="right">修改</div>
        </li>
        <li>
          <div class="left">邮箱绑定</div>
          <div class="center"
            >您的账户未绑定邮箱，将无法接收产品开通、到期、故障及关停等操作通知！</div
          >
          <div class="right">修改</div>
        </li>
        <li>
          <div class="left">手机绑定</div>
          <div class="center">您已绑定了手机，可接收账户安全信息验证。</div>
          <div class="right">修改</div>
        </li>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted, reactive } from 'vue';
  import { ArrowRight, Plus } from '@element-plus/icons-vue';

  const handleClick = (v: any) => {
    switch (v) {
      case 'add':
        // console.log(0);

        break;

      default:
    }
  };

  onMounted(() => {
    // console.log(myRef.value);
  });
</script>

<style lang="less" scoped>
  @import url('../../../assets/style/diy.less');
  .single-page {
    display: block;

    .detail {
      background: #fff;
      margin: 15px 0;
      padding: 16px;

      h1 {
        display: flex;
        align-items: center;
        border-bottom: solid 1px #ddd;
        line-height: 30px;
        i {
          margin-right: 5px;
        }
      }

      .item {
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        li {
          width: 50%;
          line-height: 50px;
          label {
            color: #666;
          }
        }
      }

      .setting {
        padding-top: 20px;
        li {
          display: flex;
          justify-content: space-between;
          height: 75px;
          align-items: center;
          border-bottom: #ddd dotted 1px;
          .left {
            font-weight: 700;
            width: 100px;
          }
          .center {
            flex: 1;
            color: #666;
          }
          .right {
            width: 80px;
            text-align: center;
            color: #7395db;
            cursor: pointer;
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
  }
</style>
