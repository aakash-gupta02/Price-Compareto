const { isLoggedIn } = require("../middlewares/loggedINMidd");
const express = require("express");
const moment = require("moment");

const userModel = require("../models/user");
const postModel = require("../models/post");
const { isAdmin } = require("../middlewares/adminMidd");


const phoneData = require("../phoneData");
const phoneData1 = require("../public/phoneData");

const router = express.Router();

// // makes admin
// async function makeAdmin() {
//   await userModel.updateOne({ email: "aakash@gmail.com" }, { isAdmin: true });
//   console.log("Admin user updated!");
// }

// makeAdmin();

router.get("/admin", isLoggedIn, isAdmin, async (req, res) => {
  const user1 = await userModel.find();
  // console.log(user);
  // let reviews = await postModel.find().populate("user", "username"); // Fetch only user name
  let reviews = await postModel.find().populate("user", "username"); // Fetch only user name

  // Get the total count of users, reviews, and phones
  const userCount = await userModel.countDocuments();
  const reviewCount = await postModel.countDocuments();
  const phoneCount = phoneData1.phones.length; // Since phones are in an array

  // Fetch recent users and reviews based on `date`
  const recentUsers = await userModel.find().sort({ date: -1 }).limit(3);
  const recentReviews = await postModel
    .find()
    .populate("user", "username")
    .sort({ date: -1 })
    .limit(3);

  // Format dates
  recentUsers.forEach(
    (user) => (user.formattedDate = moment(user.date).fromNow())
  );
  recentReviews.forEach(
    (review) => (review.formattedDate = moment(review.date).fromNow())
  );

  res.render("admin", {
    phone2: phoneData1.phones,
    user1: user1,
    reviews: reviews,
    userCount,
    reviewCount,
    phoneCount,
    recentUsers,
    recentReviews,
    admin: req.user,
  });
});

router.get("/admin/delete/:id", isLoggedIn, isAdmin, async (req, res) => {
  // let user = await usermodel.findOneAndDelete({email:req.params.id})
  let user = await userModel.findOneAndDelete({ _id: req.params.id });
  // postModel.findByIdAndDelete("67db0622ec36b346f7fabc45")

  console.log("user deleted");
  res.redirect("/admin");
});

router.get("/admin/deleteReview/:id", isLoggedIn, isAdmin, async (req, res) => {
  // let user = await usermodel.findOneAndDelete({email:req.params.id})
  await postModel.findOneAndDelete({ _id: req.params.id });

  console.log("post deleted");
  res.redirect("/admin");
});

router.get("/admin/toggleAdmin/:userId/:isAdmin", async (req, res) => {
  try {
    const userId = req.params.userId;
    const isAdmin = req.params.isAdmin === "true"; // Convert string to boolean

    await userModel.findByIdAndUpdate(userId, { isAdmin: !isAdmin });

    res.redirect("/admin"); // Stay on the same page
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
