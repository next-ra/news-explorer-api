const mongoose = require('mongoose');
const validator = require('validator');
const { modelRes } = require('../libs/messages');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: [true, modelRes.required],
  },
  title: {
    type: String,
    required: [true, modelRes.required],
  },
  text: {
    type: String,
    required: [true, modelRes.required],
  },
  date: {
    type: String,
    required: [true, modelRes.required],
  },
  source: {
    type: String,
    required: [true, modelRes.required],
  },
  link: {
    type: String,
    required: [true, modelRes.required],
    validate: (v) => validator.isURL(v),
    message: modelRes.wrongUrl,
  },
  image: {
    type: String,
    required: [true, modelRes.required],
    validate: (v) => validator.isURL(v),
    message: modelRes.wrongUrl,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, modelRes.required],
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
