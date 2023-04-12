const mongoose = require("mongoose");

// Define article model schema
const articleSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    url: String,
    publishedAt: String,
  },
  { collection: "mvp" }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;