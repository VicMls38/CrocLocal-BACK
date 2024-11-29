// Importation du modèle userModel
var userModel = require('../models/modelAuth');

module.exports = {
    // Redirection vers l'accueil
    Accueil: (req, res) => {
        res.json({ code: "Hello !" });
    },

    test: (req, res) => {
        res.json({ code: "GG c'est secure !" });
    }
    
    
};


