import axios from 'axios';

let util = {};

util.title = function (title) {
  title = title ? title : '小_飞鸡';
  window.document.title = title;
};

const ajaxUrl = process.env.NODE_ENV === 'development' ?
  // 'http://localhost:3000/api/v1' :
  'http://zhouzhongyang.club/api/v1' :
  'http://zhouzhongyang.club/api/v1' 
  // 'https://www.boblog.com/api/v1';

util.ajax_url = ajaxUrl;

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
});

export default util;
