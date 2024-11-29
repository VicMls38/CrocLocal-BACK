const express = require('express');
const Controller = require('../controllers/controllerDefaut');
const authMiddleware = require('../middlewares/middlewareAuth');
const authorize = require('../middlewares/authorize');

const routeur = express.Router();

routeur.get('/', Controller.Accueil);

routeur.get('/secure/p', authMiddleware, authorize(['producteur']), Controller.testP);

routeur.get('/secure/c', authMiddleware, authorize(['consommateur']), Controller.testC);



module.exports = routeur