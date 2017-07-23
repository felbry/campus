const Profession = require('../db/profession');

module.exports = {
    async insert (opts) {
        if (opts.user.power != 3) {
            return {
                code: 2,
                msg: '无权限'
            };
        }
        let results = await Profession.findAll({
            where: {
                name: opts.name,
                aid: opts.user.relationId
            }
        }).then(v => v);

        if (!results.length) {
            return Profession.create({
                name: opts.name,
                aid: opts.user.relationId
            }).then(v => {
                return {
                    code: 0,
                    data: v
                };
            });
        } else {
            return {
                code: 1,
                msg: '专业已存在'
            };
        }
    },
    find (opts) {
        return Profession.findAll({
            attributes: ['id', 'name'],
            where: {
                aid: opts.aid
            }
        }).then(v => {
            return {
                code: 0,
                data: v
            };
        })
    },
}