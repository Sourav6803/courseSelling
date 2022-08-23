const express = require('express');
const router = express.Router();
const ct = require("../controllers/userController.js")
const seller = require("../controllers/sellerController")
const course = require("../controllers/courseController")

////  users Apis ////

router.post("/newUser", ct.createUser)

router.get("/user", ct.getUsers)

router.post("/login", ct.logUser)

router.post("/createSeller", seller.createSeller)

router.post("/createCourse", course.createCourse)

router.post("/courseOverview", course.courseOverview)



module.exports = router;