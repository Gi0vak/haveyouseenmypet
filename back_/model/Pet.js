const mongoose = require("mongoose");

// definition du schema JSON
const PetSchema = new mongoose.Schema({
    company: {
        type: String,
        required: false,
    },
    logo: {
        type: String,
        default: "https://i.postimg.cc/zD6trrNG/Ue-Tu-X5-Pk-male-6-cartoon8.png"
    },
    logoBackground: {
        type: String,
        required: false,
    },
    position: {
        type: String,
        required: false,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    contract: {
        type: String,
        required: false,
        default: "Full-time",
    },
    location: {
        type: String,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
    apply: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    requirements: {
        content: {
            type: String,
            required: false,
        },
        items: {
            type: Array,
            required: false,
        },
    },
    role: {
        content: {
            type: String,
            required: false,
        },
        items: {
            type: Array,
            required: false,
        },
    },
});


module.exports = mongoose.model("Pet", PetSchema);
