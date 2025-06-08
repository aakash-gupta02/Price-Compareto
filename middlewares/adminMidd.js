const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user")



const dotenv = require("dotenv")

dotenv.config()

const jwtKey = process.env.JWT_SECRET 


async function isAdmin(req, res, next) {
  if (!req.user || !req.user.isAdmin) {
    return res.redirect("/login");
  }
  next();
}



module.exports = {isAdmin}