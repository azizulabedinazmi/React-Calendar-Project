const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Registration Endpoint
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send("User registered!");
  } catch (err) {
    res.status(400).send("Registration failed!");
  }
});

// Login Endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.status(200).send("Login successful!");
  } else {
    res.status(401).send("Invalid credentials!");
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));