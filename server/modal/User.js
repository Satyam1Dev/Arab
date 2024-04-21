const mongoose = require('mongoose');

// User model and schema
const userSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  email: String,
  password: String,
  confirmPassword: String,
  avatar:String
});
const User = mongoose.model("User", userSchema);
module.exports = User;
