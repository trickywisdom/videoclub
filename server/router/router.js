const express = require("express");
const axios = require("axios");
const router = express.Router();
const Movie = require("../model/model");


router.get("/movie", async (req, res) => {
  try {
    const title = req.query.title;
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${title}&apikey=${process.env.OMDB_API_KEY}`
    );
    const movieData = response.data;
    ({
      imdbID: movieData.imdbID,
      Title: movieData.Title,
      Year: movieData.Year,
      Genre: movieData.Genre,
      Plot: movieData.Plot,
      Poster: movieData.Poster,
    });

    res.json(movieData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/post-movies", async (req, res) => {
  try {
    const movie = new Movie({
      
      imdbID: req.body.imdbID,
      Title: req.body.Title,
      Year: req.body.Year,
      Genre: req.body.Genre,
      Plot: req.body.Plot,
      Poster: req.body.Poster
    });
    await movie.save();
    res.status(201).send("Movie saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.get("/saved-movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.delete("/delete-movies/:id", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.send("Movie deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
module.exports = router;
