const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const Vol = require("../volunteers/volunteer-model");
const { isValid } = require("../middleware/isValid");
const { jwtSecret } = require("../middleware/secret");


router.post("/register", (req, res) => {
    const credentials = req.body;
   
    if (isValid(credentials)) {
      const rounds = process.env.BCRYPT_ROUNDS || 8;
  
      const hash = bcryptjs.hashSync(credentials.password, rounds);
  
      credentials.password = hash;
  
      Vol.add(credentials)
        .then((user) => {
          res.status(201).json({ data: user });
        })
        .catch((error) => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message:
          "Please provide a username and a password. Your password should be alphanumeric",
      });
    }
  });


  router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    if (isValid(req.body)) {
      Vol.findBy({ email: email })
        .then(([user]) => {
          if (user && bcryptjs.compareSync(password, user.password)) {
            const token = makeToken(user); // make token
            res.status(200).json({ message: "Welcome to our API", token }); // send it back
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        })
        .catch((error) => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message:
          "please provide email and password and the password should be alphanumeric",
      });
    }
  });

  function makeToken(user) {
    const payload = {
      subject: user.id,
      username: user.name 
    };
    const options = {
      expiresIn: '3 days',
    };
    return jwt.sign(payload, jwtSecret, options);
  }








  router.get("/", (req, res) => {
    Vol.find()
      .then((volunteers) => {
        
        res.status(200).json(volunteers);
      })
      .catch((err) => res.send(err.message));
  });


  module.exports = router;