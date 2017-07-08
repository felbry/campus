const Campus = require('./model/campus');
const Academy = require('./model/academy');
const Profession = require('./model/profession');
const Clazz = require('./model/class');

module.exports = {
    async getCampuses (ctx, next) {

    },
    async getAcademies (ctx, next) {

    },
    async getProfessions (ctx, next) {

    },
    async getClasses (ctx, next) {

    },
    async setCampus (ctx, next) {
        let result = await Campus.insert(ctx.request.body);
        ctx.body = result;
    },
    async setAcademy (ctx, next) {
        let result = await Academy.insert(ctx.request.body);
        ctx.body = result;
    },
    async setProfession (ctx, next) {
        let result = await Profession.insert(ctx.request.body);
        ctx.body = result;
    },
    async setClass (ctx, next) {
        let result = await Clazz.insert(ctx.request.body);
        ctx.body = result;
    },
}