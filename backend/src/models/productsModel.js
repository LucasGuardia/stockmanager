const { sql } = require('./db')

const getAllProducts = async () => {
  const products = await sql`SELECT * FROM produtos`
  return products
}

module.exports = {
  getAllProducts
}