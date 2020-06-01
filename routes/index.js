const router = require('express').Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { createUser, login } = require('../controllers/users');
const { doesNotExist } = require('../middlewares/does-not-exist');
const { errorHandler } = require('../middlewares/error-handler');
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const { auth } = require('../middlewares/auth');
const { requestLogger, errorLogger } = require('../middlewares/logger');
const {
  CreateUserValidation,
  loginValidation,
} = require('../middlewares/celebrate-validation');
const { checkError } = require('../middlewares/check-error');
const limiter = require('../middlewares/limiter');

router.use(helmet());
router.use(limiter);
router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(requestLogger);
router.post('/signup', CreateUserValidation, createUser);
router.post('/signin', loginValidation, login);
router.use(auth);
router.use('/users', usersRouter);
router.use('/articles', articlesRouter);
router.all('*', doesNotExist);
router.use(errorLogger);
router.use(checkError);
router.use('/', errorHandler);
module.exports = router;
