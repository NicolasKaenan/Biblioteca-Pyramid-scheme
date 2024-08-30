const sequelize = require("sequelize");
const banco = require("./banco");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

var emprestimo = banco.conexao.define(
    "emprestimo",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        livroId:{
            type:sequelize.INTEGER.UNSIGNED,
            allowNull:false,
            foreignKey: true
        },
        clienteId:{
            type:sequelize.INTEGER.UNSIGNED,
            allowNull:false,
            foreignKey: true
        },
        datadevolucao:{
            type:sequelize.STRING,
            allowNull:false
        },

    }, 
    { timestamps: false }
)
module.exports = {emprestimo}