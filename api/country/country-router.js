const Country = require("./country-model")
const express = require("express")
const router = express.Router();


router.get("/", (req, res) => {
    Country.find().then(( country ) => {
        res.status(200).json( country );
    }).catch(() => res.status(500).json({ message: "The task information could not be retrieved" }));
});

router.get("/:id",(req, res) => {
    const idVar = req.params.id
    Country.findById(idVar).then((country) => {
        if (!country) {
            res.status(404).json({ message: "The task with the specified ID does not exist" });
        }else {
            res.status(200).json(country);
        }
    }).catch(() => res.status(500).json({ message: "The task information could not be retrieved" }));
});

module.exports = router;