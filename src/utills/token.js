const jwt = require("jsonwebtoken")

const createToken = async function(user){
    let id = user.toString()
    let token = jwt.sign({_id: id}, "course-selling", {expiresIn: "1h"})
    return token
}

const verifyToken = function(token){
    let decode = jwt.verify(token, "course-selling")
    return decode

}