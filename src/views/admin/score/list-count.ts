/*
 * @Author: liliang
 * @Date: 2022-03-16 21:01:33
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-23 18:41:19
 * @FilePath: /score/src/views/admin/score/list-count.ts
 * @Description:
 */
export default  {
    "option": [
        {
            "value": "zhuanye",
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
                    "label": "MAB"
                },
                {
                    "value": 4,
                    "label": "EMBA"
                },
                {
                    "value": 145,
                    "label": "其他自己添加"
                }
            ]
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
            "value": "banx",
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
                    "label": "ZF20081"
                },
                {
                    "value": 3,
                    "label": "ZF19083"
                },
                {
                    "value": 2,
                    "label": "ZF21085"
                },
                {
                    "value": 1,
                    "label": "其他在学生信息导入后到这"
                }
            ]
        },
        {
            "value": "id",
            "type": "input",
            "label": "姓名",
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
            "label": "时间范围",
            "default": []
        },
        {
            "value": "status",
            "type": "select",
            "label": "达标情况",
            "default": "",
            "options": [
                {
                    "value": 6,
                    "label": "全部"
                },
                {
                    "value": 5,
                    "label": "达标"
                },
                {
                    "value": 4,
                    "label": "不达标"
                }
            ]
        },
        {
            "value": "range",
            "type": "inputrange",
            "label": "学分分数段",
            "default": [],
            range:['start','end']
        }
    ],
    "table": {
        "tabletitle": [
            {
                "value": "major",
                "label": "专业"
            },
            {
                "value": "name",
                "label": "姓名"
            },
            {
                "value": "snumber",
                "label": "学号"
            },
            {
                "value": "count",
                "label": "总学分"
            },
            {
                "value": "operate",
                "label": "操作",
                "fixed": "right",
                "width": "150px"
            }
        ],
        "tablelist": [
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108102",
                "name": "苌进",
                "count": 38.3,
                "status": "",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108103",
                "name": "陈佳琪",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108104",
                "name": "陈俊俊",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108105",
                "name": "陈新萍",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108106",
                "name": "程作鹏",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108107",
                "name": "丛雪",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108108",
                "name": "丁昉",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108109",
                "name": "董天月",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108110",
                "name": "范文强",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108111",
                "name": "冯超",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108112",
                "name": "关腾腾",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108113",
                "name": "郭超",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108114",
                "name": "国瑞超",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108115",
                "name": "贺斌峰",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108116",
                "name": "洪璐",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108117",
                "name": "胡志明",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108118",
                "name": "华燕",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108119",
                "name": "江春",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108120",
                "name": "姜碧桐",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108121",
                "name": "焦爱丽",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108122",
                "name": "焦黎斌",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108123",
                "name": "靳楠",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108124",
                "name": "李东飞",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108125",
                "name": "李建萍",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108126",
                "name": "李亮",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108127",
                "name": "李明达",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108128",
                "name": "李鹏",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108129",
                "name": "李雯雯",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108130",
                "name": "李阳",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108131",
                "name": "梁怡",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108132",
                "name": "梁中伟",
                "count": 38.3,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108133",
                "name": "刘丹",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108134",
                "name": "罗圆圆",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108135",
                "name": "马晶晶",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            },
            {
                "snumber": "ZF2108136",
                "name": "马瑞",
                "count": 37,
                "status": "不达标",
                "grade": "2021",
                "major": "MBA",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    }
                ]
            }
        ]
    },
    "detail": {
        "tabletitle": [
            {
                "value": "hdname",
                "label": "活动名称",
                "width": "200px",
                "align": "left"
            },
            {
                "value": "hdtime",
                "label": "学分登记时间"
            },
            {
                "value": "grade",
                "label": "所在年级"
            },
            {
                "value": "name",
                "label": "姓名"
            },
            {
                "value": "snumber",
                "label": "学号"
            },
            // {
            //     "value": "banxing",
            //     "label": "班型"
            // },
            // {
            //     "value": "class",
            //     "label": "班级"
            // },
            {
                "value": "score",
                "label": "学分"
            },
            {
                "value": "scoretype",
                "label": "学分性质"
            }
        ],
        "tablelist": [
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "《举行的活动名字》",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "公益学分",
                "mobile": "13800138009",
                "hdtime": "2022-03-30",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            },
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "创业大赛",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "公益学分",
                "mobile": "13800138015",
                "hdtime": "2022-03-27",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            },
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "演讲比赛",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "文体学分",
                "mobile": "13800138015",
                "hdtime": "2022-03-22",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            },
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "案例大赛-华北赛区",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "论坛学分",
                "mobile": "13800138018",
                "hdtime": "2022-03-20",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            },
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "新生读书分享会",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "志愿者学分",
                "mobile": "13800138021",
                "hdtime": "2022-03-11",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            },
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "312植树节跑步活动",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "文体学分",
                "mobile": "13800138024",
                "hdtime": "2022-03-02",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            },
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "这里是活动名称，自己定义",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "公益学分",
                "mobile": "13800138027",
                "hdtime": "2022-02-20",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            },
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "冬奥会运动会",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "志愿者学分",
                "mobile": "13800138030",
                "hdtime": "2022-03-30",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            },
            {
                "snumber": "ZF2108101",
                "name": "毕传香",
                "hdname": "歌唱比赛",
                "banxing": "集中I",
                "grade": "2021",
                "score": "0.1",
                "scoretype": "文体学分",
                "mobile": "13800138033",
                "hdtime": "2022-01-30",
                "class": " ZF21081班",
                "operate": [
                    {
                        "value": "view",
                        "label": "详情"
                    },
                    {
                        "value": "edit",
                        "label": "编辑"
                    }
                ]
            }
        ]
    }
}
