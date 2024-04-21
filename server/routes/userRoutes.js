const express = require('express');
const router = express.Router();
const User = require('../modal/User');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing


// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { fullName, userName, email, password, confirmPassword } = req.body;
    const newUser = new User({
      fullName,
      userName,
      email,
      password,
      confirmPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "Error signing up" });
  }
});
// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Error logging in" });
  }
});
// Update profile route (PUT)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, password, avatar } = req.body;
    // Construct the update object based on the provided data
    const updateObject = {};
    if (fullName) updateObject.fullName = fullName;
    if (password) updateObject.password = password;
    if (avatar) updateObject.avatar = avatar; // Assuming 'avatar' is the field name for the avatar image

    // Update the user document in the database
    const updatedUser = await User.findByIdAndUpdate(id, updateObject, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Error updating profile" });
  }
});
// Update password route (PUT)
router.put("/:id/password", async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    // Validate that the password is not empty or undefined
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    // You might want to add further validation for password strength, etc.

    // Hash the new password (assuming you're using bcrypt for password hashing)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user document in the database with the hashed password
    const updatedUser = await User.findByIdAndUpdate(id, { password: hashedPassword }, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Error updating profile" });
  }
});
// Fetch user data route
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if id is valid ObjectId format
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    console.log("Fetching user data for ID:", id); // Add this logging statement
    // Fetch user data from the database using the provided ID
    const user = await User.findById(id);
    console.log("User data:", user); // Add this logging statement
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Error fetching user data" });
  }
});
// Fetch all users route
router.get("/", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
});



module.exports = router;