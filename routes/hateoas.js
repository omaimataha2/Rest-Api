const express = require('express');

const router = express.Router()


router.get("/", (req, res, next) => {
        res.status(201).json({
            "Get all users ": "http://localhost:8888/api/users/",
            "Get specific user ": "http://localhost:8888/api/users/{:id}",
            "Get all Articles ": "http://localhost:8888/api/articles/",
            "Get specific Article ": "http://localhost:8888/api/articles/{:id}",
            "Get all Comments ": "http://localhost:8888/api/comments/{:userId}",
            "Get specific Comment ": "http://localhost:8888/api/comments/find/{:id}",
        })
})


module.exports = router