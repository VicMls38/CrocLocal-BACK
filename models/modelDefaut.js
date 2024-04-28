// Importation de la connexion à la base de données
var db = require('../database');

// Exportation du modèle MySQL (requêtes...)
module.exports = {


    Inscription: async (nom, prenom, email, password) => {
        const connection = await connectToDatabase();
    
        try {
          await connection.execute(
            'INSERT INTO Consommateur (Nom_Consommateur, Prenom_Consommateur, Email_Consommateur, Password_Consommateur) VALUES (?, ?, ?, ?)',
            [nom, prenom, email, password]
          );
    
          return { success: true, message: 'Utilisateur inscrit avec succès' };
        } catch (error) {
          return { success: false, error: error.message };
        } finally {
          await connection.end();
        }
      },

    // Fonction pour sélectionner tous les utilisateurs
    getAllConsommateur: function(callback) {
        // Requête SELECT pour sélectionner tous les utilisateurs
        var sqlQuery = "SELECT * FROM Consommateur";

        // Exécution de la requête
        db.query(sqlQuery, function(err, result) {
            if (err) {
                // En cas d'erreur, transmettez l'erreur au callback
                return callback(err, null);
            } else {
                // En cas de succès, transmettez les résultats au callback
                return callback(null, result);
            }
        });
    }

    
};

