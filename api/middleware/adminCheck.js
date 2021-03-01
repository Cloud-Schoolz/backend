module.exports = (admin) => (req, res, next) => {
  console.log(admin);

  if (req.decodedToken.admin === admin) {
    next();
  } else {
    res.status(403).json("You are not an admin, YOU SHALL NOT PASS!!!!");
  }
};
