const mongoose = require("mongoose")
objectId = mongoose.schema.types.objectId

const newSchema = new mongoose.schema({
      courseId: {type: objectId, ref: "courses"},
      content: [{title: String, videoLink: String}]
})
