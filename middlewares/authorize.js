const authorize = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user?.role;
  
      if (!userRole || !allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Accès interdit' });
      }
  
      next(); // Si le rôle est autorisé, on passe à la suite
    };
  };
  
  module.exports = authorize;