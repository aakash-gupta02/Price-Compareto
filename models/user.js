const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

mongoose
  .connect(
    process.env.MONGO_KEY
  )
  .then(() => {
    console.log("Connnected");
  });


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false }, // Add this field
  date: {
    type: Date,
    default: Date.now,
  },
  profile: {
    type: String,
    default: "default.png",
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
