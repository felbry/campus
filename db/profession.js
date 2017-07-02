const Sequelize = require('sequelize');
const sequelize = require('./connection');

const Profession = sequelize.define('profession', {
    name: { type: Sequelize.STRING, allowNull: false },
    aid: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Profession;