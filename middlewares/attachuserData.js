const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user")


const dotenv = require("dotenv")

dotenv.config()

const jwtKey = process.env.JWT_SECRET 

async function attachUserData(req, res, next) {
  if (req.cookies.token) {
    try {
      // Verify the token
      const data = jwt.verify(req.cookies.token, jwtKey);

      // Fetch user data from MongoDB
      const user = await userModel.findById(data.id);

      // Attach user data to the request object
      req.user = user;
    } catch (error) {
      console.error("Error attaching user data:", error);
    }
  } else {
  }
  next(); // Always proceed to the next middleware/route
}




module.exports = {attachUserData}