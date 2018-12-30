/*
 *  MONGO Table User Model
 *
 */

// Dependency
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  age: {
    type: Number,
    required: [true, 'Age Is Required']
  },
  name: {
    type: String,
    required: function () {
      return this.age > 3 ;
    }
  },
  password: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('User', userSchema);
