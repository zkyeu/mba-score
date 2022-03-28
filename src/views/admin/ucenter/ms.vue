<!--
 * @Author: liliang
 * @Date: 2022-03-26 18:41:46
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-26 20:49:21
 * @FilePath: /score/src/views/admin/ucenter/ms.vue
 * @Description: 
-->

<template>
  <section class="single-page">
    <div class="bread">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">MBA信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="message">
      <h1
        ><el-icon><tickets /></el-icon>信息列表</h1
      >
      <div class="list">
        <li v-for="i in 20">
          <div class="title"> <span>✈</span>这里是新闻标题内容信息</div>
          <div class="date">2022-03-30</div>
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
        console.log(0);

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

    .message {
      background: #fff;
      margin: 5px 0;
      h1 {
        display: flex;
        align-items: center;
        border-bottom: solid 1px #ddd;
        line-height: 40px;
        padding: 0 16px;
        font-size: 16px;
        i {
          margin-right: 5px;
        }
      }
      .list {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 16px;
          border-bottom: dotted 1px #ddd;
          padding: 0 16px;

          .title {
            align-items: center;
            height: 50px;
            line-height: 50px;
            flex: 1;
            span {
              display: inline-block;
              width: 10px;
              height: 20px;
              font-size: 20px;
              margin-right: 8px;
            }
          }
          &:hover {
            cursor: pointer;
            background: #f5f5f5;
            color: #028bff;
            span {
              color: #028bff;
              transform: rotate(-45deg);
              transition: transform 1s linear;
              transform-origin: 80% 90%;
            }
          }
        }
      }
    }
  }
</style>
