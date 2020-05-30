const router = require('express').Router();
const { checkArticle } = require('../middlewares/check-article');
const { checkOwner } = require('../middlewares/check-owner');
const {
  createArticle,
  getUsersArticles,
  deleteArticle,
} = require('../controllers/articles');

router.post('/', createArticle);
router.get('/', getUsersArticles);
router.delete('/:id', checkArticle, checkOwner, deleteArticle);
module.exports = router;
