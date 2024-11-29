const express = require('express');
const ControllerAuth = require('../controllers/controllerAuth');


const routeur = express.Router();

routeur.post('/register/consommateur', ControllerAuth.registerConsommateur);
routeur.post('/login/consommateur', ControllerAuth.loginConsommateur);

routeur.post('/register/producteur', ControllerAuth.registerProducteur);
routeur.post('/login/producteur', ControllerAuth.loginProducteur);

module.exports = routeur;
