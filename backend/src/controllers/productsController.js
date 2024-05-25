const Products = require("../models/productsModel")
const productsModel = Products

class ProductsController {
  async getAll(_req, res) {
    try {
      const products = await productsModel.getAll()
      return res.status(200).json(products)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to search products' })
    }
  }

  async register(req, res) {
    try {
      await productsModel.register(req.body)
      return res.status(201).json({ message: 'Product registered' })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to register product' })
    }
  }
}

module.exports = new ProductsController()