const mongoose = require("mongoose")
objectId = mongoose.Schema.Types.ObjectId

const newSchema = new mongoose.Schema({
      review: {type: String, trim: true},
      courseId: {type: objectId, ref: "courses"},
      userId: {type: objectId, ref: "courses"},
      rating: String



})

module.exports = mongoose.model('reviews', newSchema)