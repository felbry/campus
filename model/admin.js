const jwt = require('jsonwebtoken');

const Admin = require('../db/admin');

const config = require('../config');
const tools = require('../tools');

module.exports = {
    async login (opts) {
        console.log(opts);
        let results = await Admin.findAll({
            where: {
                username: opts.username,
                password: tools.encryption(opts.password)
            },
            attributes: ['power', 'dependentId', 'relationId', 'relationName']
        }).then(v => v);

        if (results.length) {
            let admin = JSON.parse(JSON.stringify(results[0]));
            return {
                code: 0,
                data: {
                    token: jwt.sign(admin, config.adminKey, {
                        expiresIn: '24h'
                    })
                }
            };
        } else {
            return {
                code: 1,
                msg: '用户名不存在或密码错误'
            };
        }
    },
    find (opts) {
        if (opts.user.power == 1) {
            return Admin.findAll({
                where: {
                    power: 2
                }
            }).then(v => {
                return {
                    code: 0,
                    data: v
                };
            });
        } else if (opts.user.power == 2) {
            return Admin.findAll({
                where: {
                    power: 3,
                    dependentId: opts.user.relationId
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'version']
                }
            }).then(v => {
                return {
                    code: 0,
                    data: v
                };
            });
        } else {
            return {
                code: 1,
                msg: '未知错误，可能无权限'
            };
        }
    },
}