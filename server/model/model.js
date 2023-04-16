const mongoose = require("mongoose");

// Define article model schema
const movieSchema = new mongoose.Schema({
  id: String,
  title: String,
  year: String,
  genres: String,
  plot: String,
  image: String         

});

const quoteSchema = new mongoose.Schema({
  quote: String,
  character: String,
  quoteFrom: String,
  actor: String,
  year: Number,
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  favoriteMovies: [],  //added this for saving movies under a user
});

const Movie = mongoose.model("Movie", movieSchema);

const User = mongoose.model("User", userSchema);

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = { Movie, User, Quote };
