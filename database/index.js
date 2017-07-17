const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/hello-world-db');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;