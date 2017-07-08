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
                aid: opts.aid
            }
        }).then(v => v);

        if (!results.length) {
            return Profession.create({
                name: opts.name,
                aid: opts.aid
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
    find () {
        return Profession.findAll({
            attributes: ['name'],
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