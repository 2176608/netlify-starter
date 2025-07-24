const http = require('http');
const Waline = require('@waline/vercel');
const serverless = require('serverless-http');

const app = Waline({
  env: 'netlify',
  async postSave(comment)forbiddenWords: ['习近平', '毛泽东', '邓小平', '胡锦涛', '江泽民', '垃圾', '傻逼', 'SB', 'Sb', 'sB', 'sb',],
});

module.exports.handler = serverless(http.createServer(app));
