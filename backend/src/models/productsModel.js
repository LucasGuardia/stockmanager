const { sql } = require('./db')

class Products {
  async getAll() {
    const products = await sql`SELECT * FROM produtos`
    return products
  }

  async register(product) {
    await sql`INSERT INTO produtos (name, description, price, quantity, category) 
    VALUES (${product.name}, ${product.description}, ${product.price}, ${product.quantity}, ${product.category})`
  }
}

module.exports = new Products()