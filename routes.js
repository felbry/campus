const Router = require('koa-router');
const publicApi = Router({ prefix: '/api/v1' });
const privateApi = Router({ prefix: '/api' });

const user = require('./controller/user');

module.exports.publicApi = publicApi
    .post('/login', user.login)
    .post('/users', user.register)
    .put('/code', user.updateCode)
    .put('/verify-emails', user.verifyEmail)

module.exports.privateApi = privateApi
    // 登录获取基本信息
    // .get('/v1/information', user.getInfo)
    // .get('/admin/v1/information', user.getInfo)