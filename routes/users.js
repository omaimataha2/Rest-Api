const express = require('express');

const { createUser, deleteUser, getAllUsers, getUser, suspendUser, unsuspendUser } = require('../controllers/user.js')

const router = express.Router()


router.post("/", createUser)
router.post("/:id/suspend", suspendUser)
router.post("/:id/unsuspend", unsuspendUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.get("/", getAllUsers)

module.exports = router