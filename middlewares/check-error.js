const { isCelebrate } = require('celebrate');
const BadRequest = require('../customErrors/BadRequest');
const Conflict = require('../customErrors/Conflict');
const { errorsRes } = require('../libs/messages');

module.exports.celebrateErrorHandler = (err, req, res, next) => {
  if (isCelebrate(err)) throw new BadRequest(err.message);
  if (err.name === 'ValidationError') throw new Conflict(errorsRes.uniq);
  if (err.name === 'CastError') throw new BadRequest(errorsRes.wrongId);
  next(err);
};
