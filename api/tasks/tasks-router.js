const Task = require("./tasks.model");
const express = require("express")
const router = express.Router();
const restricted = require("../middleware/auth")
const adminPrivledges = require("../middleware/adminCheck")


router.get("/", restricted , (req, res) => {
    Task.find().then(( tasks ) => {
        res.status(200).json( tasks );
    }).catch(() => res.status(500).json({ message: "The task information could not be retrieved" }));
});

router.get("/:id", restricted , (req, res) => {
    const idVar = req.params.id
    Task.findById(idVar).then((task) => {
        if (!task) {
            res.status(404).json({ message: "The task with the specified ID does not exist" });
        }else {
            res.status(200).json(task);
        }
    }).catch(() => res.status(500).json({ message: "The task information could not be retrieved" }));
});

router.post("/",restricted, adminPrivledges("admin") , (req, res) => {
    const task = req.body
    Task.insert(task).then(newTask => {
        res.status(201).json(newTask);
    }).catch((err) => res.status(500).json({ message: err.message }))
})

router.put("/:id", restricted, adminPrivledges("admin"), (req, res) => {
    const idVar = req.params.id;
    const task = req.body;
    Task.update(idVar, task).then((upTask) => {
        if (upTask) {
            res.status(200).json(upTask);
        }else {
            res.status(404).json({ message: "The post with the specified ID does not exist" });
        }
    }).catch((err) => res.status(500).json({ message: err.message  }));
});

router.delete("/:id", restricted, adminPrivledges("admin"), (req, res) => {
    const idVar = req.params.id;
    Task.remove(idVar).then((task) => {
        res.status(200).json({message: `The ${task} was deleted`});
    }).catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;