const express = require('express');
const routes = require('./routes'); //Rutas
const path = require('path'); //Carga ruta de archivos
const bodyParser = require('body-parser'); //Cargar lector de formularios
const app = express(); //Creamos una app de express


//Habilatar body parser para leer datos de formularios, esto es un midleware, por lo que debe ir antes de las rutas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Acces-COntrol-Allow-Origin', '*');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Cargar rutas
app.use('/api/serverNode', routes());
app.listen(3000);