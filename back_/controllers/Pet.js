
const connection = require("../database");

const getAnnounces = (req, res) => {
    const sql =
        "SELECT animal.id, animal.name, animal.sexe, animal.race, animal.couleur, animal.imageURL, adresse_perte.code_postal, annonce.date_perte FROM annonce INNER JOIN animal ON annonce.animalId = animal.id INNER JOIN adresse_perte ON annonce.adresse_perteId = adresse_perte.id;";

    connection.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
        } else {
            res.send(result);
        }
    });
};
const getAnnounce = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT animal.id, animal.name, animal.sexe, animal.race, animal.couleur, animal.imageURL, adresse_perte.code_postal, annonce.date_perte FROM annonce INNER JOIN animal ON annonce.animalId = animal.id INNER JOIN adresse_perte ON annonce.adresse_perteId = adresse_perte.id WHERE annonce.id = ?`;

    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
        } else {
            res.send(result);
        }
    });
};

const createUser = (req, res) => {
    const sql =
        "SELECT animal.name, animal.sexe, animal.race, animal.couleur, animal.imageURL, adresse_perte.code_postal, annonce.date_perte FROM annonce INNER JOIN animal ON annonce.animalId = animal.id INNER JOIN adresse_perte ON annonce.adresse_perteId = adresse_perte.id;";

    connection.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
        } else {
            res.send(result);
        }
    });
};
const createAdress = (req, res) => {
    const sql =
        "SELECT animal.name, animal.sexe, animal.race, animal.couleur, animal.imageURL, adresse_perte.code_postal, annonce.date_perte FROM annonce INNER JOIN animal ON annonce.animalId = animal.id INNER JOIN adresse_perte ON annonce.adresse_perteId = adresse_perte.id;";

    connection.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
        } else {
            res.send(result);
        }
    });
};
const createAnimal = (req, res) => {
    const { name, race, age, puce, sexe, couleur, poids, adresseId, utilisateurId, description, imageURL } = req.body;

    const sql = "INSERT INTO animal (name, race, age, puce, sexe, couleur, poids, adresseId, utilisateurId, description, imageURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
    connection.query(sql, [name, race, age, puce, sexe, couleur, poids, adresseId, utilisateurId, description, imageURL], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
        } else {
            res.send(result);
        }
    });
};


module.exports = {
    getAnnounces,
    getAnnounce,
    createAnimal,
    createUser,
    createAdress
};
