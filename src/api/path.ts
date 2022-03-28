/*
 * @Author: your name
 * @Date: 2021-08-03 17:45:46
 * @LastEditTime: 2022-03-27 21:27:47
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /score/src/api/path.ts
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
    getarticlelist: '/score/articlelist',
    getpowermember: '/score/getpowermember',
    getpowerrole: '/score/getpowerrole',
    getstudentinfo: '/score/getstudentinfo',
    getlistcount: '/score/getlistcount',
    getlistdetail: '/score/getlistdetail',
    getoverview: '/score/getoverview',
    getprocess: '/score/getprocess',
    getscorerule: '/score/getscorerule',
    regist: '/apiv1/regist',
    login: '/apiv1/login',
   
  },
  file: {
    uploadfile: '/commander/api/uploadfile'
    // ...
  }
};
export default apiList;
