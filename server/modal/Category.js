// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true // Ensure that each category has a unique name
  },
  description: {
    type: String,
    required: true
  }
  // You can add more fields as needed
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
