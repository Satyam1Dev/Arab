// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;
const productRoutes = require('./route/productRoutes'); // Import product routes
const userRoutes = require('./route/userRoutes'); // Import user routes
const categoryRoutes = require('./route/categoryRoutes'); // Import category routes

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://SATYA_PRAKASH:SATYA_PRAKASH@cluster0.pceyq7j.mongodb.net/arab', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Use product routes
app.use('/api/products', productRoutes);

// Use user routes
app.use('/api/users', userRoutes);

// Use category routes
app.use('/api/categories', categoryRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
