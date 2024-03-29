const express = require('express');
const Controller = require('../controllers/controllerDefaut');

const routeur = express.Router();

routeur.get('/', Controller.Accueil);



module.exports = routeur