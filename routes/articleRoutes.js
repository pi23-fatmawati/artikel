const express = require("express");
const router = express.Router();
const articleController = require("../controller/articleController");

router.get("/artikel", articleController.getArticles);
router.get("/artikel/:id", articleController.getArticleById);

module.exports = router;
