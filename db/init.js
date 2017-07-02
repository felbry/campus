const sequelize = require('./connection');
const encryption = require('../tools/encryption');
const config = require('../config');

const tables = {
    user: require('./user'),
    admin: require('./admin'),
    teacher: require('./teacher'),
    campus: require('./campus'),
    academy: require('./academy'),
    profession: require('./profession'),
    clazz: require('./class'),
    email: require('./verify_email'),
};

// init table and data
sequelize.sync().then(() => {
    tables.admin.findAll().then(v => {
        if (!v.length) {
            tables.admin.create({
                username: 'felbry',
                password: encryption(config.defaultPwd),
                power: 1,
            });
        }
    });
}).catch(e => { console.error(e); });

module.exports = tables;