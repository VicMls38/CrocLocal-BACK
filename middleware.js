function authMiddleware(req, res, next) {
    if (req && req.headers && req.headers.authorization) {
        const token = req.headers.authorization;
        if (token) {
            const decodedToken = authenticateToken(token);
            if (decodedToken) {
                // req.userId = decodedToken.userId;
                req.newToken = generateJWT(decodedToken.userId);
                next();
            } else {
                console.log("Could not decode token");
                res.sendStatus(500);
            }
        } else {
            console.log("No token found")
            res.sendStatus(400);
        }
    } else {
        console.log("Issue in request for token")
        res.sendStatus(400);
    }
  }
  
  
  function authenticateToken(completeToken) {
    const token = completeToken && completeToken.split(' ')[1]
  
    if (token == null) {
        console.log("Error reading token : NO TOKEN");
        return false;
    }
  
    return jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log("Error checking token :", err);
            return false;
        }
        return decoded;
    })
  }
  
  function generateJWT(userId) {
    const payload = { userId: userId };
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }