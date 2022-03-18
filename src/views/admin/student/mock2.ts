/*
 * @Author: liliang
 * @Date: 2022-03-16 21:01:33
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-19 01:51:27
 * @FilePath: /mba-score/src/views/admin/student/mock2.ts
 * @Description:
 */
export default {
  "option": [
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
        "value": "ids",
        "type": "input",
        "label": "手机",
        "default": ""
    },
    {
        "value": "caree",
        "type": "select",
        "label": "分类",
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
        "value": "banx",
        "type": "select",
        "label": "班型",
        "default": "",
        "options": [
            {
                "value": 6,
                "label": "全部"
            },
            {
                "value": 5,
                "label": "集中I"
            },
            {
                "value": 4,
                "label": "集中II"
            },
            {
                "value": 3,
                "label": "周末I"
            },
            {
                "value": 2,
                "label": "周末II"
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
    },
    {
        "value": "big",
        "type": "select",
        "label": "状态",
        "default": "",
        "options": [
            {
                "value": 2,
                "label": "全部"
            },
            {
                "value": 3,
                "label": "正常"
            },
            {
                "value": 4,
                "label": "退学"
            },
            {
                "value": 5,
                "label": "休学"
            },
            {
                "value": 6,
                "label": "其加自己加"
            }
        ]
    }
],
  "table": {
      "tabletitle": [
        {
          value: 'snumber',
          label: '学号'
        },
        {
          value: 'name',
          label: '姓名'
        },
        {
          value: 'sexy',
          label: '性别'
        },
        {
          value: 'banxing',
          label: '班型'
        },
        {
          value: 'grade',
          label: '年级'
        },
        {
          value: 'class',
          label: '班级'
        },
        {
          value: 'mba',
          label: '类别'
        },
        {
          value: 'mobile',
          label: '联系方式'
        },
        {
          value: 'status',
          label: '状态'
        }
      ],
      "tablelist":[
        {
            "snumber": "ZF2108312",
            "name": "甘震",
            "sexy": "男",
            "banxing": "周末Ⅰ",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "退学",
            "class": " ZF21083班"
        },
        {
            "snumber": "ZF2108554",
            "name": "赵鸿涛",
            "sexy": "男",
            "banxing": "周末Ⅱ",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "退学",
            "class": " ZF21085班"
        },
        {
            "snumber": "ZF2108650",
            "name": "杨欣博",
            "sexy": "女",
            "banxing": "周末Ⅱ",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "退学",
            "class": " ZF21086班"
        },
        {
            "snumber": "ZF2108101",
            "name": "毕传香",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "15801112129",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108102",
            "name": "苌进",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13466326848",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108103",
            "name": "陈佳琪",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108104",
            "name": "陈俊俊",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18210065346",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108105",
            "name": "陈新萍",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108106",
            "name": "程作鹏",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108107",
            "name": "丛雪",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108108",
            "name": "丁昉",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108109",
            "name": "董天月",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108110",
            "name": "范文强",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108111",
            "name": "冯超",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108112",
            "name": "关腾腾",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108113",
            "name": "郭超",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108114",
            "name": "国瑞超",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108115",
            "name": "贺斌峰",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "16601032710",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108116",
            "name": "洪璐",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108117",
            "name": "胡志明",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18518673356",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108118",
            "name": "华燕",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108119",
            "name": "江春",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108120",
            "name": "姜碧桐",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108121",
            "name": "焦爱丽",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18500278389",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108122",
            "name": "焦黎斌",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108123",
            "name": "靳楠",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108124",
            "name": "李东飞",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108125",
            "name": "李建萍",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18500052022",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108126",
            "name": "李亮",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108127",
            "name": "李明达",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108128",
            "name": "李鹏",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108129",
            "name": "李雯雯",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108130",
            "name": "李阳",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "15210576442",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108131",
            "name": "梁怡",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108132",
            "name": "梁中伟",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13911594008",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108133",
            "name": "刘丹",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13488709081",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108134",
            "name": "罗圆圆",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "15833997101",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108135",
            "name": "马晶晶",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108136",
            "name": "马瑞",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108137",
            "name": "倪海宝",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108138",
            "name": "宁向宇",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108139",
            "name": "彭丽英",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108140",
            "name": "秦鑫",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108141",
            "name": "唐薇慧敏",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18322732100",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108142",
            "name": "佟鑫",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13811594769",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108143",
            "name": "王凤婵",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13810460337",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108144",
            "name": "王惠",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108145",
            "name": "王丽君",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13810069528",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108146",
            "name": "王莹",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108147",
            "name": "王子庭",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "15833928983",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108148",
            "name": "王祚",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13718831109",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108149",
            "name": "许宗阳",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "15933496839",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108150",
            "name": "杨博伟",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108151",
            "name": "杨璨",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13260201664",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108152",
            "name": "杨晓风",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18519184259",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108153",
            "name": "杨悦",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108154",
            "name": "阴冠华",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108155",
            "name": "于佳旭",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108156",
            "name": "袁双燕",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108157",
            "name": "张昌琴",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108158",
            "name": "张晨",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108159",
            "name": "张驰",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18510171591",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108160",
            "name": "张佳蕾",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108161",
            "name": "张靖宇",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18322732100",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108162",
            "name": "张凯",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "15510887409",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108163",
            "name": "张凌菲",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "15210156761",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108164",
            "name": "张弥",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108165",
            "name": "张鑫",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108166",
            "name": "张易茗",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108167",
            "name": "张颖",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108168",
            "name": "赵敬芳",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108169",
            "name": "赵婉云",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108170",
            "name": "智健",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18635233345",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108171",
            "name": "周亮",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108172",
            "name": "周鹏宇",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108173",
            "name": "周伟",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13720096759",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108174",
            "name": "周小蕾",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108175",
            "name": "朱智成",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108328",
            "name": "刘晓萌",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108510",
            "name": "郭茉",
            "sexy": "女",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "13800138000",
            "status": "正常",
            "class": " ZF21081班"
        },
        {
            "snumber": "ZF2108536",
            "name": "王朝宇",
            "sexy": "男",
            "banxing": "集中I",
            "grade": "2021",
            "mba": "MBA",
            "mobile": "18301637073",
            "status": "正常",
            "class": " ZF21081班"
        }
    ]
  }
}
