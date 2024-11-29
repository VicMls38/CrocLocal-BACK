// Importation du modèle userModel
var ModelAvis = require('../models/modelAvis');

module.exports = {
    // Redirection vers l'accueil
    getAvisByProducteur: (req, res) => {
        const siret_producteurs = req.params['siret_producteurs'];
    
        // Vérification de la validité de l'identifiant (optionnel, mais recommandé)
        if (!siret_producteurs) {
            return res.status(400).json({ error: "Le paramètre 'siret_producteurs' est requis." });
        }
    
        try {
            ModelAvis.getAllAvisByProducteur(siret_producteurs, (err, result) => {
                if (err) {
                    console.error("Erreur lors de la récupération des avis :", err);
                    return res.status(500).json({ error: "Erreur lors de la récupération des avis." });
                }
    
                if (!result || result.length === 0) {
                    return res.status(404).json({ message: "Aucun avis trouvé pour ce producteur." });
                }
    
                // Renvoyer les résultats sous forme de JSON
                res.status(200).json({
                    message: "Récupération des avis réussie.",
                    avis: result,
                });
            });
        } catch (error) {
            console.error("Erreur interne :", error);
            res.status(500).json({ error: "Erreur interne." });
        }
    },
    

    /* 
    {
        "siret_producteurs": "6a57e5az87",
    }
    */

    registerAvis: (req, res) => {
        let {siret_producteurs, id_consommateurs, note_avis, date_avis, message_avis} =  req.body
        try {
            ModelAvis.registerAvis(siret_producteurs, id_consommateurs, note_avis, date_avis, message_avis, (err, result) => {
                if (err) {
                    return res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'avis.'+err+'' });
                }
                res.status(201).json({ message: 'Avis enregistré avec succès.' });
            });
        } catch (error) {
            res.status(500).json({ error: 'Erreur interne.' });
        }
    },

    /*
    {
        "siret_producteurs": "6a57e5az87",
        "id_consommateurs": 1,
        "note_avis": 4,
        "date_avis": "2024-11-29 17:00:00",
        "message_avis": "C'est cool !!"
    }
    */


    responseAvis: (req, res) => {
        let {id_avis, reponse_avis} =  req.body
        console.log(req)
        let siret_token = req.user.id
        console.log(siret_token)
        try {
            ModelAvis.addResponseAvis(id_avis, reponse_avis, siret_token, (err, result) => {
                if (err) {
                    return res.status(500).json({ error: 'Erreur lors de l\'enregistrement de la réponse de l\'avis.'+err+'' });
                }
                res.status(201).json({ message: 'Avis répondu avec succès.' });
            });
        } catch (error) {
            res.status(500).json({ error: 'Erreur interne.' });
        }
    },

};


