const router = require('express').Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { createUser, login } = require('../controllers/users');
const { errorHandler } = require('../middlewares/errorHandler');
const usersRouter = require('./users');
const { auth } = require('../middlewares/auth');

router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/signup', createUser);
router.post('/signin', login);
router.use(auth);
router.use('/users', usersRouter);

router.use('/', errorHandler);
module.exports = router;
