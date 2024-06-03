const ProductsService = require('../services/productsService');
const productsService = new ProductsService();


class ProductsController {

  async getAll(_req, res) {
    try {
      const products = await productsService.getAll()
      return res.status(200).json(products)
    } catch (error) {
      return res.status(422).json({ error: 'Request Failed' })
    }
  }

  async getById(req, res) {
    const { id } = req.query

    if (!id) {
      return res.status(422).json({ error: 'Invalid parameters' })
    }

    try {
      const product = await productsService.getById(id)
      return res.status(200).json(product)
    } catch (error) {
      return res.status(422).json({ error: 'Request Failed' })
    }
  }

  async register(req, res) {
    const { name, price, quantity } = req.body

    if (!name || !price || !quantity) {
      return res.status(400).json({ error: 'Invalid body request' })
    }

    try {
      const productRegistered = await productsService.register(req.body)
      return res.status(201).send({ id: productRegistered, product: req.body })
    } catch (error) {
      return res.status(422).json({ error: 'Request Failed' })
    }
  }

  async delete(req, res) {
    const { id } = req.query

    if (!id) {
      return res.status(422).json({ error: 'Invalid parameters' })
    }

    try {
      await productsService.delete(id)
      return res.status(204).end()
    } catch (error) {
      return res.status(422).json({ error: 'Delete Failed' })
    }
  }

  async update(req, res) {
    const { id } = req.query
    const { name, price, quantity } = req.body

    if (!id) {
      return res.status(422).json({ error: 'Invalid parameters' })
    }

    if (!name || !price || !quantity) {
      return res.status(400).json({ error: 'Invalid body request' })
    }

    try {
      await productsService.update(id, req.body)
      return res.status(200).json({ message: 'Product updated' })
    } catch (error) {
      return res.status(422).json({ error: 'Update Error' })
    }
  }
}

module.exports = new ProductsController()