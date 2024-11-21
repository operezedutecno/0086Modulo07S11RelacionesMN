const conexion = require("./conexion.js");

const Curso = require("./models/Curso.entity.js");
const Estudiante = require("./models/Estudiante.entity.js");
const { agregarCurso, asignarEstudiante, consultarCurso } = require("./controllers/curso.controller.js"); 
const { agregarEstudiante } = require("./controllers/estudiante.controller.js");

(async() => {
    try {
        await conexion.sync({ alter: true });
        // const listadoCursos = await Curso.findAll();
        // console.log({ listadoCursos });

        // const curso = await agregarCurso({ codigo: "0088VUE", nombre: "Frontend Vue 0088" });

        //const estudiante = await agregarEstudiante({ nombre: "Osman", apellido: "Pérez" });
        //console.log(estudiante);

        // await asignarEstudiante(1,1);
        // await asignarEstudiante(1,6);

        // await asignarEstudiante(2,1);

        // await asignarEstudiante(3,2);
        // await asignarEstudiante(3,4);
        // await asignarEstudiante(3,3);


        // const estudiante1 = await Estudiante.create({ nombre: "Luis", apellido: "Medina" });
        // const estudiante2 = await Estudiante.create({ nombre: "José", apellido: "Pérez" });
        // const estudiante3 = await Estudiante.create({ nombre: "María", apellido: "López" });
        // const estudiante4 = await Estudiante.create({ nombre: "Emilio", apellido: "Jara" });
        // const estudiante5 = await Estudiante.create({ nombre: "Gustavo", apellido: "León" });
        // console.log("Registros creados exitosamente");


        const consulta = await consultarCurso(2);
        console.log(JSON.parse(JSON.stringify(consulta)));


    } catch (error) {
        console.log(error.message || "Ocurrio un error interno");
    }
    
})()