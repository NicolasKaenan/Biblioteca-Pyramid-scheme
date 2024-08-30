const sequelize = require("sequelize");
const banco = require("./banco")
const emprestimo = require("./emprestimo.js") 

var cliente = banco.conexao.define(
    "cliente",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        nome:{
            type:sequelize.STRING,
            allowNull:false
        },
        cpf:{
            type:sequelize.STRING,
            allowNull:false
        },
        email:{
            type:sequelize.STRING,
            allowNull:false
        },

    },
    { timestamps: false }
)
emprestimo.emprestimo.belongsTo( cliente )
cliente.hasMany( emprestimo.emprestimo )
module.exports = {cliente}