// Importation du modèle userModel
var userModel = require('../models/modelDefaut');

module.exports = {
    // Redirection vers l'accueil
    Accueil: function(req, res) {
        res.json({ code: "Hello !" });
    },

    // Fonction pour récupérer tous les utilisateurs
    getUsers: function(req, res) {
        // Appel de la fonction pour récupérer tous les utilisateurs du modèle userModel
        userModel.getAllUsers(function(err, users) {
            if (err) {
                // En cas d'erreur, renvoyer un message d'erreur au client
                return res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs." });
            } else {
                // En cas de succès, renvoyer les utilisateurs récupérés au client
                return res.json(users);
            }
        });
    }
};
