const Sequelize = require('sequelize');
const sequelize = require('./connection');

const Academy = sequelize.define('academy', {
    name: { type: Sequelize.STRING, allowNull: false },
    cid: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Academy;