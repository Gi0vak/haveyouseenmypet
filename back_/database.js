const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pets",
});

connection.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données : ", err);
    } else {
        console.log("Connecté à la base de données");
    }
});

module.exports = connection;
