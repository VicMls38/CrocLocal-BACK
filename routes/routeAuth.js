const express = require('express');
const Controller = require('../controllers/controllerAuth');

const routeur = express.Router();

routeur.post('/profil/inscription', Controller.Inscription);




module.exports = routeur