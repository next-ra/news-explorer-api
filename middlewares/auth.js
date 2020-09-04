const jwt = require('jsonwebtoken');
const config = require('../config');
const Unauthorized = require('../customErrors/Unauthorized');
const { userRes } = require('../libs/messages');

module.exports.auth = (req, res, next) => {
  const { jwt: token } = req.cookies;
  if (!token) {
    throw new Unauthorized(userRes.needAuth);
  }
  let payload;
  try {
    payload = jwt.verify(token, config.JWT_SECRET);
  } catch (err) {
    throw new Unauthorized(userRes.needAuth);
  }
  req.user = payload;
  next();
};
