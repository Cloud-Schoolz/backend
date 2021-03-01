const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json("Token Required");
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json("The token is bad" + err.message);
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
};
