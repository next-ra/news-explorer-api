const router = require('express').Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { createUser, login } = require('../controllers/users');
const { doesNotExist } = require('../middlewares/does-not-exist');

const usersRouter = require('./users');
const articlesRouter = require('./articles');
const { auth } = require('../middlewares/auth');

const {
  CreateUserValidation,
  loginValidation,
} = require('../middlewares/celebrate-validation');


router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/signup', CreateUserValidation, createUser);
router.post('/signin', loginValidation, login);
router.use(auth);
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);
router.all('*', doesNotExist);


module.exports = router;
