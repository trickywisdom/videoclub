const express = require("express");
const axios = require("axios");
const router = express.Router();
const Movie = require("../model/model");


router.get("/movie", async (req, res) => {
  try {
    const title = req.query.title;
    const response = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_API_KEY}/${title}`
    );
    const movieData = response.data;
    ({
      id: movieData.id,
      title: movieData.title,
      year: movieData.year,
      genres: movieData.genres,
      plot: movieData.plot,
      image: movieData.image,
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
      
      id: req.body.id,
      title: req.body.title,
      year: req.body.year,
      genres: req.body.genres,
      plot: req.body.plot,
      image: req.body.image
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
