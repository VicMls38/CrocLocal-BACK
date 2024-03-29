//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
//Importation du fichier models
//var Model = require('../models/modelDefaut');


module.exports = {

    // Redirection vers l'accueil
    Accueil : (req, res) => {
            res.json({Code:"Hello !"});
    },

   

}