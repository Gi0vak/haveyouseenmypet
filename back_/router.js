const router = require("express").Router();
// définition des routes API
const {
    getSearch,
    getPet,
    getPets,
    createPet,
    updatePet,
    deletePet } = require("./controllers/Pet");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get("/api/search", getSearch);

router.get("/api/pets", getPets);

router.get("/api/pets/:petID", getPet);

router.post("/api/pets", createPet);

router.put("/api/pets/:petID", updatePet);

router.delete("/api/pets/:petID", deletePet);

module.exports = router;
