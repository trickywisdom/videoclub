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

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  favoriteMovies: [],  //added this for saving movies under a user
});

const Movie = mongoose.model("Movie", movieSchema);

const User = mongoose.model("User", userSchema);

module.exports = { Movie, User };
