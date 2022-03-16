/*
 * @Author: liliang
 * @Date: 2022-01-25 10:10:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-16 22:48:38
 * @FilePath: /score/src/router/index.ts
 * @Description: 
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '@/views/admin/index.vue';
import index from '@/views/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/', // 后台首页
        component: () => import('@/views/admin/view.vue')
      },
      { // 活动系统
        path: 'activity',
        component: () => import('@/views/admin/activity/view.vue'),
        children: [
          {
            path: '/activity-classify',
            component: () => import('@/views/admin/activity/activity-classify.vue')
          },{
            path: '/activity-apply',
            component: () => import('@/views/admin/activity/activity-apply.vue')
          },
          {
            path: '/activity-search',
            component: () => import('@/views/admin/activity/activity-search.vue')
          },
          {
            path: '/activity-verify',
            component: () => import('@/views/admin/activity/activity-verify.vue')
          },

          // {
          //   path: '/admin/diy/basic',
          //   component: () => import('@/views/admin/diy/basic.vue')
          // },
          // {
          //   path: '/admin/diy/type',
          //   component: () => import('@/views/admin/diy/type.vue')
          // },
          // {
          //   path: '/admin/diy/tag',
          //   component: () => import('@/views/admin/diy/tag.vue')
          // },
        ]
      },
      { // 学生系统
        path: 'student',
        component: () => import('@/views/admin/student/view.vue'),
        children: [
          {
            path: '/student-info',
            component: () => import('@/views/admin/student/student-info.vue')
          },{
            path: '/student-add',
            component: () => import('@/views/admin/student/student-add.vue')
          }
        ]
      },
      { // 学分系统
        path: 'score',
        component: () => import('@/views/admin/score/view.vue'),
        children: [
          {
            path: '/score-input',
            component: () => import('@/views/admin/score/score-input.vue')
          },{
            path: '/score-search',
            component: () => import('@/views/admin/score/score-search.vue')
          },
          {
            path: '/score-rule',
            component: () => import('@/views/admin/score/score-rule.vue')
          },{
            path: '/score-activity',
            component: () => import('@/views/admin/score/score-activity.vue')
          }
        ]
      },
      { // 权限配置
        path: 'powers',
        component: () => import('@/views/admin/power/view.vue'),
        children: [
          {
            path: '/member',
            component: () => import('@/views/admin/power/member.vue')
          },
          {
            path: '/role',
            component: () => import('@/views/admin/power/role.vue')
          }

        ]
      },
      { // 数据看班
        path: 'board',
        component:  () => import('@/views/admin/board/view.vue'),
        children: [
          {
            path: '/board',
            component: () => import('@/views/admin/board/index.vue')
          },
          {
            path: '/other',
            component: () => import('@/views/admin/board/index.vue')
          }
    
        ]
      },
      { // 小工具
        path: 'tool',
        component:  () => import('@/views/admin/tool/view.vue'),
        children: [
          {
            path: '/tool',
            component: () => import('@/views/admin/tool/index.vue')
          },
          {
            path: '/other',
            component: () => import('@/views/admin/tool/index.vue')
          }
    
        ]
      },
    ]
  },
  {
    path: '/login',
    component:  () => import('@/views/frontend/login/login.vue')
  },
  {
    path: '/reg',
    component:  () => import('@/views/frontend/login/reg.vue')
  }
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory('/'),
  routes,
});

export default router;