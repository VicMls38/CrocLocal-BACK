var db = require('../database');

module.exports = {
    // Fonction pour sélectionner tous les utilisateurs
    getAllConsommateur: function(callback) {
        var sqlQuery = "SELECT * FROM Consommateurs";
        db.query(sqlQuery, function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    // Fonction pour enregistrer un nouvel utilisateur
    registerUser: function(email, password, last_name, first_name, tel, cp, ville, adress, callback) {
        var sqlQuery = "INSERT INTO consommateurs (email_consommateurs, mdp_consommateurs, nom_consommateurs, prenom_consommateurs, tel_consommateurs, cp_consommateurs, ville_consommateurs, adresse_consommateurs) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sqlQuery, [email, password, last_name, first_name, tel, cp, ville, adress], function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    // Fonction pour récupérer un utilisateur par son username
    getUserByUsername: function(username, callback) {
        var sqlQuery = "SELECT * FROM consommateurs WHERE email_consommateurs = ?";
        db.query(sqlQuery, [username], function(err, result) {
            if (err || result.length === 0) {
                return callback(err || 'Utilisateur non trouvé.', null);
            } else {
                return callback(null, result[0]);
            }
        });
    }
};
