const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');
const { userRes } = require('../libs/messages');
const NotFound = require('../customErrors/NotFound');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hash,
    });
    res
      .status(201)
      .send({ message: userRes.created, email: user.email, name: user.name });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findUserByCredentials(email, password);
    const token = await jwt.sign({ _id: user._id }, config.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.cookie('jwt', token, {
      maxAge: 3600000,
      httpOnly: true,
      sameSite: true,
    });
    res.status(200).send({ message: userRes.login });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).orFail(
      new NotFound(userRes.notFound),
    );
    res.send({ data: user });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  createUser,
  getUser,
  login,
};
