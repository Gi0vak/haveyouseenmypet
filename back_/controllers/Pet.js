
const connection = require("../database");

const getPets = (req, res) => {
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
// const getPet = (req, res) => {
//     const sql =
//         "SELECT animal.name, animal.sexe, animal.race, animal.couleur, animal.imageURL, adresse_perte.code_postal, annonce.date_perte FROM annonce INNER JOIN animal ON annonce.animalId = animal.id INNER JOIN adresse_perte ON annonce.adresse_perteId = adresse_perte.id;";

//     connection.query(sql, (err, result) => {
//         if (err) {
//             console.error("Erreur lors de l'exécution de la requête : ", err);
//         } else {
//             res.send(result);
//         }
//     });
// };

module.exports = {
    getPets,
};
