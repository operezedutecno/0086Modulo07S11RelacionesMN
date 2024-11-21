const { DataTypes } = require("sequelize");
const conexion = require("./../conexion.js");
const Estudiante = require("./Estudiante.entity.js");


const Curso = conexion.define("Curso", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: "cursos"
});

Estudiante.belongsToMany(Curso, {
    through: "cursos_estudiantes",
    as: "cursos",
    foreignKey: "estudiante_id"
});

Curso.belongsToMany(Estudiante, {
    through: "cursos_estudiantes",
    as: "estudiantes",
    foreignKey: "curso_id"
});

module.exports = Curso