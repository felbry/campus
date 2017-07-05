import config from '../config';
import Fetch from '../assets/tools/fetchWithToken';

const URL = `${config.url}/api/v1`;
// 登录
export const login = (data) => {
    return Fetch.post(`${URL}/login`, data).then(v => v);
}