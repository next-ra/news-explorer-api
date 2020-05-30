const mongoose = require('mongoose');
const validator = require('validator');
const { model } = require('../libs/messages');

// const modelTemplate = {
//   type: String,
//   required: [true, model.required],
// };

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: [true, model.required],
  },
  title: {
    type: String,
    required: [true, model.required],
  },
  text: {
    type: String,
    required: [true, model.required],
  },
  date: {
    type: String,
    required: [true, model.required],
  },
  source: {
    type: String,
    required: [true, model.required],
  },
  link: {
    type: String,
    required: [true, model.required],
    validate: (v) => validator.isURL(v),
    message: model.wrongUrl,
  },
  image: {
    type: String,
    required: [true, model.required],
    validate: (v) => validator.isURL(v),
    message: model.wrongUrl,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, model.required],
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
