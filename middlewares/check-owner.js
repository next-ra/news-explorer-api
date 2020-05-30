module.exports.checkOwner = (req, res, next) => {
  if (req.user._id !== String(req.article.owner)) {
    throw new Error('нельзя удалять чужие статьи');
  } else next();
};
