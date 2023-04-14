const express = require("express");
const axios = require("axios");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Movie = require("../model/model");
const Usedmovie = require("../model/model")

let saltRounds = Number(process.env.SALTY_ROUNDS);

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

// SIGN UP router and controller
router.post("/signup", async (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      return res.send({ msg: "Both username and password are required" });
    }
    let userFound = await Usedmovie.findOne({ username });
    if (userFound) {
      return res.send({ msg: "username already exists" });
    } else {
      let hashedPassword = await bcrypt.hash(password, saltRounds);
      let newUser = await Usedmovie.create({
        username,
        password: hashedPassword,
        // HERE maybe we'll need the favourite movies empty or null
      });
      return res.send({ msg: "Registered successfully. Welcome!", newUser });
    }
  } catch (error) {
    res.status(500).json({ msg: "Cannot register. Please try again later." });
  }
});

// LOGIN router and controller
router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      return res.send({ msg: "Both username and password are required" });
    }
    let userFound = await Usedmovie.findOne({ username });
    if (!userFound) {
      return res.send({ msg: "Invalid username" });
    } else {
      let validatePassword = await bcrypt.compare(password, userFound.password);
      if (!validatePassword) {
        return res.send({ msg: "Incorrect password" });
      }
      let token = jwt.sign(
        { userId: userFound._id, username: userFound.username },
        process.env.TOKEN_PRIVATE_KEY
      );
      return res.send(token);
    }
  } catch (error) {
    res.status(500).send({ msg: "Cannot login, try later", error });
  }
});

module.exports = router;
