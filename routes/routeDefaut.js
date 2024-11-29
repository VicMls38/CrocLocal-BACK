const express = require('express');
const Controller = require('../controllers/controllerDefaut');
var authMiddleware = require('../middlewares/middlewareAuth');

const routeur = express.Router();

routeur.get('/', Controller.Accueil);

routeur.get('/secure', authMiddleware, Controller.test);



module.exports = routeur