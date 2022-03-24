/*
 * @Author: liliang | zkyeu@163.com
 * @Date: 2022-03-18 21:55:21
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-24 14:19:49
 * @FilePath: /score/src/router/index.ts
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', // 后台首页
    component: () => import('@/views/admin/view.vue')
  },
  // 活动系统 start
  {
    path: '/activity-classify',
    component: () => import('@/views/admin/activity/activity-classify.vue')
  },{
    path: '/activity-apply',
    component: () => import('@/views/admin/activity/activity-apply.vue')
  },
  {
    path: '/activity-diy',
    component: () => import('@/views/admin/activity/activity-diy.vue')
  },
  {
    path: '/activity-verify',
    component: () => import('@/views/admin/activity/activity-verify.vue')
  },
  // 活动系统end

  // 学生系统start
  {
    path: '/student',
    component: () => import('@/views/admin/student/student-info.vue')
  },{
    path: '/student-board',
    component: () => import('@/views/admin/student/student-board.vue')
  },
  // 学生系统 end

  // 学分系统 start
  {
    path: '/score',
    component: () => import('@/views/admin/score/score.vue')
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
  },
  // 学分系统 end

   // 权限配置 start
  {
    path: '/member',
    component: () => import('@/views/admin/power/member.vue')
  },
  {
    path: '/role',
    component: () => import('@/views/admin/power/role.vue')
  },
   // 权限配置 end

   // 登录注册 start
  {
    path: '/login',
    component:  () => import('@/views/frontend/login/login.vue')
  },
  {
    path: '/log',
    component:  () => import('@/views/admin/log.vue')
  },
  {
    path: '/reg',
    component:  () => import('@/views/frontend/login/reg.vue')
  }
   // 登录注册 end
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory('/'),
  routes,
});

// router.beforeEach((to, from) => {
//   // ...
//   // 返回 false 以取消导航
//   return false
// })

export default router;