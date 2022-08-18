const mongoose = require("mongoose")
objectId = mongoose.schema.types.objectId

const newSchema = new mongoose.schema({
      name: {type: String, required: true, trim: true},
      phone: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String, required: true},
      purchased: [{type: objectId, ref: "courses"}]




})