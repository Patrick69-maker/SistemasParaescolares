// controllers/ParaescolarController.js
const Paraescolar = require('../models/Paraescolar');

class ParaescolarController {
    constructor() {
        this.paraescolares = [];
    }

    agregarParaescolar(paraescolar) {
        this.paraescolares.push(paraescolar);
    }

    obtenerParaescolares() {
        return this.paraescolares;
    }
}

module.exports = new ParaescolarController();
