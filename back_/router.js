const app = express();
// définition des routes API


router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get("/api/search", getSearch);



router.get("/api/pets/:petID", getPet);

router.post("/api/pets", createPet);

router.put("/api/pets/:petID", updatePet);

router.delete("/api/pets/:petID", deletePet);

module.exports = router;
