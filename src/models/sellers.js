const mongoose = require("mongoose")
objectId = mongoose.schema.types.objectId

const newSchema = new mongoose.schema({
      name: { 
        type: String,
        required: true,
        trim: true,
        minlength: 3
      },
      phone: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String, required: true},
      address: String,
      revenue: Number,
      totalCourses: Number,
      marchantId: {type: String}
      
      //overallRating: Number
      //courses: [{title: {type: String}, courseId: {type: objectId, ref: "courses"}}]



})
module.exports = mongoose.model('sellers', newSchema)