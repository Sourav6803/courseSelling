const { findById } = require("../models/reviews")
const userModel = require("../models/users")


const createUser = async function(req, res){
    let data = req.body
    let result = await userModel.create(data)
    return res.status(201).send({status: true, data: data})
}

const getUsers = async function(req, res){
      
      let data = await userModel.find()
      return res.status(200).send({status: true, data: data})
      
}

const updateUser = async function(req, res){
    let data = req.body
    let id = req.params.userId
    let user = await userMOdel.findById(id)
    if(!user){
        return res.status(400).send({status: false, error: "Id is invalid"})
    }
    let result = await userModel.findOneAndUpdate({_id: id}, data, {new: true})
    return res.status(201).send({status: true, data: result})
}

const logUser = function async(req, res){
    const {email, pass} = req.body
    let user = userModel.findOne({email: email, password: pass})
    if(!user) {
        return res.status(400).send({status: false, error: "User is Invalid"})
    }
    let token = createToken(user._id)
    res.header("Authorization :", token)
    res.send(token)
}


module.exports = {createUser, getUsers, logUser, updateUser}