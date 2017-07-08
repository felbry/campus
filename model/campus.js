const Campus = require('../db/campus');
const Admin = require('../db/admin');

const config = require('../config');
const tools = require('../tools');

module.exports = {
    insert (opts) {
        let results = await Campus.findAll({
            where: {
                name: opts.name
            }
        }).then(v => v);

        if (!results.length) {
            let result = await Campus.create({
                name: opts.name
            }).then(v => v);

            await Admin.create({
                username: opts.name,
                password: tools.encryption(config.defaultPwd),
                power: 2,
                relationId: result.id,
                relationName: result.name
            });

            return {
                code: 0,
                data: result
            };
        } else {
            return {
                code: 1,
                msg: '学校已存在'
            };
        }
    },
}