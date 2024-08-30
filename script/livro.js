const sequelize = require("sequelize");
const banco = require("./banco")
const emprestimo = require("./emprestimo.js") 

var livro = banco.conexao.define(
    "livro",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        quantidade:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true
        },
        nome:{
            type:sequelize.STRING,
            allowNull:false
        },
        descricao:{
            type:sequelize.STRING,
            allowNull:false
        }
    },
    { timestamps: false }
)
emprestimo.emprestimo.belongsTo( livro )
livro.hasMany( emprestimo.emprestimo )
module.exports = {livro}