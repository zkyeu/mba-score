/*
 * @Author: liliang
 * @Date: 2022-03-16 21:01:33
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-16 21:35:17
 * @FilePath: /score/src/views/admin/activity/mock.js
 * @Description:
 */
export default {
  option: [
    {
      value: 'id',
      type: 'input',
      label: '活动ID',
      default: '',
    },
    {
      value: 'nameid',
      type: 'input',
      label: '活动分类',
      default: '',
    },
    {
      value: 'type',
      type: 'select',
      label: '活动性质',
      default: '',
      options: [
        {
          value: 6,
          label: '全部',
        },
        {
          value: 5,
          label: '省部级',
        },
        {
          value: 1,
          label: '院校级',
        },
        {
          value: 2,
          label: '年级',
        },
        {
          value: 3,
          label: '班级',
        },
        {
          value: 4,
          label: '其他',
        },
      ],
    },
    {
      value: 'type_a',
      type: 'select',
      label: '必修',
      default: '',
      options: [
        {
          value: 2,
          label: '全部',
        },
        {
          value: 0,
          label: '是',
        },
        {
          value: 1,
          label: '否',
        },
      ],
    },
    {
      value: 'status',
      type: 'select',
      label: '状态',
      default: '',
      options: [
        {
          value: 2,
          label: '全部',
        },
        {
          value: 0,
          label: '停止',
        },
        {
          value: 1,
          label: '暂停',
        },
        {
          value: 3,
          label: '正常',
        },
      ],
    },
  ],
  table: {
    tabletitle: [
      {
        value: 'id',
        label: '活动ID',
      },
      {
        value: 'name',
        label: '活动类别',
      },
      {
        value: 'is',
        label: '必须',
      },
      {
        value: 'class',
        label: '级别',
      },
      {
        value: 'status',
        label: '状态',
      },
      {
        value: 'date',
        label: '更新时间',
      },
      {
        value: 'operate',
        label: '操作',
      },
    ],
    tablelist: [
      {
        id: 1,
        is: '是',
        class: '院校级',
        date: '2016-05-03',
        status: '正常',
        name: '新生入学向导',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
          },
          {
            value: 'delete',
            label: '删除',
          },
        ],
      },
      {
        id: 2,
        is: '是',
        class: '院校级',
        date: '2016-02-03',
        status: '正常',
        name: '社会实践',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
            disabled: true,
          },
          {
            value: 'delete',
            label: '删除',
          },
        ],
      },
      {
        id: 4,
        is: '是',
        class: '院校级',
        date: '2019-05-03',
        status: '正常',
        name: '管理实践',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
          },
          {
            value: 'delete',
            label: '删除',
            disabled: true,
          },
        ],
      },
      {
        id: 5,
        is: '是',
        class: '院校级',
        date: '2021-05-03',
        status: '正常',
        name: '学术论坛',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
            disabled: true,
          },
          {
            value: 'delete',
            label: '删除',
          },
        ],
      },
      {
        id: 6,
        is: '否',
        class: '院校级',
        date: '2018-05-03',
        status: '正常',
        name: '文体活动',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
          },
          {
            value: 'delete',
            label: '删除',
            disabled: true,
          },
        ],
      },
      {
        id: 10,
        is: '否',
        class: '院校级',
        date: '2016-05-03',
        status: '正常',
        name: '国际交流',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
            disabled: true,
          },
          {
            value: 'delete',
            label: '删除',
          },
        ],
      },
      {
        id: 11,
        is: '是',
        class: '院校级',
        date: '2016-05-03',
        status: '正常',
        name: '社会公益',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
          },
          {
            value: 'delete',
            label: '删除',
          },
        ],
      },
      {
        id: 17,
        is: '是',
        class: '院校级',
        date: '2016-05-03',
        status: '正常',
        name: '社会公益',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
          },
          {
            value: 'delete',
            label: '删除',
          },
        ],
      },
      {
        id: 18,
        is: '是',
        class: '院校级',
        date: '2016-05-03',
        status: '正常',
        name: '社会公益',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
          },
          {
            value: 'delete',
            label: '删除',
          },
        ],
      },
      {
        id: 19,
        is: '是',
        class: '院校级',
        date: '2016-05-03',
        status: '正常',
        name: '社会公益',
        operate: [
          {
            value: 'view',
            label: '查看',
          },
          {
            value: 'edit',
            label: '编辑',
          },
          {
            value: 'delete',
            label: '删除',
          },
        ],
      },
    ],
  },
};
