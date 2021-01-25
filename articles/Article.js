const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('articles',{
    titrle:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.hasMany(Article); // UMA categoria Tem muitos artigos
Article.belongsTo(Category); // UM Artigo pertence a uma categoria

//para criar a tabela, apagar após ser criada
// Article.sync({force: true}) 

module.exports = Article;