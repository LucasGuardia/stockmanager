const ProductsService = require('../services/productsService');
const productsService = new ProductsService();


class ProductsController {

  async getAll(_req, res) {
    try {
      const products = await productsService.getAll()
      return res.status(200).json(products)
    } catch (error) {
      return res.status(422).json({ error: 'Failed to search products' })
    }
  }

  async getById(req, res) {
    const { id } = req.query
    try {
      const product = await productsService.getById(id)
      return res.status(200).json(product)
    } catch (error) {
      return res.status(422).json({ error: error.message })
    }
  }

  async register(req, res) {
    try {
      const productRegistered = await productsService.register(req.body)
      return res.status(201).send({ id: productRegistered })
    } catch (error) {
      return res.status(422).json({ error: error.message })
    }
  }

  async delete(req, res) {
    const { id } = req.query

    try {
      await productsService.delete(id)
      return res.status(204).end()
    } catch (error) {
      return res.status(422).json({ error: error.message })
    }
  }

  async update(req, res) {
    let { id } = req.query

    try {
      await productsService.update(id, req.body)
      return res.status(200).json({ message: 'Product updated' })
    } catch (error) {
      return res.status(422).json({ error: error.message })
    }
  }
}

module.exports = new ProductsController()