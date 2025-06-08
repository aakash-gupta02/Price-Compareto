const { isLoggedIn } = require("../middlewares/loggedINMidd");
const express = require("express");

const phoneData = require("../phoneData");
const phoneData1 = require("../public/phoneData");

const router = express.Router();


router.get("/compare", isLoggedIn, (req, res) => {
  res.render("compare", { phone: phoneData.phone });
});

router.get("/product", isLoggedIn, (req, res) => {
  res.render("product", { phone: phoneData.phone });
});


router.get("/wishlist", isLoggedIn, (req, res) => {
  res.render("wishList");
});

router.get("/history", (req, res) => {
  res.render("history");
});

router.get("/about", (req, res) => {
  res.render("about");
});



module.exports = router;
