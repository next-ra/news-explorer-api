const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports.auth = (req, res, next) => {
  const { jwt: token } = req.cookies;
  if (!token) {
    throw new Error('нужна авторизация 401');
  }
  let payload;
  try {
    payload = jwt.verify(token, config.JWT_SECRET);
  } catch (err) {
    throw new Error('нужна авторизация 401');
  }
  req.user = payload;
  next();
};
