const Forbidden = require('../customErrors/Forbidden');
const { articleRes } = require('../libs/messages');

module.exports.checkOwner = (req, res, next) => {
  if (req.user._id !== String(req.article.owner)) { throw new Forbidden(articleRes.forbidden); }
  next();
};
