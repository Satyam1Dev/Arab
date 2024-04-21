// app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;
const usersRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes"); // Import product routes
const categoryRoutes = require("./routes/categoryRoutes"); // Import category routes

app.use(cors());
app.use(express.json());

// Replace 'your-mongodb-uri' with your MongoDB connection string
mongoose.connect(
  "mongodb+srv://SATYA_PRAKASH:SATYA_PRAKASH@cluster0.pceyq7j.mongodb.net/arab",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Use users routes
app.use("/api/users", usersRoutes);

// Use product routes
app.use("/api/products", productRoutes);
// Use category routes
app.use("/api/categories", categoryRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
