const Sequelize = require('sequelize');
const sequelize = require('./connection');

const Clazz = sequelize.define('class', {
    pname: { type: Sequelize.STRING, allowNull: false },
    pid: { type: Sequelize.INTEGER, allowNull: false },
    grade: { type: Sequelize.INTEGER, allowNull: false },
    cid: { type: Sequelize.INTEGER, allowNull: false },
    isPostgraduate: { type: Sequelize.INTEGER, defaultValue: 0 },
});

module.exports = Clazz;