const express = require("express");
const axios = require("axios");
const router = express.Router();
const Article = require("../model/model")
const { v4: uuidv4 } = require("uuid");


router.get("/articles", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${req.query.query}&apiKey=${process.env.NEWSAPI_KEY}`
    );
    const articles = response.data.articles.map((article) => ({
      id: article._id,
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
    }));
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.post("/post-articles", async (req, res) => {
  try {
    const article = new Article({
      _id: uuidv4(), // generate a unique ID for the article
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      publishedAt: req.body.publishedAt,
    });
    await article.save();
    res.status(201).send("Article saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.get("/saved-articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.delete("/saved-articles/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.send("Article deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
