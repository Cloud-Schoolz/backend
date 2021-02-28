module.exports = {
    isValid,
  };
  
  function isValid(user) {
    return Boolean(
      user.name && user.password && user.email && typeof user.password === "string"
    );
  }