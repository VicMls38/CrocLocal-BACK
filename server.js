const express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')

const jwt = require('jsonwebtoken')

dotenv.config()

const app = express()

// Autoriser les requêtes depuis localhost:5173
app.use(cors({
    origin: 'http://localhost:5173'
}));


app.use(express.json())
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({extended: true})); 
app.use(require('body-parser').json())


/*----- ROUTES -----*/

const RouteurDefaut = require('./routes/routeDefaut')

/*-----------------*/


app.use('/', RouteurDefaut);

/* PRIVATE ROUTE */

app.use('/user', (req, res, next)=> {
  authMiddleware(req, res, next)
})

/*----------------------*/


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


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})