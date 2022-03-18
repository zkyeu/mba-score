/*
 * @Date: 2022-03-18 21:55:21
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-19 00:42:57
 * @FilePath: /mba-score/src/components/admin/left-nav.js
 */

export default [
  {
    id: 1,
    title: '活动系统',
    router: '',
    icon: 'el-icon-menu',
    child: [
      {
        id: 101,
        title: '活动分类管理',
        router: '/activity-classify'
      },
      {
        id: 102,
        title: '活动管理',
        router: '/activity-diy'
      },
      {
        id: 103,
        title: '学生活动审核',
        router: '/activity-apply'
      },
      // {
      //   id: 104,
      //   title: '活动申请',
      //   router: '/activity-verify'
      // }
    ]
  },
  {
    id: 2,
    title: '学生系统',
    router: '',
    icon: 'el-icon-setting',
    child: [
      {
        id: 21,
        title: '学生信息管理',
        router: '/student'
      },
      {
        id: 22,
        title: '学生添加',
        router: '/student-add'
      }
    ]
  },
  {
    id: 7,
    title: '学分系统',
    router: '',
    icon: 'el-icon-setting',
    child: [
      {
        id: 7133,
        title: '学分录入',
        router: '/score-input'
      },
      {
        id: 714,
        title: '学分查询',
        router: '/score-search'
      },
      {
        id: 714,
        title: '学分规则配置',
        router: '/score-rule'
      },
      {
        id: 714,
        title: '学分活动查询',
        router: '/score-activity'
      }
    ]
  },
  {
    id: 713,
    title: '权限管理',
    router: '/role',
    icon: 'el-icon-setting',
    child: [
      {
        id: 7133,
        title: '人员管理',
        router: '/member'
      },
      {
        id: 714,
        title: '角色管理',
        router: '/role'
      }
    ]
  },
  {
    id: 746,
    title: '数据看板',
    router: '/board',
    icon: 'el-icon-setting',
    child: [
      {
        id: 713364,
        title: '数据看板',
        router: '/board'
      },
      {
        id: 7146,
        title: '活动板',
        router: ''
      }
    ]
  },
  {
    id: 794,
    title: '小工具',
    router: '/tool',
    icon: 'el-icon-setting',
    child: [
      {
        id: 71933,
        title: '小工具',
        router: '/tool'
      },
      {
        id: 7914,
        title: '群发短信',
        router: ''
      }
    ]
  }
];
