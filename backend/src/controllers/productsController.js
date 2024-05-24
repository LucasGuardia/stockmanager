const productsModel = require('../models/productsModel')

const getAll = async (_request, response) => {
  const products = await productsModel.getAll()
  return response.status(200).json(products)
}

module.exports = {
  getAll,
}