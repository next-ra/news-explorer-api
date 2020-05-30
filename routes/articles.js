const router = require('express').Router();
const { checkArticle } = require('../middlewares/check-article');
const { checkOwner } = require('../middlewares/check-owner');
const {
  createArticle,
  getUsersArticles,
  deleteArticle,
} = require('../controllers/articles');
const { CreateArticleValidation } = require('../middlewares/celebrate');

router.post('/', CreateArticleValidation, createArticle);
router.get('/', getUsersArticles);
router.delete('/:id', checkArticle, checkOwner, deleteArticle);
module.exports = router;
