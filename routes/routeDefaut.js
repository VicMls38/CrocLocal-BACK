const express = require('express');
const Controller = require('../controllers/controllerDefaut');

const routeur = express.Router();

routeur.get('/', Controller.Accueil);
routeur.get('/users', Controller.getUsers);



module.exports = routeur