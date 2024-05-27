const Products = require("../models/productsModel")
const productsModel = Products

class ProductsController {

  async getAll(_req, res) {
    try {
      const products = await productsModel.getAll()
      return res.status(200).json(products)
    } catch (error) {
      return res.status(422).json({ error: 'Failed to search products' })
    }
  }

  async getById(req, res) {
    const { id } = req.query

    if (!id) {
      return res.status(400).json({ message: 'Invalid parameters' });
    }

    try {
      const product = await productsModel.getById(id)
      return res.status(200).json(product)
    } catch (error) {
      return res.status(422).json({ error: 'Failed to search product' })
    }
  }

  async register(req, res) {
    const { name, price, quantity } = req.body

    if (!name || !price || !quantity) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    try {
      const productRegistered = await productsModel.register(req.body)
      return res.status(201).send({ id: productRegistered })
    } catch (error) {
      return res.status(422).json({ error: 'Failed to register product' })
    }
  }

  async delete(req, res) {
    const { id } = req.query

    if (!id) {
      return res.status(400).json({ message: 'Invalid parameters' });
    }

    try {
      await productsModel.delete(id)
      return res.status(204).end()
    } catch (error) {
      return res.status(422).json({ error: 'Failed to delete product' })
    }
  }

  async update(req, res) {
    let { id } = req.query
    const { name, price, quantity } = req.body

    if (!id || !name || !price || !quantity) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    try {
      await productsModel.update(id, req.body)
      return res.status(200).json({ message: 'Product updated' })
    } catch (error) {
      return res.status(422).json({ error: 'Failed to update product' })
    }
  }


}

module.exports = new ProductsController()