var db = require('../database');

module.exports = {
    // Fonction pour sélectionner tous les utilisateurs
    getAllAvisByProducteur: function(siret_producteurs, callback) {
        var sqlQuery = "SELECT a.note_avis, a.date_avis, a.message_avis, a.reponse_avis FROM avis a INNER JOIN producteurs p ON p.siret_producteurs = a.siret_producteurs WHERE a.siret_producteurs = ?";
        db.query(sqlQuery, [siret_producteurs], function(err, result) {
            if (err) {
                console.log(sqlQuery)
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    registerAvis: function(siret_producteurs, id_consommateurs, note_avis, date_avis, message_avis, callback) {
        var sqlQuery = "INSERT INTO avis (siret_producteurs, id_consommateurs, note_avis, date_avis, message_avis) Values (?, ?, ?, ?, ?)";
        db.query(sqlQuery, [siret_producteurs, id_consommateurs, note_avis, date_avis, message_avis], function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    addResponseAvis: function(id_avis, reponse_avis, siret_token, callback) {
        var sqlQuery = "UPDATE avis a SET a.reponse_avis = ? WHERE a.id_avis = ? AND a.siret_producteurs = ?";
        db.query(sqlQuery, [siret_producteurs, id_consommateurs, note_avis, date_avis, message_avis], function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    daleteAvis: function(id_avis, callback) {
        var sqlQuery = "DELETE FROM avis WHERE id_avis = ?";
        db.query(sqlQuery, [siret_producteurs, id_consommateurs, note_avis, date_avis, message_avis], function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },
}