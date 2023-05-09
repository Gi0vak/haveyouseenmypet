const express = require("express");
const cors = require("cors");
const router = require("./router");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(router);





app.listen(8000, () => {
    console.log("Serveur démarré sur le port 8000");
});

