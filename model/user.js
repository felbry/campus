const jwt = require('jsonwebtoken');

const User = require('../db/user');
const Email = require('../db/verify_email');

const tools = require('../tools');
const config = require('../config');
const mail = require('../tools/mail');

module.exports = {
    async insert (opts) {
        let username = opts.username,
            password = opts.password;
        let results = await User.findAll({
            where: {
                username: username
            }
        }).then(v => v);

        if (!results.length) {
            let code = tools.random(4);
            let result = await mail({
                receiver: username,
                code: code
            }).then(() => true).catch(() => false);

            if (result) {
                await Email.create({
                    email: username,
                    code: code,
                    type: 1
                });

                return User.create({
                    username: username,
                    password: tools.encryption(password)
                }).then(v => {
                    return {
                        code: 0,
                        data: v
                    };
                });
            } else {
                return {
                    code: 2,
                    msg: '发送邮件失败，检查邮箱是否正确或稍后重试'
                };
            }
        } else {
            return {
                code: 1,
                msg: '已注册'
            };
        }
    },
    async login (opts) {
        let results = await User.findAll({
            where: {
                username: opts.username,
                password: tools.encryption(opts.password)
            }
        }).then(v => v);

        if (results.length) {
            let user = results[0];
            if (user.emailVerified) {
                if (user.classId) {
                    return {
                        code: 0,
                        data: {
                            token: jwt.sign({
                                id: user.id,
                                classId: user.classId
                            }, config.userKey, {
                                expiresIn: '3 days'
                            })
                        }
                    };
                } else {
                    return {
                        code: 3,
                        msg: '班级信息未完善'
                    }
                }
            } else {
                return {
                    code: 2,
                    msg: '邮箱未验证'
                };
            }
        } else {
            return {
                code: 1,
                msg: '用户名不存在或密码错误'
            };
        }
    },
    updateSchoolInfo (opts) {
        return User.update({
            campusId: opts.campusId,
            academyId: opts.academyId,
            professionId: opts.professionId,
            classId: opts.classId
        }, {
            where: {
                username: opts.username
            }
        }).then(() => {
            return {
                code: 0,
                msg: '更新成功'
            };
        });
    }
}