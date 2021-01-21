const Sequelize = require("sequelize");
const connection = require("../database/database");

const Article = connection.define('articles',{
    titrle:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        title: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Article;