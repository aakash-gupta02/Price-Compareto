const { isLoggedIn } = require("../middlewares/loggedINMidd");
const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
  res.render("main", { user: req.user || null });
});


module.exports = router;
