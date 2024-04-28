const userModel = require('../models/modelAuth');

module.exports = {
  Inscription: async (req, res) => {
    const { username, email, password } = req.body;
  
    // Insérer les données utilisateur dans la base de données
    try {
        // Votre logique d'insertion des données utilisateur ici
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Répondre avec un statut 201 (créé) si tout s'est bien passé
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // En cas d'erreur, répondre avec un statut 400 (mauvaise requête)
        console.error(error);
        res.status(400).json({ error: 'Failed to register user' });
    }
  }
};
