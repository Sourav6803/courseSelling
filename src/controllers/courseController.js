const courseModel = require("../models/courses")
const overView = require("../models/courseOverview")


const createCourse = async function(req, res){
      let data = req.body
      let result = await courseModel.create(data)
      return res.status(201).send({status: true, data: result})
}

const courseOverview = async function(req, res){
      let data = req.body
      let result = await overView.create(data)
      return res.status(201).send({status: true, data: result})

}


module.exports.createCourse = createCourse
module.exports. courseOverview =  courseOverview