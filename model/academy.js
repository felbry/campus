const Academy = require('../db/academy');

module.exports = {
    insert (opts) {
        let results = await Academy.findAll({
            where: {
                name: opts.name
            }
        }).then(v => v);

        if (!results.length) {
            let result = await Academy.create({
                name: opts.name,
                cid: opts.cid
            }).then(v => v);

            await Admin.create({
                username: tools.encryption(result.cid + result.name),
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
}