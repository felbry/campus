const Sequelize = require('sequelize');
const sequelize = require('./connection');

const Campus = sequelize.define('campus', {
    name: { type: Sequelize.STRING, allowNull: false },
});

module.exports = Campus;