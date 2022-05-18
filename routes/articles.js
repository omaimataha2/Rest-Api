const express = require('express'); 
const { createArticle, deleteArticle, getAllArticles, getArticle, updateArticle } = require('../controllers/article.js')

const router = express.Router()


router.post("/", createArticle)
router.put("/:id", updateArticle)
router.delete("/:id", deleteArticle)
router.get("/:id", getArticle)
router.get("/", getAllArticles)

module.exports = router