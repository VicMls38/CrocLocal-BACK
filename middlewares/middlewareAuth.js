const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'Token manquant.' });
    }

    try {
        
        token = token.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attacher les données décodées à la requête
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token invalide.' });
    }
};
