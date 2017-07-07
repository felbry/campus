import config from '../config';
import Fetch from '../assets/tools/fetchWithToken';

const URL = `${config.url}/api/v1`;
// 登录
export const login = (data) => {
    return Fetch.post(`${URL}/login`, data).then(v => v);
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