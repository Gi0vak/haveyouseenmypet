
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
    const sql = `SELECT animal.id, animal.name, animal.sexe, animal.race, animal.couleur, animal.imageURL, animal.puce, animal.age, animal.description, adresse_perte.code_postal, annonce.date_perte, utilisateur.prenom, utilisateur.nom, adresse_perte.ville, adresse_perte.adresse_premiere_ligne
    FROM annonce 
    INNER JOIN animal ON annonce.animalId = animal.id 
    INNER JOIN adresse_perte ON annonce.adresse_perteId = adresse_perte.id 
    INNER JOIN utilisateur ON annonce.utilisateurId = utilisateur.id 
    WHERE annonce.id = ?`;
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
        } else {
            res.send(result);
        }
    });
};

const createUser = (req, res) => {
    const { nom, prenom, telephone, mail, password } = req.body;
    const sql = `INSERT INTO utilisateur (nom, prenom, telephone, mail, password) VALUES (?, ?, ?, ?, ?)`;
    const values = [nom, prenom, telephone, mail, password];
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
            res.status(500).send("Erreur lors de la création de l'utilisateur");
        } else {
            console.log(result);
            res.send(result);
        }

    });
};

const createAdress = (req, res) => {
    const { adresse_premiere_ligne, adresse_seconde_ligne, ville, code_postal } = req.body;
    const sql = `INSERT INTO adresse_perte (adresse_premiere_ligne, adresse_seconde_ligne, ville, code_postal) VALUES (?, ?, ?, ?)`;
    const values = [adresse_premiere_ligne, adresse_seconde_ligne, ville, code_postal];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
            res.status(500).send("Erreur lors de la création de l'utilisateur");
        } else {
            res.send(result);
        }
    });
};
const createAnimal = (req, res) => {
    const { nom, prenom, telephone, mail, password } = req.body;
    const sql = `INSERT INTO utilisateur (nom, prenom, telephone, mail, password) VALUES (?, ?, ?, ?, ?)`;
    const values = [nom, prenom, telephone, mail, password];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
            res.status(500).send("Erreur lors de la création de l'utilisateur");
        } else {
            res.send(result);
        }
    });
};
const createAnnounce = (req, res) => {
    const {
        adresse_premiere_ligne,
        adresse_seconde_ligne,
        ville,
        code_postal } = req.body;
    const sql = `INSERT INTO announce (adresse_premiere_ligne, adresse_seconde_ligne, ville,code_postal) VALUES (?, ?, ?, ?, ?)`;
    const values = [adresse_premiere_ligne, adresse_seconde_ligne, ville, code_postal];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
            res.status(500).send("Erreur lors de la création de l'utilisateur");
        } else {
            res.send(result);
        }
    });
};



module.exports = {
    getAnnounces,
    getAnnounce,
    createUser,
    createAdress,
    createAnimal,
    createAnnounce
};
