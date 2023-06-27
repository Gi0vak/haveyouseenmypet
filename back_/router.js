// définition des routes API
const router = require("express").Router();
const { getAnnounces, getAnnounce, createUser, createAdress, createAnimal, createAnnounce, deleteAnnounce, updateAnnounce } = require("./controllers/Pet");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get("/api/announces", getAnnounces);
router.get("/api/announces/:id", getAnnounce);
router.post("/api/users", createUser);
router.post("/api/announces", createAnnounce);
router.post("/api/adresses", createAdress);
router.post("/api/animals", createAnimal);
router.put("/api/announces/:id", updateAnnounce);
router.delete("/api/announces/:id", deleteAnnounce);


module.exports = router;
