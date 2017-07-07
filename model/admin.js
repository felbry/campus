const Admin = require('../db/admin');

module.exports = {
    async login (opts) {
        let results = await Admin.findAll({
            where: {
                username: opts.username,
                password: tools.encryption(opts.password)
            },
            attributes: ['power', 'dependentId', 'relationId', 'relationName']
        }).then(v => v);

        if (!results.length) {
            return {
                code: 0,
                data: {
                    token: jwt.sign(results[0], config.adminKey, {
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
}