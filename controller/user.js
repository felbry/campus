const user = require('../model/user');
const verify_email = require('../model/verify_email');
const tools = require('../tools');
const mail = require('../tools/mail');

module.exports = {
    async login (ctx, next) {
        let result = await user.find();
        if (!result.code) {
            ctx.body = result;
        } else {
            ctx.throw(500, 'Database operation failed', result.msg);
        }
    },
    async register (ctx, next) {
        let username = ctx.request.body.username,
            password = ctx.request.body.password;
        let results = await user.find({
            username: username
        });

        if (!results.length) {
            let code = tools.random(4);
            let result = await mail({
                receiver: username,
                code: code
            }).then(() => true).catch(() => false);

            if (result) {
                await verify_email.insert({
                    email: username,
                    code: code
                });

                let res = await user.insert({
                    username: username,
                    password: tools.encryption(password)
                });

                ctx.body = {
                    code: 0,
                    data: res
                };
            } else {
                ctx.body = {
                    code: 2,
                    msg: '发送邮件失败，检查邮箱是否正确或稍后重试'
                };
            }
        } else {
            ctx.body = {
                code: 1,
                msg: '已注册'
            };
        }
    },
    async updateCode (ctx, next) {
       
    },
    async verifyEmail (ctx, next) {
        let result = await user.insert(ctx.request.body);

        ctx.body = result;
    },
}