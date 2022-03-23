/*
 * @Author: liliang
 * @Date: 2022-03-16 21:01:33
 * @LastEditors: liliang
 * @LastEditTime: 2022-03-23 09:00:50
 * @FilePath: /mba-score/src/views/admin/score/rule.ts
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
                "label": "MBA"
            },
            {
                "value": 33,
                "label": "EMBA"
            },
            {
                "value": 145,
                "label": "其他自己添加"
            }
        ]
    }
],
  "table": {

  }
}
