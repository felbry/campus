const Sequelize = require('sequelize');
const sequelize = require('./connection');

const Teacher = sequelize.define('teacher', {
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    tid: { type: Sequelize.STRING, allowNull: false },
    tname: { type: Sequelize.STRING, allowNull: false },
    campusId: { type: Sequelize.INTEGER, allowNull: false },
    academyId: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Teacher;