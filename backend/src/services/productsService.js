const Products = require("../models/productsModel")
const productsModel = Products

class ProductsService {
  async getAll() {
    try {
      return await productsModel.getAll()
    } catch (error) {
      throw new Error('Failed to search products');
    }
  }

  async getById(id) {
    if (!id) {
      throw new Error('Invalid parameters')
    }
    try {
      return await productsModel.getById(id)
    } catch (error) {
      throw new Error('Failed to search product')
    }
  }

  async register(request) {
    const { name, price, quantity } = request

    if (!name || !price || !quantity) {
      throw new Error('Invalid parameters')
    }
    try {
      return await productsModel.register(request)
    } catch (error) {
      throw new Error('Failed to register product')
    }
  }

  async delete(id) {
    if (!id) {
      throw new Error('Invalid parameters')
    }
    try {
      return await productsModel.delete(id)
    } catch (error) {
      throw new Error('Failed to delete product')
    }
  }

  async update(id, request) {
    const { name, price, quantity } = request

    if (!id || !name || !price || !quantity) {
      throw new Error('Invalid parameters')
    }
    try {
      return await productsModel.update(id, request)
    } catch (error) {
      throw new Error('Failed to update product')
    }
  }
}

module.exports = ProductsService;
