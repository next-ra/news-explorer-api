module.exports.doesNotExist = (req, res, next) => {
  next(new Error('запрашиваемый ресурс не найден'));
};
