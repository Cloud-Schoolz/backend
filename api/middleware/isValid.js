module.exports = {
    isValid,
  };
  
  function isValid(user) {
    return Boolean(
    user.password && user.email && typeof user.password === "string"
    );
  }