const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/user");

dotenv.config();
const jwtKey = process.env.JWT_SECRET;

// Register Page
router.get("/register", (req, res) => {
  res.render("index");
});

router.post("/create", async (req, res) => {
  let { username, email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (user) {
    // return res.send("Already a User Here");
    return res.redirect("/register?message=Email is Already in USe&type=error");
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      await userModel.create({ username, email, password: hash });

      let token = jwt.sign({ email }, "secret");
      res.cookie("token", token);
      res.redirect("/login");
    });
  });

  // console.log("account creayed");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.redirect("/login?message=User not found&type=error");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.redirect("/login?message=Invalid password&type=error");
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, jwtKey, { expiresIn: "24h" });

    // Set token in cookies
    res.cookie("token", token, { httpOnly: true });

    // Redirect with success message
    res.redirect("/?message=Login successful&type=success");
  } catch (error) {
    console.error("Login error:", error);
    res.redirect("/login?message=Something went wrong&type=error");
  }
});

// Logout
router.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

module.exports = router;
