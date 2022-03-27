/*
 * @Author: your name
 * @Date: 2021-08-03 17:45:46
 * @LastEditTime: 2022-03-27 18:28:57
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /mba-score/src/api/path.ts
 */
const apiList = {
  get: {
    getuserinfo: '/score/getuserinfo', // 用户信息
    defaultView: '/score/defaultView', // 后台默认页面数据    
  },
  post: {
    getactivityclassify: '/score/getactivityclassify',
    getactivityapply: '/score/getactivityapply',
    getactivitydiy: '/score/getactivitydiy',
    getarticlelist: '/apiv1/get/articlelist',
    getpowermember: '/apiv1/get/getpowermember',
    getpowerrole: '/apiv1/get/getpowerrole',
    getstudentinfo: '/apiv1/get/getstudentinfo',
    regist: '/apiv1/regist',
    login: '/apiv1/login',
   
  },
  file: {
    uploadfile: '/commander/api/uploadfile'
    // ...
  }
};
export default apiList;
