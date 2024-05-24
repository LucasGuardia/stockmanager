const { getAllProducts } = require('../models/productsModel')

const getAll = async (_request, response) => {
  const products = await getAllProducts()
  return response.status(200).json(products)
}

module.exports = {
  getAll
}