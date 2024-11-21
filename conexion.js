const { Sequelize } = require("sequelize");

const conexion = new Sequelize({
    host: 'localhost',
    port: 5432,
    database: 'cursos0086',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres'
});

module.exports = conexion;