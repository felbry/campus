const Router = require('koa-router');
const publicApi = Router({ prefix: '/api/v1' });
const privateApi = Router({ prefix: '/api' });

const user = require('./controller/user');
const admin = require('./controller/admin');
const classInfo = require('./controller/classInfo');

module.exports.publicApi = publicApi
    // 用户注册登录验证相关
    .post('/login', user.login)
    .post('/users', user.register)
    .patch('/code', user.upsertCode)
    .patch('/verify_email', user.verifyEmail)
    .patch('/school_info', user.updateSchoolInfo)
    .patch('/password', user.resetPwd)
    // 管理员
    .post('/admin/login', admin.login)
    // 获取高校信息
    .get('/campuses', classInfo.getCampuses)
    .get('/academies', classInfo.getAcademies)
    .get('/professions', classInfo.getProfessions)
    .get('/classes', classInfo.getClasses)

module.exports.privateApi = privateApi
    // 登录获取基本信息
    // .get('/v1/information', user.getInfo)
    // .get('/admin/v1/information', user.getInfo)
    // 管理员
    .post('/admin/v1/campuses', classInfo.setCampus)
    .post('/admin/v1/academies', classInfo.setAcademy)
    .post('/admin/v1/professions', classInfo.setProfession)
    .post('/admin/v1/classes', classInfo.setClass)
    .get('/admin/v1/admins', admin.find)