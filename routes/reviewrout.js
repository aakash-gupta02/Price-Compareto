const { isLoggedIn } = require("../middlewares/loggedINMidd");
const express = require("express");

const userModel = require("../models/user");
const postModel = require("../models/post");

const router = express.Router();

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

router.get("/review", async (req, res) => {
  try {
    let reviews = await postModel.find().populate("user", "name"); // Fetch only user name

    res.render("review", { user: req.user, reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.redirect("/");
  }
});

router.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await postModel.find().populate("user", "username");
    // console.log("Populated Reviews:", reviews);

    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

router.post("/api/reviews", async (req, res) => {
  try {
    const { title, content, rating } = req.body;

    const newReview = new postModel({
      title,
      content,
      rating,
      user: req.user._id, // Attach the logged-in user's ID
    });

    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ error: "Failed to submit review" });
  }
});

//  Create review
router.post("/reviewData", isLoggedIn, async (req, res) => {
  try {
    let { content, reviewTitle, rating } = req.body;

    // Ensure req.user is fully populated
    if (!req.user) {
      return res.status(401).send("User not found");
    }

    // Create the post
    let post = await postModel.create({
      content,
      reviewTitle,
      rating,
      user: req.user._id,
    });

    console.log("Created Post:", post);

    // Ensure `post` array exists before pushing
    if (!req.user.post) {
      req.user.post = [];
    }

    req.user.post.push(post._id);
    await req.user.save();

    res.redirect("/review");
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
