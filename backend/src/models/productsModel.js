const { sql } = require('./db')

class Products {
  async getAll() {
    const products = await sql`SELECT * FROM produtos`
    return products
  }

  async getById(id) {
    const product = await sql`SELECT * FROM produtos WHERE id = ${id}`
    return product
  }

  async register(product) {
    const productRegistered = await sql`INSERT INTO produtos (name, description, price, quantity, category) 
    VALUES (${product.name}, ${product.description}, ${product.price}, ${product.quantity}, ${product.category})
    RETURNING id`
    return productRegistered[0].id
  }

  async delete(id) {
    await sql`DELETE FROM produtos WHERE id = ${id}`
  }

  async update(id, product) {
    await sql`UPDATE produtos SET name = ${product.name}, description = ${product.description}, price = ${product.price}, quantity = ${product.quantity}, category = ${product.category} WHERE id = ${id}`
  }

}

module.exports = new Products()