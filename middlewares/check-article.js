const Article = require('../models/article');
const NotFound = require('../customErrors/NotFound');
const { articleRes } = require('../libs/messages');

module.exports.checkArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id)
      .select('+owner')
      .orFail(new NotFound(articleRes.notFound));
    req.article = article;
    next();
  } catch (err) {
    next(err);
  }
};
