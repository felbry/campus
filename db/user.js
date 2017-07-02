const Sequelize = require('sequelize');
const sequelize = require('./connection');

const User = sequelize.define('user', {
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    campusId: Sequelize.INTEGER,
    academyId: Sequelize.INTEGER,
    professionId: Sequelize.INTEGER,
    classId: Sequelize.INTEGER,
    wxId: Sequelize.STRING,
    realName: Sequelize.STRING,
    classStatus: { type: Sequelize.STRING, defaultValue: '学生' },
    tel: Sequelize.STRING,
    realNameVerified: { type: Sequelize.INTEGER, defaultValue: 0 },
    emailVerified: { type: Sequelize.INTEGER, defaultValue: 0 },
    telVerified: { type: Sequelize.INTEGER, defaultValue: 0 },
});

module.exports = User;