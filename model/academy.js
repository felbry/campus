const Academy = require('../db/academy');
const Admin = require('../db/admin');

const config = require('../config');
const tools = require('../tools');

module.exports = {
    async insert (opts) {
        if (opts.user.power != 2) {
            return {
                code: 2,
                msg: '无权限'
            };
        }
        let results = await Academy.findAll({
            where: {
                name: opts.name
            }
        }).then(v => v);

        if (!results.length) {
            let result = await Academy.create({
                name: opts.name,
                cid: opts.user.relationId
            }).then(v => v);

            await Admin.create({
                username: tools.encryption(`${result.cid}${result.name}`),
                password: tools.encryption(config.defaultPwd),
                power: 3,
                dependentId: result.cid,
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
                msg: '学院已存在'
            };
        }
    },
    find (opts) {
        return Academy.findAll({
            attributes: ['id', 'name'],
            where: {
                cid: opts.cid
            }
        }).then(v => {
            return {
                code: 0,
                data: v
            };
        })
    },
}