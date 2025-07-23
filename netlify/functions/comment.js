const http = require('http');
const Waline = require('@waline/vercel');
const serverless = require('serverless-http');

const app = Waline({
  env: 'netlify',
  async postSave(comment) {
    //设置关键词过滤
  },
});

module.exports.handler = serverless(http.createServer(app));
