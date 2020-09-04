const { celebrate, Joi } = require('celebrate');
const { template } = require('../libs/template-of-validation');
const { errors } = require('../libs/celebrate-error-messages');

const CreateUserValidation = celebrate(
  {
    body: Joi.object()
      .keys({
        name: Joi.string()
          .min(2)
          .max(30)
          .alphanum()
          .required()
          .messages(errors),
        email: template.email,
        password: template.password,
      })
      .messages(errors),
  },
  { abortEarly: false },
);

const loginValidation = celebrate(
  {
    body: Joi.object()
      .keys({
        email: template.email,
        password: template.password,
      })
      .messages(errors),
  },
  { abortEarly: false },
);

const CreateArticleValidation = celebrate(
  {
    body: Joi.object()
      .keys({
        keyword: template.textOnly,
        title: template.textOnly,
        text: template.textOnly,
        date: template.textOnly,
        source: template.textOnly,
        link: template.link,
        image: template.link,
      })
      .messages(errors),
  },
  { abortEarly: false },
);
module.exports = {
  CreateUserValidation,
  loginValidation,
  CreateArticleValidation,
};
