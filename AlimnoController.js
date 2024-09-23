// controllers/AlumnoController.js
const Alumno = require('../models/Alumno');

class AlumnoController {
    constructor() {
        this.alumnos = []; // Aquí puedes almacenar a los alumnos temporalmente
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    obtenerAlumnos() {
        return this.alumnos;
    }
}

module.exports = new AlumnoController();
