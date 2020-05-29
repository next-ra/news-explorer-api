const router = require('express').Router();
const bodyParser = require('body-parser');
const { errorHandler } = require('../middlewares/errorHandler');
const users = require('./users');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/', users);
router.use('/', errorHandler);
module.exports = router;
