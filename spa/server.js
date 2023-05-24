const express = require('express')
const path = require('path')

const app = express()
const fs = require('fs')
const request = require('request')
const bodyParser = require('body-parser')
const { PORT } = require('./config.js')
const { API_KEY } = require('./config.js')

app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

app.use(bodyParser.json())


const updateDataFile = () => {
    const apiKey = process.env.api_key; // Accéder à la clé d'API à partir des variables d'environnement
  
    request(`https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=${apiKey}`, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      fs.writeFile(__dirname + "/liste.json", JSON.stringify(body), (err) => {
        if (err) throw err;
        console.log("Le fichier liste.json a été sauvegardé !");
      });
    });
  };




// Appeler la fonction au démarrage du serveur
updateDataFile();

app.listen(PORT || 4001, () => {
    console.log('server running on port', PORT)
})
