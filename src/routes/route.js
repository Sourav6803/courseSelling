const express = require('express');
const router = express.Router();
const ct = require("../controllers/userController.js")

////  users Apis ////

router.post("/newUser", ct.createUser)

router.get("/user", ct.getUsers)

module.exports = router;