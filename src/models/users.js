const mongoose = require("mongoose")
objectId = mongoose.Schema.Types.ObjectId

const newSchema = new mongoose.Schema({
      name: {type: String, required: true, trim: true},
      phone: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String, required: true},
      purchased: [{type: objectId, ref: "courses"}]




}, {timestamps: true})
module.exports = mongoose.model("users", newSchema)