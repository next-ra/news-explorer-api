const mongoose = require('mongoose');
const { isEmail } = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');
const { modelRes } = require('../libs/messages');
const Unauthorized = require('../customErrors/Unauthorized');
const { userRes } = require('../libs/messages');

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
    validate: (v) => isEmail(v),
    message: modelRes.wrongEmail,
  },
  password: {
    type: String,
    required: [true, modelRes.required],
    minlength: 8,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = async function (email, password) {
  const user = await this.findOne({ email })
    .select('+password')
    .orFail(new Unauthorized(userRes.forbidden));

  return bcrypt.compare(password, user.password).then((matched) => {
    if (!matched) {
      throw new Unauthorized(userRes.forbidden);
    }
    return user;
  });
};
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user', userSchema);
