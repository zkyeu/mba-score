/*
 * @Author: your name
 * @Date: 2021-08-04 10:18:00
 * @LastEditTime: 2022-03-25 21:49:07
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /score/src/utils/util.ts
 */
/* eslint-disable import/prefer-default-export */
import { getCurrentInstance, ComponentInternalInstance } from 'vue';

export function useGlobalConfig() {
  const internalInstance: any = getCurrentInstance();
  return internalInstance.appContext.config.globalProperties;
}

export function useGlobalInstance() {
  return getCurrentInstance() as ComponentInternalInstance;
}

export function formatDateTime(date: any) {
  if (!date || !(date instanceof Date)) return '';
  const y = date.getFullYear();
  let m: string | number = date.getMonth() + 1;
  m = m < 10 ? `0${m}` : m;
  let d: string | number = date.getDate();
  d = d < 10 ? `0${d}` : d;
  let h: string | number = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute: string | number = date.getMinutes();
  minute = minute < 10 ? `0${minute}` : minute;
  let second: string | number = date.getSeconds();
  second = second < 10 ? `0${second}` : second;
  return `${y}-${m}-${d} ${h}:${minute}:${second}`;
}

/**
 * latex公式渲染
 * @param nextTick  vue的nextTick方法
 * @param dom       渲染latex的dom元素
 */
export function latexRender(nextTick: any, dom: any) {
  nextTick(() => {
    const win: any = window;
    win.MathJax.Hub.Queue(['Typeset', win.MathJax.Hub, dom]);
  });
}

// 无限加载逻辑
// 视口高度
export function getClientHeight(){  
  let clientHeight=0;  
  if(document.body.clientHeight && document.documentElement.clientHeight){  
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  }else{  
    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  }  
  return clientHeight;  
}

// 滚动条离顶部距离
export function getScrollTop() {  
  let scrollTop = 0;  
  if (document.documentElement && document.documentElement.scrollTop) {  
      scrollTop = document.documentElement.scrollTop;  
  } else if(document.body){  
      scrollTop = document.body.scrollTop;  
  }  
  return scrollTop;  
}

// 滚动条总高度
export function getScrollHeight() {  
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);  
}

export function testDevice() {
  return Boolean(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
}

export default {
  checkLogin: ()=>  {
    // let LS = window.sessionStorage;
    let LS = window.localStorage;
    return LS.getItem('acms');
  },
  /**
 * [currency 金额格式化函数]
 * @param  {[type]} value    [传进来的值]
 * @param  {[type]} currency [货币符号]
 * @param  {[type]} decimals [小数位数]
 */
  currency: (value: any, currency: any, decimals: any) => {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : '$'
    decimals = decimals != null ? decimals : 2
    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals
      ? stringified.slice(0, -1 - decimals)
      : stringified
    var i = _int.length % 3
    var head = i > 0
      ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
      : ''
    var _float = decimals
      ? stringified.slice(-1 - decimals)
      : '';
    var sign = value < 0 ? '-' : '';
    let digitsRE = /(\d{3})(?=\d)/g
    return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
  }
}

