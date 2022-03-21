/*
 * @Author: liliang
 * @Date: 2022-03-16 21:01:33
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-21 21:19:05
 * @FilePath: /mba-score/src/views/admin/power/mock.ts
 * @Description:
 */
export default {
  "table": {
      "tabletitle": [
        {
          value: 'rolename',
          label: '权限组'
        },
        {
          value: 'desc',
          label: '描述',
          align:'left'
        },
        {
            value: 'status',
            label: '状态'
          },
        {
          value: 'operate',
          label: '操作',
          fixed:'right',
          width: '290px'
        }
      ],
      "tablelist":[
        {
          "rolename": '普通成员',
          "desc": "仅能查看指定功能，不能编辑等",
          "status": "正常",
          operate: [
            {
              value: 'auth',
              label: '访问授权',
            },
            {
              value: 'auth_user',
              label: '成员授权',
              
            },
            {
              value: 'limit',
              label: '禁用',
            },
            {
              value: 'delete',
              label: '删除',
              
            }
          ]
      },
      {
        "rolename": '普通管理员',
        "desc": "仅能查看操作特定功能",
        "status": "正常",
        operate: [
          {
            value: 'auth',
            label: '访问授权',
          },
          {
            value: 'auth_user',
            label: '成员授权',
            
          },
          {
            value: 'limit',
            label: '禁用',
          },
          {
            value: 'delete',
            label: '删除',
            
          }
        ]
    },
    {
      "rolename": '超级管理员',
      "desc": "具有所有权限",
      "status": "正常",
      operate: [
        {
          value: 'auth',
          label: '访问授权',
        },
        {
          value: 'auth_user',
          label: '成员授权',
          
        },
        {
          value: 'limit',
          label: '禁用',
        },
        {
          value: 'delete',
          label: '删除',
          
        }
      ]
  }
    ]
  },
  authData: [
    {
      id: 1,
      label: '活动系统',
      isPenultimate: true,
      children: [
        {
          id: 4,
          label: '活动分类管理',
        },
        {
          id: 9,
          label: '活动管理'
        },
        {
          id: 10,
          label: '学生活动审核'
        }
      ]
    },
    {
      id: 2,
      label: '学生系统',
      isPenultimate: true,
      children: [
        {
          id: 5,
          label: '学生信息管理'
        },
        {
          id: 6,
          label: '学生看板'
        }
      ]
    },
    {
      id: 3,
      label: '学分系统',
      isPenultimate: true,
      children: [
        {
          id: 7,
          label: '学分录入'
        },
        {
          id: 8,
          label: '学分查询'
        },
        {
          id: 9,
          label: '学分规则配置'
        }
      ]
    },
    {
      id: 10,
      label: '权限管理',
      isPenultimate: true,
      children: [
        {
          id: 11,
          label: '人员管理'
        },
        {
          id: 12,
          label: '角色管理'
        }
      ]
    },
    {
      id: 13,
      label: '数据看板',
      isPenultimate: true,
      children: [
        {
          id: 14,
          label: '学生'
        },
        {
          id: 15,
          label: '活动'
        }
      ]
    },
    {
      id: 16,
      label: '小工具',
      isPenultimate: true,
      children: [
        {
          id: 17,
          label: '短信群发'
        }
      ]
    }
  ]
}
