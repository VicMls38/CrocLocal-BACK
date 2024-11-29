const express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')

const app = express()

dotenv.config()

// Autoriser les requêtes depuis localhost:5173
app.use(cors({
    origin: ['http://localhost:5173']
}));


app.use(express.json())
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({extended: true})); 


/*----- ROUTES -----*/

const RouteurDefaut = require('./routes/routeDefaut')
const RouteurAuth = require('./routes/routeAuth')

/*-----------------*/


app.use('/', RouteurDefaut);
app.use('/auth', RouteurAuth);



const port = 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})