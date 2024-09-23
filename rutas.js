// routes.js
const express = require('express');
const router = express.Router();
const alumnoController = require('./controllers/AlumnoController');
const paraescolarController = require('./controllers/ParaescolarController');

// Ruta para agregar alumno
router.get('/agregar-alumno', (req, res) => {
    res.sendFile(__dirname + '/views/agregar-alumno.html');
});

// Ruta para listar alumnos
router.get('/lista-alumnos', (req, res) => {
    const alumnos = alumnoController.obtenerAlumnos();
    res.json(alumnos); // O renderiza otra vista si lo prefieres
});

// Ruta para agregar paraescolar (puedes crear una vista similar)
router.get('/agregar-paraescolar', (req, res) => {
    res.sendFile(__dirname + '/views/agregar-paraescolar.html');
});

// Otras rutas según necesites

module.exports = router;
