const mongoose = require("mongoose")
objectId = mongoose.Schema.Types.ObjectId

const newSchema = new mongoose.Schema({
    title: {type: String, trim: true, required: true},
    description: {type: String, require: true, trim: true},
    isDeleted: {type: Boolean, default: false},
    coursePic1: {type: String, trim: true},
    sellerId: { type: objectId, 
                ref: "sellers"
              },
    //reviewsId: {type: objectId, ref: "reviews"},
    totalReviews: {type: Number, default: 0},
    duration: String,
    totalPurchased: {type: Number, },
    price: Number,
    



}, {timestamps: true})
module.exports = mongoose.model('courses', newSchema)