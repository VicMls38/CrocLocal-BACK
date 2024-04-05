// Importation du modèle userModel
var userModel = require('../models/modelDefaut');

module.exports = {
    // Redirection vers l'accueil
    Accueil: function(req, res) {
        res.json({ code: "Hello !" });
    },

    // Fonction pour récupérer tous les consommateur
    getUsers: function(req, res) {
        // Appel de la fonction pour récupérer tous les consommateur du modèle userModel
        userModel.getAllConsommateur(function(err, users) {
            if (err) {
                // En cas d'erreur, renvoyer un message d'erreur au client
                return res.status(500).json({ error: "Erreur lors de la récupération des consommateur." });
            } else {
                // En cas de succès, renvoyer les consommateur récupérés au client
                return res.json(users);
            }
        });
    }
};
