const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/modelAuth'); // Modèle des utilisateurs

module.exports = {
    // Enregistrement d'un utilisateur
    register: async (req, res) => {
        const { email, password, last_name, first_name, tel, cp, ville, adresse } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            UserModel.registerUser(email, hashedPassword, last_name, first_name, tel, cp, ville, adresse, (err, result) => {
                if (err) {
                    return res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
                }
                res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
            });
        } catch (error) {
            res.status(500).json({ error: 'Erreur interne.' });
        }
    },

    // Connexion d'un utilisateur
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            UserModel.getUserByUsername(email, async (err, user) => {
                if (err || !user) {
                    return res.status(401).json({ error: 'email Identifiants invalides.' });
                }
                const isMatch = await bcrypt.compare(password, user.mdp_consommateurs);
                if (!isMatch) {
                    return res.status(401).json({ error: 'mdp Identifiants invalides.' });
                }

                // Générer le token JWT
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.json({ message: 'Connexion réussie.', token });
            });
        } catch (error) {
            res.status(500).json({ error: 'Erreur interne.' });
        }
    }
};
