import config from '../config';
import Fetch from '../assets/tools/fetchWithToken';

const URL = `${config.url}/api/v1`;
const URLA = `${config.url}/api/admin/v1`;
// 登录
export const login = (data) => {
    return Fetch.post(`${URL}/login`, data).then(v => v);
}

// 管理员登录
export const adminLogin = (data) => {
    return Fetch.post(`${URL}/admin/login`, data).then(v => v);
}

// 注册
export const register = (data) => {
    return Fetch.post(`${URL}/users`, data).then(v => v);
}

// 更新邮箱验证码
export const upsertCode = (data) => {
    return Fetch.patch(`${URL}/code`, data).then(v => v);
}

// 验证邮箱
export const verifyEmail = (data) => {
    return Fetch.patch(`${URL}/verify_email`, data).then(v => v);
}

// 补充班级信息
export const updateClassInfo = (data) => {
    return Fetch.patch(`${URL}/school_info`, data).then(v => v);
}

// 获取管理员信息
export const getAdmin = () => {
    return Fetch.get(`${URLA}/admins`).then(v => v);
}

// 获取高校信息
export const getCampus = () => {
    return Fetch.get(`${URL}/campuses`).then(v => v);
}

// 获取学院信息
export const getAcademy = (data) => {
    return Fetch.get(`${URL}/academies?campusId=${data.campusId}`).then(v => v);
}

// 获取专业信息
export const getProfession = (data) => {
    return Fetch.get(`${URL}/professions?academyId=${data.academyId}`).then(v => v);
}

// 获取班级信息
export const getClass = (data) => {
    return Fetch.get(`${URL}/classes?professionId=${data.professionId}&grade=${data.grade}`).then(v => v);
}

// 添加高校信息
export const setCampus = () => {
    return Fetch.post(`${URLA}/campuses`).then(v => v);
}

// 添加学院信息
export const setAcademy = (data) => {
    return Fetch.post(`${URLA}/academies`).then(v => v);
}

// 添加专业信息
export const setProfession = (data) => {
    return Fetch.post(`${URLA}/professions`).then(v => v);
}

// 添加班级信息
export const setClass = (data) => {
    return Fetch.post(`${URLA}/classes`).then(v => v);
}