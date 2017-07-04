const user = require('../model/user');
const verify_email = require('../model/verify_email');

module.exports = {
    async login (ctx, next) {
        let result = await user.login(ctx.request.body);
        ctx.body = result;
    },
    async register (ctx, next) {
        let result = await user.insert(ctx.request.body);
        ctx.body = result;
    },
    async updateSchoolInfo (ctx, next) {
        let result = await user.updateSchoolInfo(ctx.request.body);
        ctx.body = result;
    },
    async upsertCode (ctx, next) {
        let result = await verify_email.upsertCode(ctx.request.body);
        ctx.body = result;
    },
    async verifyEmail (ctx, next) {
        ctx.request.body.type = 1;
        let result = await verify_email.verify(ctx.request.body);
        ctx.body = result;
    },
    async resetPwd (ctx, next) {
        ctx.request.body.type = 2;
        let result = await verify_email.verify(ctx.request.body);
        ctx.body = result;
    },
}