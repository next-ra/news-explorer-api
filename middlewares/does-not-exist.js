const NotFound = require('../customErrors/NotFound');
const { errorsRes } = require('../libs/messages');

module.exports.doesNotExist = (req, res, next) => {
  next(new NotFound(errorsRes.notFound));
};
