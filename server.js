const express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors');


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



const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})