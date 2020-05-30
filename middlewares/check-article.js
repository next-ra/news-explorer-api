const Article = require('../models/article');

module.exports.checkArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id)
      .select('+owner')
      .orFail(new Error('статья не найдена'));
    req.article = article;
    next();
  } catch (err) {
    next(err);
  }
};
