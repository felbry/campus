const Sequelize = require('sequelize');
const sequelize = require('./connection');

const Email = sequelize.define('verify_email', {
    email: { type: Sequelize.STRING, allowNull: false },
    code: { type: Sequelize.INTEGER, allowNull: false },
    type: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Email;