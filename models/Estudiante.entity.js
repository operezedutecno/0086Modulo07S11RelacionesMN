const { DataTypes } = require("sequelize");
const conexion = require("./../conexion.js");


const Estudiante = conexion.define("Estudiante", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "estudiantes",
})

module.exports = Estudiante;