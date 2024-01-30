const { artikel } = require("../models");

// Controller to get all articles
const getArticles = async (req, res) => {
  try {
    const articles = await artikel.findAll();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get a specific article by ID
const getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await artikel.findByPk(id);
    if (!article) {
      res.status(404).json({ error: "Article not found" });
      return;
    }
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getArticles,
  getArticleById,
};
