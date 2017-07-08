const Campus = require('../model/campus');
const Academy = require('../model/academy');
const Profession = require('../model/profession');
const Clazz = require('../model/class');

module.exports = {
    async getCampuses (ctx, next) {
        let result = await Campus.find();
        ctx.body = result;
    },
    async getAcademies (ctx, next) {
        let result = await Academy.find(ctx.request.query);
        ctx.body = result;
    },
    async getProfessions (ctx, next) {
        let result = await Profession.find(ctx.request.query);
        ctx.body = result;
    },
    async getClasses (ctx, next) {
        let result = await Clazz.find(ctx.request.query);
        ctx.body = result;
    },
    async setCampus (ctx, next) {
        let result = await Campus.insert(Object.assign(ctx.request.body, { user: ctx.state.user }));
        ctx.body = result;
    },
    async setAcademy (ctx, next) {
        let result = await Academy.insert(Object.assign(ctx.request.body, { user: ctx.state.user }));
        ctx.body = result;
    },
    async setProfession (ctx, next) {
        let result = await Profession.insert(Object.assign(ctx.request.body, { user: ctx.state.user }));
        ctx.body = result;
    },
    async setClass (ctx, next) {
        let result = await Clazz.insert(Object.assign(ctx.request.body, { user: ctx.state.user }));
        ctx.body = result;
    },
}