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

const usedmovieSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

const Usedmovie = mongoose.model("Usedmovie", usedmovieSchema);

module.exports = Movie;
module.exports = Usedmovie;
