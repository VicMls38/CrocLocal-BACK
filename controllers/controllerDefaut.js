// Importation du modèle userModel
var userModel = require('../models/modelAuth');

module.exports = {
    // Redirection vers l'accueil
    Accueil: (req, res) => {
        res.json({ code: "Hello !" });
    },

    testP: (req, res) => {
        res.json({ code: "GG Mon producteur de cock !" });
    },

    testC: (req, res) => {
        res.json({ code: "GG Mon consommateur de merde !" });
    }
};


