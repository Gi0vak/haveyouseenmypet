const express = require("express");
const cors = require("cors");
const app = express();
const { getPets } = require("./controllers/Pet");

app.use(cors());

app.get("/api/pets", getPets);
//app.get("/api/pets/:id", getPet);

app.listen(8000, () => {
    console.log("Serveur démarré sur le port 8000");
});

