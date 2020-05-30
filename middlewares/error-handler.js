module.exports = {
  errorHandler: (err, req, res, next) => {
    // if (!err.status) {
    //   res.send(err);
    // } else
    res
      .status(err.status || 500)
      .send({ message: err.message || 'ошибка сервера' });
  },
};
