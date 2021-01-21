const Sequelize = require("sequelize");
const connection = require("../database/database");

const Cetegory = connection.define('categories',{
    titrle:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        title: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Category;