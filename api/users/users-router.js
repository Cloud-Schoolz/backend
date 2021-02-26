const Users = require("./users-model.js")
const router = require("express").Router()

router.get("/", (req, res) => {
  Users.find(req.query)
     .then(users => {
    res.json(users)
    })
    .catch(err => {
      res.send(err.message)
  })
})

module.exports = router;
