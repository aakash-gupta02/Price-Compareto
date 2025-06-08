const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const airoutes = require("./routes/ai,routes");
const authroutes = require("./routes/authRoutes");
const pageroutes = require("./routes/pages.routes");
const homeroutes = require("./routes/homepageroutes");
const reviewroutes = require("./routes/reviewrout");
const adminroutes = require("./routes/adminroutes");
const { attachUserData } = require("./middlewares/attachuserData");


const app = express();



// Middleware

app.use(express.static("public")); 
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(attachUserData);

app.use("/", airoutes);
app.use("/", authroutes);
app.use("/", pageroutes);
app.use("/", homeroutes);
app.use("/", reviewroutes);
app.use("/", adminroutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
