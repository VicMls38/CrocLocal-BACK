var db = require('../database');

module.exports = {

    getAllProduits: function(siret_producteurs, callback) {
        var sqlQuery = "SELECT * FROM produits";
        db.query(sqlQuery, [siret_producteurs], function(err, result) {
            if (err) {
                console.log(sqlQuery)
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },
    getAllLegume: function(siret_producteurs, callback) {
        var sqlQuery = "SELECT * FROM produits p INNER JOIN typeProduits tp ON tp.id_typeProduits = p.id_typeProduits WHERE tp.typeProduits = 'Légume' ORDER BY p.nom_produits";
        db.query(sqlQuery, [siret_producteurs], function(err, result) {
            if (err) {
                console.log(sqlQuery)
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },
    getAllFruit: function(siret_producteurs, callback) {
        var sqlQuery = "SELECT * FROM produits p INNER JOIN typeProduits tp ON tp.id_typeProduits = p.id_typeProduits WHERE tp.typeProduits = 'Fruit' ORDER BY p.nom_produits";
        db.query(sqlQuery, [siret_producteurs], function(err, result) {
            if (err) {
                console.log(sqlQuery)
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    registerProduits: function(id_typesProduits, nom_produits, callback) {
        var sqlQuery = "INSERT INTO produits(id_typesProduits, nom_produits) Values (?, ?)";
        db.query(sqlQuery, [id_typesProduits, nom_produits], function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    deleteMesProduits: function(siret_producteurs, id_produits, callback) {
        var sqlQuery = "DELETE FROM WHERE siret_producteurs = ? AND id_produits = ?";
        db.query(sqlQuery, [siret_producteurs, id_produits], function(err, result) {
            if (err) {
                return callback(err, null);
            } else {
                return callback(null, result);
            }
        });
    },

    // registerTypeProduits: function(id_avis, reponse_avis, siret_token, callback) {
    //     var sqlQuery = "UPDATE  SET = ? WHERE = ? AND  = ?";
    //     db.query(sqlQuery, [siret_producteurs, id_consommateurs, note_avis, date_avis, message_avis], function(err, result) {
    //         if (err) {
    //             return callback(err, null);
    //         } else {
    //             return callback(null, result);
    //         }
    //     });
    // },

}