const mongoose = require("mongoose")
objectId = mongoose.schema.types.objectId

const newSchema = new mongoose.schema({
    title: {type: String, trim: true, required: true},
    description: {type: String, require: true, trim: true},
    isDeleted: {type: Boolean, default: false},
    coursePic1: {type: String, trim: true},
    sellerId: { type: objectId, 
                ref: "sellers"
              },
    crOverviewId: {type: objectId, ref: "courseOverview"},
    reviewsId: {type: objectId, ref: "reviews"},
    totalReviews: {type: Number, default: 0},
    duration: String,
    totalPurchased: {type: Number, },
    price: Number,
    



}, {timestamps: true})
module.exports = mongoose.model('courses', newSchema)