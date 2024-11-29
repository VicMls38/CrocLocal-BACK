var db = require('../database');

module.exports = {
    // Fonction pour sélectionner tous les utilisateurs
    getAllConsommateurs: function(callback) {
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
    registerConsommateur: function(email, password, last_name, first_name, tel, cp, ville, adress, callback) {
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
    getConsommateurByEmail: function(username, callback) {
        var sqlQuery = "SELECT * FROM consommateurs WHERE email_consommateurs = ?";
        db.query(sqlQuery, [username], function(err, result) {
            if (err || result.length === 0) {
                return callback(err || 'Utilisateur non trouvé.', null);
            } else {
                return callback(null, result[0]);
            }
        });
    },

     // Fonction pour enregistrer un nouvel utilisateur
     registerProducteur: function(siret, ape, enseigne, email, password, last_name, first_name, tel, cp, ville, adress, callback) {
        var sqlQuery = "INSERT INTO producteurs (siret_producteurs, codeApe_producteurs, enseigne_producteurs, email_producteurs, mdp_producteurs, nom_producteurs, prenom_producteurs, tel_producteurs, cp_producteurs, ville_producteurs, adresse_producteurs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sqlQuery, [siret, ape, enseigne, email, password, last_name, first_name, tel, cp, ville, adress], function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    // Fonction pour récupérer un utilisateur par son username
    getProducteurByEmail: function(email, callback) {
        var sqlQuery = "SELECT * FROM producteurs WHERE email_producteurs = ?";
        db.query(sqlQuery, [email], function(err, result) {
            if (err || result.length === 0) {
                return callback(err || 'Utilisateur non trouvé.', null);
            } else {
                return callback(null, result[0]);
            }
        });
    }
};
