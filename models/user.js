const mongoose = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: [true, 'обязательное поле'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'обязательное поле'],
    validate: (v) => validator.isEmail(v),
    message: 'неправильный формат почты',
  },
  password: {
    type: String,
    required: [true, 'обязательное поле'],
    minlength: 8,
    select: false,
  },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user', userSchema);
