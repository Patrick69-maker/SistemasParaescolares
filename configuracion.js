// server.js
const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
