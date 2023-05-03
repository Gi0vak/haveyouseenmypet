const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pets"
});

connection.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données : ", err);
    } else {
        console.log("Connecté à la base de données");
    }
});

app.get("/", (req, res) => {
    const sql = "SELECT animal.name, animal.sexe, animal.race, animal.couleur, animal.imageURL, adresse_perte.code_postal, annonce.date_perte FROM annonce INNER JOIN animal ON annonce.animalId = animal.id INNER JOIN adresse_perte ON annonce.adresse_perteId = adresse_perte.id;"

    connection.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
        } else {
            res.send(result);
        }
    });
});

app.listen(8000, () => {
    console.log("Serveur démarré sur le port 8000");
});