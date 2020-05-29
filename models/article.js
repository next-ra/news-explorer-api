const mongoose = require('mongoose');
const validator = require('validator');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: [true, 'обязательное поле'],
  },
  title: {
    type: String,
    required: [true, 'обязательное поле'],
  },
  text: {
    type: String,
    required: [true, 'обязательное поле'],
  },
  date: {
    type: String,
    required: [true, 'обязательное поле'],
  },
  source: {
    type: String,
    required: [true, 'обязательное поле'],
  },
  link: {
    type: String,
    required: [true, 'обязательное поле'],
    validate: (v) => validator.isURL(v),
    message: 'неправильный формат ссылки',
  },
  image: {
    type: String,
    required: [true, 'обязательное поле'],
    validate: (v) => validator.isURL(v),
    message: 'неправильный формат ссылки',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
