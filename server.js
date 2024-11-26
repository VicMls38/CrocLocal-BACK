const express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')
const middleware = require('./middleware')

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

/*----- ROUTEURS -----*/

const RouteurDefaut = require('./routes/routeDefaut')



/* PUBLIC ROUTE */


app.use('/', RouteurDefaut);

/* PRIVATE ROUTE */

app.use('/user', (req, res, next)=> {
  middleware.authMiddleware(req, res, next)
})

/*----------------------*/





const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})