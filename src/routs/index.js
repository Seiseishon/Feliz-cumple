const express = require('express');
const controladorIndex = require('../controllers');
const rutaIndex = express.Router();

rutaIndex.get('/', controladorIndex.home);
rutaIndex.get('/palabras-de-franco', controladorIndex.franco);
rutaIndex.get('/palabras-de-rocio', controladorIndex.rocio);
rutaIndex.get('/palabras-de-alexis', controladorIndex.alexis);
rutaIndex.get('/palabras-de-ariel', controladorIndex.ariel);


module.exports = rutaIndex;