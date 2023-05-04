const Pet = require("../model/Pet");

const getPets = (req, res) => {
    Pet.find()
        .then((pets) => {
            res.json(pets);
            console.log('coucou');
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const getSearch = async (req, res) => {
    const { position, contract, location, company } = req.query;
    try {
        const query = {};
        if (position) {
            query.position = { $regex: position, $options: 'i' };
        }
        if (contract) {
            query.contract = contract;
        }
        if (location) {
            query.location = { $regex: location, $options: 'i' };
        }
        if (company) {
            query.company = { $regex: company, $options: 'i' };
        }
        const response = await Pet.find(query);
        res.json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPet = (req, res) => {
    Pet.findOne(
        { _id: req.params.petID })

        .then((pets) => {
            res.json(pets);

        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const createPet = (req, res) => {
    const pet = new Pet({
        id: req.body.id,
        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        postedAt: req.body.postedAt,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,
        requirements: req.body.requirements,
        role: req.body.role,
    });

    pet
        .save()
        .then((pet) => {
            res.json(pet);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const updatePet = (req, res) => {
    console.log('reg.body', req.body);
    Pet.findOneAndUpdate(
        { _id: req.params.petID },
        {
            $set: {
                id: req.body.id,
                company: req.body.company,
                logo: req.body.logo,
                logoBackground: req.body.logoBackground,
                position: req.body.position,
                postedAt: req.body.postedAt,
                contract: req.body.contract,
                location: req.body.location,
                website: req.body.website,
                apply: req.body.apply,
                description: req.body.description,
                "requirements.content": req.body.requirements.content,
                "requirements.items": req.body.requirements.items,
                "role.content": req.body.role.content,
                "role.items": req.body.role.items,
            },
        },
        { new: true }
    )
        .then((pet) => {
            res.json(pet);

        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const deletePet = (req, res) => {
    Pet.deleteOne(
        { _id: req.params.petID })
        .then(() =>
            res.json({
                message: "Pet Deleted"
            }))
        .catch((err) =>
            res.send(err)
        );
};

module.exports = {
    getSearch,
    getPet,
    getPets,
    createPet,
    updatePet,
    deletePet,
};
