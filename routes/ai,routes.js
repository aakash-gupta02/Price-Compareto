const { isLoggedIn } = require("../middlewares/loggedINMidd");
const { generateContent } = require("../services/ai.service");
const express = require("express")

const router = express.Router();

router.get("/get-response", async (req, res) => {

  const prompt = req.query.prompt;

  if (!prompt) {
    return res.send("Prompt Is Required");
  }

  const response = await generateContent(prompt);

  res.send(response);
});

router.get("/aiSuggestion", isLoggedIn, (req, res) => {
  res.render("ai");
});

module.exports = router 