const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'Volanty1234',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;