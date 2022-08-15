const express = require('express');
const router = express.Router();


router.get("/blogs", function(req, res){
    res.send({dev: "ghgg"})
})

module.exports = router;