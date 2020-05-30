const Article = require('../models/article');

const createArticle = async (req, res, next) => {
  try {
    const { keyword, title, text, date, source, link, image } = req.body;
    const article = await Article.create({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      owner: req.user._id,
    });
    res.status(201).send({ data: article });
  } catch (err) {
    next(err);
  }
};

const getUsersArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({ owner: req.user._id });
    res.status(200).send({ data: articles });
  } catch (err) {
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    await Article.deleteOne(req.article);

    res.send({ message: 'статья удалена', data: req.article });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createArticle,
  getUsersArticles,
  deleteArticle,
};
