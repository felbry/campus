const Router = require('koa-router');
const publicApi = Router({ prefix: '/api' });
const privateApi = Router({ prefix: '/api' });

const user = require('./controller/user');
const admin = require('./controller/admin');
const classInfo = require('./controller/classInfo');

module.exports.publicApi = publicApi
    // 用户注册登录验证相关
    .post('/v1/login', user.login)
    .post('/v1/users', user.register)
    .patch('/v1/code', user.upsertCode)
    .patch('/v1/verify_email', user.verifyEmail)
    .patch('/v1/school_info', user.updateSchoolInfo)
    .patch('/v1/password', user.resetPwd)
    // 管理员
    .post('/v1/admin/login', admin.login)
    // 获取高校信息
    .get('/admin/v1/campuses', classInfo.getCampuses)
    .get('/admin/v1/academies', classInfo.getAcademies)
    .get('/admin/v1/professions', classInfo.getProfessions)
    .get('/admin/v1/classes', classInfo.getClasses)

module.exports.privateApi = privateApi
    // 管理员
    .post('/admin/v1/campuses', classInfo.setCampus)
    .post('/admin/v1/academies', classInfo.setAcademy)
    .post('/admin/v1/professions', classInfo.setProfession)
    .post('/admin/v1/classes', classInfo.setClass)
    .get('/admin/v1/admins', admin.find)