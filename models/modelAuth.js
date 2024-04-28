// Importation de la connexion à la base de données
var db = require('../database');

// Exportation du modèle MySQL (requêtes...)
module.exports = {
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
    },

    Inscription: async (req, res) => {
        const { username, email, password } = req.body;
      
        // Se connecter à la base de données
        const connection = await connectToDatabase();
      
        try {
          // Insérer l'utilisateur dans la base de données
          await connection.execute(
            'INSERT INTO Consommateur (Nom_Consommateur, Prenom_Consommateur, Email_Consommateur, Password_Consommateur) VALUES (?, ?, ?, ?)',
            [nom, prenom, email, password]
          );
      
          // Répondre avec un statut 201 (créé)
          res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
          // En cas d'erreur, répondre avec un statut 400 (mauvaise requête)
          res.status(400).json({ error: error.message });
        } finally {
          // Fermer la connexion à la base de données
          await connection.end();
        }
    }

    
};

