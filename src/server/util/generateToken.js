const jwt = require('jsonwebtoken');

/**
   * Generate token based on payload.
   *
   * @param {*} id
   * @param {*} isAdmin
   */
const generateToken = ({ payload = {}, options = {} }) => {
  const secretKey = process.env.SECRET_KEY;

  const token = jwt.sign(payload, secretKey, options);

  return token;
};

module.exports = {
  generateToken,
};
