const Country = require("./country-model")
const express = require("express")
const router = express.Router();




router.get("/volcountry", (req, res) => {
    Country.volCountry().then(( country ) => {
        res.status(200).json( country );
    }).catch((err) => res.status(500).json({ message: err.messege }));
});


router.get("/volcountry/:id",(req, res) => {
    const idVar = req.params.id
    Country.volCountryId(idVar).then((country) => {
        if (!country) {
            res.status(404).json({ message: "The country with the specified ID does not exist" });
        }else {
            res.status(200).json(country);
        }
    }).catch(() => res.status(500).json({ message: "The country information could not be retrieved" }));
});


router.get("/", (req, res) => {
    Country.find().then(( country ) => {
        res.status(200).json( country );
    }).catch(() => res.status(500).json({ message: "The country information could not be retrieved" }));
});

router.get("/:id",(req, res) => {
    const idVar = req.params.id
    Country.findById(idVar).then((country) => {
        if (!country) {
            res.status(404).json({ message: "The country with the specified ID does not exist" });
        }else {
            res.status(200).json(country);
        }
    }).catch(() => res.status(500).json({ message: "The country information could not be retrieved" }));
});

module.exports = router;