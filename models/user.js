const mongoose = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const { modelRes } = require('../libs/messages');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: [true, modelRes.required],
  },
  email: {
    type: String,
    unique: true,
    required: [true, modelRes.required],
    validate: (v) => validator.isEmail(v),
    message: modelRes.wrongEmail,
  },
  password: {
    type: String,
    required: [true, modelRes.required],
    minlength: 8,
    select: false,
  },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user', userSchema);
