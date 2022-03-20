/*
 * @Author: liliang
 * @Date: 2022-03-16 21:01:33
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-20 22:03:41
 * @FilePath: /score/src/views/admin/score/mock2.ts
 * @Description:
 */
export default {
  "option": [
    {
      "value": "hdid",
      "type": "input",
      "label": "活动名称",
      "default": ""
  },
    {
        "value": "id",
        "type": "input",
        "label": "学生姓名",
        "default": ""
    },
    {
        "value": "ids",
        "type": "input",
        "label": "学号",
        "default": ""
    },
    {
      "value": "hdtime",
      "type": "daterange",
      "label": "活动时间",
      "default": []
  },
  
 
    {
        "value": "year",
        "type": "select",
        "label": "年级",
        "default": "",
        "options": [
            {
                "value": 6,
                "label": "全部"
            },
            {
                "value": 5,
                "label": "2021"
            },
            {
                "value": 4,
                "label": "2020"
            },
            {
                "value": 3,
                "label": "2019"
            },
            {
                "value": 2,
                "label": "2018"
            },
            {
                "value": 1,
                "label": "更早"
            }
        ]
    },
    {
        "value": "xueqi",
        "type": "select",
        "label": "班级",
        "default": "",
        "options": [
            {
                "value": 6,
                "label": "全部"
            },
            {
                "value": 5,
                "label": "ZF21081"
            },
            {
                "value": 4,
                "label": "ZF21082"
            },
            {
                "value": 33,
                "label": "ZF21083"
            },
            {
                "value": 145,
                "label": "其他自己添加"
            }
        ]
    }
],
  "table": {
      "tabletitle": [
        {
          value: 'hdname',
          label: '活动名称',
          width:'200px',
          align: 'left'
      },{
          value: 'snumber',
          label: '学号'
        },{
            value: 'name',
            label: '姓名'
          },{
        value: 'hdtime',
        label: '活动时间'
    },
    {
      value: 'score',
      label: '增加学分'
    },
        {
            value: 'grade',
            label: '所在年级'
          },
        
        
        
        {
          value: 'class',
          label: '班级'
        },
        {
          value: 'drtime',
          label: '学分添加时间',
          width: '140px'
      },
        {
          value: 'operate',
          label: '操作',
          fixed:'right',
          width: '250px'
        }
      ],
      "tablelist":[
        {
            "snumber": "ZF2108101",
            "name": "毕传香",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138009",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },

                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108102",
            "name": "苌进",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138012",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108103",
            "name": "陈佳琪",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138015",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108104",
            "name": "陈俊俊",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138018",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108105",
            "name": "陈新萍",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138021",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108106",
            "name": "程作鹏",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138024",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108107",
            "name": "丛雪",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138027",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108108",
            "name": "丁昉",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138030",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108109",
            "name": "董天月",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138033",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108110",
            "name": "范文强",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138036",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108111",
            "name": "冯超",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138039",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108112",
            "name": "关腾腾",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138042",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108113",
            "name": "郭超",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138045",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108114",
            "name": "国瑞超",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138048",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108115",
            "name": "贺斌峰",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138051",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108116",
            "name": "洪璐",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138054",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108117",
            "name": "胡志明",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138057",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108118",
            "name": "华燕",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138060",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108119",
            "name": "江春",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138063",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108120",
            "name": "姜碧桐",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138066",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108121",
            "name": "焦爱丽",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138069",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108122",
            "name": "焦黎斌",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138072",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108123",
            "name": "靳楠",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138075",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108124",
            "name": "李东飞",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138078",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108125",
            "name": "李建萍",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138081",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108126",
            "name": "李亮",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138084",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108127",
            "name": "李明达",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138087",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108128",
            "name": "李鹏",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138090",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108129",
            "name": "李雯雯",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138093",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108130",
            "name": "李阳",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138096",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108131",
            "name": "梁怡",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138099",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108132",
            "name": "梁中伟",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138102",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108133",
            "name": "刘丹",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138105",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108134",
            "name": "罗圆圆",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138108",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108135",
            "name": "马晶晶",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138111",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108136",
            "name": "马瑞",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138114",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108137",
            "name": "倪海宝",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138117",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108138",
            "name": "宁向宇",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138120",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108139",
            "name": "彭丽英",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138123",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108140",
            "name": "秦鑫",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138126",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108141",
            "name": "唐薇慧敏",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138129",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108142",
            "name": "佟鑫",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138132",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108143",
            "name": "王凤婵",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138135",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108144",
            "name": "王惠",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138138",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108145",
            "name": "王丽君",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138141",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108146",
            "name": "王莹",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138144",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108147",
            "name": "王子庭",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138147",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108148",
            "name": "王祚",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138150",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108149",
            "name": "许宗阳",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138153",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108150",
            "name": "杨博伟",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138156",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108151",
            "name": "杨璨",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138159",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108152",
            "name": "杨晓风",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138162",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108153",
            "name": "杨悦",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138165",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108154",
            "name": "阴冠华",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138168",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108155",
            "name": "于佳旭",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138171",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108156",
            "name": "袁双燕",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138174",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108157",
            "name": "张昌琴",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138177",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108158",
            "name": "张晨",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138180",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108159",
            "name": "张驰",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138183",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108160",
            "name": "张佳蕾",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138186",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108161",
            "name": "张靖宇",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138189",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108162",
            "name": "张凯",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138192",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108163",
            "name": "张凌菲",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138195",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108164",
            "name": "张弥",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138198",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108165",
            "name": "张鑫",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138201",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108166",
            "name": "张易茗",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138204",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108167",
            "name": "张颖",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138207",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108168",
            "name": "赵敬芳",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138210",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108169",
            "name": "赵婉云",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138213",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108170",
            "name": "智健",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138216",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108171",
            "name": "周亮",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138219",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108172",
            "name": "周鹏宇",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138222",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108173",
            "name": "周伟",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138225",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108174",
            "name": "周小蕾",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138228",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108175",
            "name": "朱智成",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138231",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108328",
            "name": "刘晓萌",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138234",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108510",
            "name": "郭茉",
            "hdname": "《举行的活动名字》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138237",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        },
        {
            "snumber": "ZF2108536",
            "name": "王朝宇",
            "hdname":"《活动名称，自己定义》",
            "drtime": "2022-03-29 11:03:23",
            "grade": "2021",
            "score": "0.1",
            "mobile": "13800138240",
            "hdtime": "2022-03-25 ",
            "class": " ZF21081班",
            operate: [
                {
                  value: 'view',
                  label: '详情',
                },
                {
                  value: 'edit',
                  label: '编辑',
                  
                },
                {
                  value: 'pass',
                  label: '通过',
                  
                },
                {
                  value: 'fail',
                  label: '驳回',
                  
                },
                {
                  value: 'delete',
                  label: "删除"
                }
              ]
        }
    ]
  }
}
