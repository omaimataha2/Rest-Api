const express = require('express');
const { createComment, deleteComment, getAllComments, getComment, updateComment } = require('../controllers/comment.js'); 

const router = express.Router()


router.post("/:userId/:articleId", createComment)
router.get("/find/:id", getComment)
router.get("/:userId/", getAllComments)
router.put("/:id", updateComment)
router.delete("/:id/:articleId", deleteComment)


module.exports = router