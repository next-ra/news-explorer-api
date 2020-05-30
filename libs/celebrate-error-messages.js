const errors = {
  'string.alphanum': `{#key} - может содержать только буквы английского алфавита и цифры`,
  'string.empty': `{#key} - поле не может быть пустым`,
  'string.min': `{#key} - минимальное количество символов должно быть: {#limit}`,
  'string.max': `{#key} - должно быть максимум {#limit} символов`,
  'any.required': `{#key} - обязательное поле`,
  'string.email': `{#key} - должен быть валидным`,
  'any.custom': `{#key} - должна быть валидная ссылка`,
  'object.unknown': `{#key} - недопустимое поле`,
};

module.exports = {
  errors,
};
