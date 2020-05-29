const router = require('express').Router();
const { createUser, getUser, login } = require('../controllers/users');

router.post('/signup', createUser);
router.post('/signin', login);
router.get('/me', getUser);
module.exports = router;
