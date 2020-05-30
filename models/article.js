const mongoose = require('mongoose');
const { modelRes } = require('../libs/messages');
const { template } = require('../libs/template-of-models');

const articleSchema = new mongoose.Schema({
  keyword: template.textOnly,
  title: template.textOnly,
  text: template.textOnly,
  date: template.textOnly,
  source: template.textOnly,
  link: template.link,
  image: template.link,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, modelRes.required],
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
