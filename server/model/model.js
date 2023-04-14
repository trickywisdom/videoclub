const mongoose = require("mongoose");

// Define article model schema
const movieSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    year: String,
    genres: String,
    plot: String,
    image: String,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
