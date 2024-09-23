// models/Alumno.js
class Alumno {
    constructor(id, nombre, correo, paraescolar) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.paraescolar = paraescolar; // Puede ser un array si el alumno puede tener más de un paraescolar
    }
}

module.exports = Alumno;
