const Router = require('koa-router');
const publicApi = Router({ prefix: '/api/v1' });
const privateApi = Router({ prefix: '/api' });

const user = require('./controller/user');

module.exports.publicApi = publicApi
    .post('/login', user.login)
    .post('/users', user.register)
    .patch('/code', user.upsertCode)
    .patch('/verify_email', user.verifyEmail)
    .patch('/school_info', user.updateSchoolInfo)
    .patch('/password', user.resetPwd)

module.exports.privateApi = privateApi
    // 登录获取基本信息
    // .get('/v1/information', user.getInfo)
    // .get('/admin/v1/information', user.getInfo)