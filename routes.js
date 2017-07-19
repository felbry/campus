const Router = require('koa-router');
const publicApi = Router();
const privateApi = Router();

const user = require('./controller/user');
const admin = require('./controller/admin');
const classInfo = require('./controller/classInfo');

module.exports.publicApi = publicApi
    // 用户注册登录验证相关
    .post('/api/login', user.login)
    .post('/api/users', user.register)
    .patch('/api/code', user.upsertCode)
    .patch('/api/verify_email', user.verifyEmail)
    .patch('/api/school_info', user.updateSchoolInfo)
    .patch('/api/password', user.resetPwd)
    // 管理员
    .post('/admin/api/login', admin.login)
    // 获取高校信息
    .get('/admin/api/campuses', classInfo.getCampuses)
    .get('/admin/api/academies', classInfo.getAcademies)
    .get('/admin/api/professions', classInfo.getProfessions)
    .get('/admin/api/classes', classInfo.getClasses)

module.exports.privateApi = privateApi
    // 管理员
    .post('/admin/api/campuses', classInfo.setCampus)
    .post('/admin/api/academies', classInfo.setAcademy)
    .post('/admin/api/professions', classInfo.setProfession)
    .post('/admin/api/classes', classInfo.setClass)
    .get('/admin/api/admins', admin.find)