const admin = require('../model/admin');

module.exports = {
    async login (ctx, next) {
        let result = await admin.login(ctx.request.body);
        ctx.body = result;
    },
}