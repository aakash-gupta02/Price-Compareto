const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user")



const dotenv = require("dotenv")

dotenv.config()

const jwtKey = process.env.JWT_SECRET 


async function isLoggedIn(req, res, next) {
  if (!req.cookies.token) {
    console.log("No token found, redirecting to login.");
    // return res.redirect("/login");
    return res.redirect("/login?message=Must Login or Register&type=error");
  }

  try {
    let data = jwt.verify(req.cookies.token, jwtKey); // Verify JWT

    

    let user = await userModel.findOne({ _id: data.id });

    if (!user) {
      console.log("User not found, redirecting to login.");
      // return res.redirect("/login");
      return res.redirect("/login?message=Must Login or Register&type=error");
    }

    req.user = user; // Assign full Mongoose user document
    next();
  } catch (error) {
    console.log("Auth Error:", error);
    // res.redirect("/login");
    return res.redirect(
      "/login?message=You must login to access that page&type=error"
    );
  }
}


module.exports = {isLoggedIn}