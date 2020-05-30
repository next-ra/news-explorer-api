const { isURL } = require('validator');
const { modelRes } = require('./messages');

const template = {
  textOnly: {
    type: String,
    required: [true, modelRes.required],
  },
  link: {
    type: String,
    required: [true, modelRes.required],
    validate: (v) => isURL(v),
    message: modelRes.wrongUrl,
  },
};

module.exports = {
  template,
};
