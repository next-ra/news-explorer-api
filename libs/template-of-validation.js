const { Joi } = require('celebrate');
const { urlValidate } = require('./custom-url-validate');
const { errors } = require('./celebrate-error-messages');

const template = {
  email: Joi.string()
    .required()
    .email({ allowUnicode: false })
    .messages(errors),
  password: Joi.string()
    .required()
    .min(8)
    .messages(errors),
  textOnly: Joi.string()
    .required()
    .messages(errors),
  link: Joi.string()
    .required()
    .custom(urlValidate)
    .messages(errors),
};

module.exports = {
  template,
};
