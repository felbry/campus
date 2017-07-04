const User = require('../db/user');
const Email = require('../db/verify_email');

const tools = require('../tools');
const mail = require('../tools/mail');

module.exports = {
    async verify (opts) {
        let email = opts.email,
            code = opts.code,
            type = opts.type;
        let results = await Email.findAll({
            where: {
                email: email,
                code: code,
                type: type,
                updatedAt: {
                    $gte: new Date(Date.now() - 60 * 30 * 1000)
                }
            }
        });

        if (results.length == 1) {
            await results[0].destroy();

            if (type == 1) {
                return User.update({
                    emailVerified: 1
                }, {
                    where: {
                        username: email
                    }
                }).then(() => {
                    return {
                        code: 0,
                        msg: '验证成功'
                    };
                });
            } else {
                return User.update({
                    password: tools.encryption(opts.password)
                }, {
                    where: {
                        username: email
                    }
                }).then(() => {
                    return {
                        code: 0,
                        msg: '更新密码成功'
                    };
                });
            }
        } else {
            return {
                code: 1,
                msg: '排查错误：验证码已过期/邮箱未成功注册/邮箱已验证'
            }
        }
    },
    async upsertCode (opts) {
        let code = tools.random(4);
        let result = await mail({
            receiver: opts.username,
            code: code
        }).then(() => true).catch(() => false);

        if (result) {
            return Email.upsert({
                code: code,
                email: opts.username,
                type: opts.type
            }, {
                where: {
                    email: opts.username,
                    type: opts.type
                }
            }).then(() => {
                return {
                    code: 0,
                    msg: '成功生成新的验证码'
                };
            })
        } else {
            return {
                code: 1,
                msg: '发送邮件失败，检查邮箱是否正确或稍后重试'
            };
        }
    },
}