const express = require('express');
const ControllerAuth = require('../controllers/controllerAuth');


const routeur = express.Router();

routeur.post('/register', ControllerAuth.register);
routeur.post('/login', ControllerAuth.login);

module.exports = routeur;
