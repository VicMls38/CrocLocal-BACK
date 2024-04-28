const express = require('express');
const Controller_Defaut = require('../controllers/controllerDefaut');
const Controller_Auth = require('../controllers/controllerAuth');

const routeur = express.Router();

routeur.get('/', Controller_Defaut.Accueil);
routeur.get('/users', Controller_Defaut.getUsers);

routeur.post('/profil/inscription', Controller_Auth.Inscription)


module.exports = routeur