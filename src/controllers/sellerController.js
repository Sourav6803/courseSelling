const sellerModel = require('../models/sellers')


const createSeller = async function(req, res){
      let data = req.body

      let result = await sellerModel.create(data)
      return res.send(result)
}
module.exports.createSeller = createSeller