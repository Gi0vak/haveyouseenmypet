
const connection = require("../database");

const getPets = (req, res) => {
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
const getPet = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM annonce WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Erreur lors de l'exécution de la requête : ", err);
            res.status(500).send("Erreur lors de la récupération de l'annonce");
        } else {
            if (result.length > 0) {
                res.status(200).send(result[0]);
            } else {
                res.status(404).send("Annonce non trouvée");
            }
        }
    });
};




module.exports = {
    getPets,
    getPet,
};
