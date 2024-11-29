const express = require('express');
const ControllerAvis = require('../controllers/controllerAvis');


const routeur = express.Router();

routeur.get('/producteur/:siret_producteurs', ControllerAvis.getAvisByProducteur)

routeur.post('/new', ControllerAvis.registerAvis)
routeur.post('/addresponse', ControllerAvis.responseAvis)

module.exports = routeur;
