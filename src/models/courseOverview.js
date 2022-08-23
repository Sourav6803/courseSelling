const mongoose = require("mongoose")
objectId = mongoose.Schema.Types.ObjectId

const newSchema = new mongoose.Schema({
      courseId: {type: objectId, ref: "courses"},
      content: [{title: String, videoLink: String}]
})

module.exports = mongoose.model(" courseOverview", newSchema)