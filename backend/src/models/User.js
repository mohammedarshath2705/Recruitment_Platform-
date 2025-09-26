const mongoose = require('../db');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password_hash: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    maxlength: 100
  },
  title: {
    type: String,
    maxlength: 50
  },
  bio: {
    type: String,
    maxlength: 1000
  }
}, { timestamps: true }); // adds createdAt & updatedAt

module.exports = mongoose.model('User', userSchema);
