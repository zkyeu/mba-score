/*
 * @Author: liliang
 * @Date: 2022-03-16 21:01:33
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-21 14:00:05
 * @FilePath: /score/src/views/admin/power/mock.ts
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
  }
}
