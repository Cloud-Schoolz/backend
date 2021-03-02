const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const Student = require("../students/student-model");
const { isValid } = require("../middleware/isValid");
const { jwtSecret } = require("../middleware/secret");

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    Student.add(credentials)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "Please provide a email and a password. Your password should be alphanumeric",
    });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (isValid(req.body)) {
    Student.findBy({ email: email })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = makeToken(user); // make token
          res.status(200).json({message: `Welcome ${user.name} to our API`, userID: user.id, token}); // send it back
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
    username: user.name,
  };
  const options = {
    expiresIn: "3 days",
  };
  return jwt.sign(payload, jwtSecret, options);
}

router.get("/", (req, res) => {
  Student.find()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((err) => res.send(err.message));
});

module.exports = router;
