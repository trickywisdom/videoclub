// The purpose of this code is to define two Mongoose schemas and create two Mongoose models, User and Quote, which can be used in other parts of the application. The userSchema includes fields for username, password, and favoriteMovies. The quoteSchema includes fields for quote, character, quoteFrom, actor, and year.

const mongoose = require("mongoose");

// Define model schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  favoriteMovies: [], //added this for saving movies under a user
});

const quoteSchema = new mongoose.Schema({
  quote: String,
  character: String,
  quoteFrom: String,
  actor: String,
  year: Number,
});

const User = mongoose.model("User", userSchema);

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = { User, Quote };
