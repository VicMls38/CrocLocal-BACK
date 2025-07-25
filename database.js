//Importaion du module mysql et iniparser
const mysql = require('mysql')
const util = require('util');
const iniparser = require('iniparser')

//Convertion du fichier DB.ini en objet javascript
let configDB = iniparser.parseSync('./DB.ini')

//Création de la connexion à la bdd
let mysqlconnexion = mysql.createConnection({
    host:configDB['CrocLocal']['HOST'],
    user:configDB['CrocLocal']['USERNAME'],
    password:configDB['CrocLocal']['PASSWORD'],
    database:configDB['CrocLocal']['DATABASE'],
    port:configDB['CrocLocal']['PORT']
   })
   mysqlconnexion.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})

//Exportation du module de connexion à la bdd
module.exports = mysqlconnexion;