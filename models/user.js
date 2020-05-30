const mongoose = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');
const { model } = require('../libs/messages');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: [true, model.required],
  },
  email: {
    type: String,
    unique: true,
    required: [true, model.required],
    validate: (v) => validator.isEmail(v),
    message: model.wrongEmail,
  },
  password: {
    type: String,
    required: [true, model.required],
    minlength: 8,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = async function(email, password) {
  const user = await this.findOne({ email })
    .select('+password')
    .orFail(new Error('wrong email'));

  return bcrypt.compare(password, user.password).then((matched) => {
    if (!matched) {
      throw new Error('wrong pass');
    }
    return user;
  });
};
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user', userSchema);
