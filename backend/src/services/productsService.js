const Products = require("../models/productsModel")
const productsModel = Products

class ProductsService {
  async getAll() {
    return await productsModel.getAll()
  }

  async getById(id) {
    return await productsModel.getById(id)
  }

  async register(request) {
    return await productsModel.register(request)
  }

  async delete(id) {
    return await productsModel.delete(id)
  }

  async update(id, request) {
    return await productsModel.update(id, request)
  }
}

module.exports = new ProductsService();
