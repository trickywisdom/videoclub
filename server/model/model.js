const mongoose = require("mongoose");

// Define article model schema
const movieSchema = new mongoose.Schema(
  {
    imdbID: String,
    Title: String,
    Year: String,
    Genre: String,
    Plot: String,
    Poster: String,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
