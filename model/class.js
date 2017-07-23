const Clazz = require('../db/class');

module.exports = {
    async insert (opts) {
        if (opts.user.power != 3) {
            return {
                code: 2,
                msg: '无权限'
            };
        }
        let results = await Clazz.findAll({
            where: {
                grade: opts.grade,
                cid: opts.cid,
                pid: opts.pid
            }
        }).then(v => v);

        if (!results.length) {
            return Clazz.create({
                grade: opts.grade,
                cid: opts.cid,
                pid: opts.pid,
                pname: opts.pname,
            }).then(v => {
                return {
                    code: 0,
                    data: v
                };
            });
        } else {
            return {
                code: 1,
                msg: '班级已存在'
            };
        }
    },
    find (opts) {
        return Clazz.findAll({
            attributes: ['id', 'name'],
            where: {
                pid: opts.pid,
                grade: opts.grade
            }
        }).then(v => {
            return {
                code: 0,
                data: v
            };
        })
    },
}