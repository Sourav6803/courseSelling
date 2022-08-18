const mongoose = require("mongoose")
objectId = mongoose.schema.types.objectId

const newSchema = new mongoose.schema({
      review: {type: String, trim: true},
      courseId: {type: objectId, ref: "courses"},
      userId: {type: objectId, ref: "courses"},
      rating: String



})

module.exports = mongoose.model('reviews', newSchema)