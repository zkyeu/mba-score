/*
 * @Author: liliang
 * @Date: 2022-03-16 21:01:33
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-23 08:51:38
 * @FilePath: /mba-score/src/views/admin/activity/mock3.ts
 * @Description:
 */
export default {
  "option": [
      {
          "value": "caree",
          "type": "select",
          "label": "专业",
          "default": "",
          "options": [
              {
                  "value": 6,
                  "label": "全部"
              },
              {
                  "value": 5,
                  "label": "EMBA"
              },
              {
                  "value": 4,
                  "label": "MBA"
              },
              {
                  "value": 3,
                  "label": "MEM"
              },
              {
                  "value": 2,
                  "label": "MPAcc"
              },
              {
                  "value": 1,
                  "label": "其他"
              }
          ]
      },
      {
        "value": "yeara",
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
                "label": "2018"
            },
            {
                "value": 1,
                "label": "其他"
            }
        ]
    },
      {
          "value": "year",
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
                  "label": "21081"
              },
              {
                  "value": 4,
                  "label": "21082"
              },
              {
                  "value": 3,
                  "label": "21083"
              },
              {
                  "value": 1,
                  "label": "其他"
              }
          ]
      },
      {
          "value": "big",
          "type": "select",
          "label": "二级分类",
          "default": "",
          "options": [
              {
                  "value": 2,
                  "label": "全部"
              },
              {
                  "value": 3,
                  "label": "新生拓展活动"
              },
              {
                  "value": 4,
                  "label": "新生年会"
              },
              {
                  "value": 5,
                  "label": "新生晚会"
              },
              {
                  "value": 6,
                  "label": "读书活动"
              },
              {
                  "value": 63,
                  "label": "知行论坛"
              },
              {
                  "value": 630,
                  "label": "纳建会"
              },
              {
                  "value": 630,
                  "label": "院长时间"
              },
              {
                  "value": 30,
                  "label": "文体活动"
              },
              {
                  "value": 310,
                  "label": "案例大赛"
              },
              {
                  "value": 304,
                  "label": "创业大赛"
              },
              {
                  "value": 3034,
                  "label": "其他"
              }
          ]
      },
      {
          "value": "type",
          "type": "select",
          "label": "活动等级",
          "default": "",
          "options": [
              {
                  "value": 6,
                  "label": "全部"
              },
              {
                  "value": 5,
                  "label": "省部级"
              },
              {
                  "value": "院校级",
                  "label": "院校级"
              },
              {
                  "value": "年级",
                  "label": "年级"
              },
              {
                  "value": "班级",
                  "label": "班级"
              },
              {
                  "value": 4,
                  "label": "其他"
              }
          ]
      },
      {
          "value": "status",
          "type": "select",
          "label": "申请状态",
          "default": "",
          "options": [
              {
                  "value": 2,
                  "label": "全部"
              },
              {
                  "value": 0,
                  "label": "未审核"
              },
              {
                  "value": 1,
                  "label": "已通过"
              },
              {
                  "value": 4,
                  "label": "驳回"
              },
              {
                "value": 44,
                "label": "其他"
            },
          ]
      },
      {
          "value": "xingzhi",
          "type": "select",
          "label": "活动性质",
          "default": "",
          "options": [
              {
                  "value": 2,
                  "label": "全部"
              },
              {
                  "value": 3,
                  "label": "线上"
              },
              {
                  "value": 4,
                  "label": "线下"
              },
              {
                  "value": 5,
                  "label": "其他"
              }
          ]
      }
  ],
  "table": {
      "tabletitle": [
        //   {
        //       "value": "id",
        //       "label": "活动ID",
        //       width: '90px'
           
        //   },
        //   {
        //       "value": "rname",
        //       "label": "活动存档编号",
        //       width: '170px'
            
        //   },
          {
              "value": "mba",
              "label": "专业",
              width: '90px'
          },
          {
              "value": "grade",
              "label": "年级",
              width: '80px'
          },
          {
              "value": "period",
              "label": "班级",
              width: '120px'
          },
          {
              "value": "colortitle",
              "label": "活动名称",
              width: '320px',
              align:'left'
          },
          {
              "value": "xleibie",
              "label": "活动分类",
              width: '150px'
          },

          {
              "value": "jibie",
              "label": "活动等级",
              width: '90px'
          },
          {
              "value": "xingzhi",
              "label": "活动性质",
              width: '90px'
          },
          {
              "value": "status",
              "label": "活动状态",
              width: '90px'
          },
          {
              "value": "user",
              "label": "申请人",
              width: '100px'
          },
          {
            "value": "date",
            "label": "申请时间",
            width: '100px'
        },
          {
              "value": "operate",
              "label": "审核",
              fixed: 'right'
          }
      ],
      "tablelist": [
          {
              "id": 1231223,
              "rname": "ALL2022012801",
              "mba": "EMBA",
              "grade": "2021",
              "period": "zf21081",
              "colortitle": "《庆新春 迎冬奥》新年云祝福",
              "leibie": "文体活动",
              "xleibie": "2022冬奥会系列",
              "is": "必修",
              "jibie": "年级",
              "xingzhi": "线上",
              "status": "正常",
              "bmdate": "2022-02-12 12:00 ～ 2022-02-13 18:00",
              "date": "2022-03-04",
              "user": "李亮",
              "finsh": "已完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          },
          {
              "id": 455,
              "rname": "MBA2022012701",
              "mba": "MEM",
              "grade": "2021",
              "period": "zf21085",
              "colortitle": "312新春健步跑步活动",
              "leibie": "文体活动",
              "xleibie": "体育活动",
              "is": "选修",
              "jibie": "院校级",
              "xingzhi": "线下",
              "status": "正常",
              "bmdate": "2022-03-08 12:00 ～ 2022-03-10 18:00",
              "date": "2022-03-04",
              "user": "王红",
              "finsh": "已完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          },
          {
              "id": 123234,
              "rname": "MBA2022012804",
              "mba": "MBA",
              "grade": "2021",
              "period": "zf21086",
              "colortitle": "【阳春二月，书香芬芳】读书活动",
              "leibie": "文体活动",
              "xleibie": "读书活动",
              "is": "选修",
              "jibie": "班级",
              "xingzhi": "线上",
              "status": "正常",
              "bmdate": "2022-03-12 12:00 ～ 2022-03-18 18:00",
              "date": "2022-03-31",
              "user": "成帅",
              "finsh": "未完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          },
          {
              "id": 123234,
              "rname": "MPAcc2021012801",
              "mba": "MPAcc",
              "grade": "2020",
              "period": "zf2108F",
              "colortitle": "新年云祝福",
              "leibie": "文体活动",
              "xleibie": "2022冬奥会系列",
              "is": "选修",
              "jibie": "联合会",
              "xingzhi": "线上",
              "status": "正常",
              "bmdate": "2022-02-12 12:00 ～ 2022-02-13 18:00",
              "date": "2022-02-28",
              "user": "陈蓉",
              "finsh": "已完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          },

          {
              "id": 43123,
              "rname": "EMBA2022012801",
              "mba": "EMBA",
              "grade": "2021",
              "period": "zf21082",
              "colortitle": "ZF21082第二期演讲沙龙活动",
              "leibie": "社会实践",
              "xleibie": "2022冬奥会系列",
              "is": "选修",
              "jibie": "联合会",
              "xingzhi": "线下",
              "status": "正常",
              "bmdate": "2022-02-12 12:00 ～ 2022-02-13 18:00",
              "date": "2022-02-17",
              "user": "马健",
              "finsh": "已完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          },
          {
              "id": 12424,
              "rname": "MPAcc20220128041",
              "mba": "MPAcc",
              "grade": "2020",
              "period": "zf20081班",
              "colortitle": "嗅觉品味天地，气味影响人生——北航MPAcc开展文化沙龙主题活动",
              "leibie": "社会公益",
              "xleibie": "文体活动",
              "is": "选修",
              "jibie": "联合会",
              "xingzhi": "线下",
              "status": "正常",
              "bmdate": "2021-09-12 12:00 ～ 2021-09-13 18:00",
              "date": "2022-09-30",
              "user": "李东飞",
              "finsh": "已完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          },
          {
              "id": 1233532,
              "rname": "ALL20220128019",
              "mba": "MBA",
              "grade": "2021",
              "period": "zf21081",
              "colortitle": "知行论坛202108期",
              "leibie": "文体活动",
              "xleibie": "2022冬奥会系列",
              "is": "必修",
              "jibie": "年级",
              "xingzhi": "线上",
              "status": "正常",
              "bmdate": "2021-07-12 12:00 ～ 2022-07-13 18:00",
              "date": "2022-03-04",
              "user": "王朝宇",
              "finsh": "已完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          },
          {
              "id": 345235,
              "rname": "MBA20220228017",
              "mba": "MBA",
              "grade": "2021",
              "period": "zf21081",
              "colortitle": "北航MBA举办红酒主题文化沙龙活动",
              "leibie": "社会实践",
              "xleibie": "企业参观",
              "is": "必修",
              "jibie": "年级",
              "xingzhi": "线下",
              "status": "正常",
              "bmdate": "2022-02-12 12:00 ～ 2022-02-13 18:00",
              "date": "2022-03-04",
              "user": "李钊",
              "finsh": "已完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          },
          {
              "id": 56123,
              "rname": "MBA202201280111",
              "mba": "MEM",
              "grade": "2020",
              "period": "zf21081",
              "colortitle": "“云课堂”，疫情阻隔不了的国际交流",
              "leibie": "文体活动",
              "xleibie": "2022冬奥会系列",
              "is": "必修",
              "jibie": "中心活动",
              "xingzhi": "线下",
              "status": "暂停",
              "bmdate": "2022-02-12 12:00 ～ 2022-02-13 18:00",
              "date": "2022-03-04",
              "user": "王凤婵",
              "finsh": "已完成",
              "operate": [
                  {
                      "value": "pass",
                      "label": "通过"
                  },
                  {
                      "value": "fail",
                      "label": "驳回"
                  },
                  {
                      "value": "detail",
                      "label": "详情"
                  }
              ]
          }
      ]
  }
}
