const Sequelize = require('sequelize');
const sequelize = require('./connection');

const Admin = sequelize.define('admin', {
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    power: { type: Sequelize.INTEGER, allowNull: false },
    dependentId: Sequelize.INTEGER,
    relationId: Sequelize.INTEGER,
    relationName: Sequelize.STRING,
});

module.exports = Admin;