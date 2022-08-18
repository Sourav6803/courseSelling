const jwt = require("jsonwebtoken")

const createToken = async function(user){
    let id = user.toString()
    let token = jwt.sign({_id: id}, "course-selling", {expiresIn: "1h"})
}