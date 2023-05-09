
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
    const sql =
        `
    INSERT INTO utilisateur (nom, prenom, telephone, mail, password, nouveau_champ) SELECT nom, prenom, telephone, mail, password 
    FROM utilisateur`;

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
        "SELECT animal.name, animal.sexe, animal.race, animal.couleur, animal.imageURL, adresse_perte.code_postal, annonce.date_perte, annonce.id FROM annonce INNER JOIN animal ON annonce.animalId = animal.id INNER JOIN adresse_perte ON annonce.adresse_perteId = adresse_perte.id;";

    connection.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
        } else {
            res.send(result);
        }
    });
};

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
module.exports = {
    getAnnounces,
    getAnnounce,
    createUser,
    createAdress
};
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
