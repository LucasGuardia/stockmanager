// const connection = require('./connection')

const getAll = async () => {
  const products = [
    {
      id: 1,
      name: 'Produto 1',
      description: 'Descrição do produto 1',
      price: 100,
      quantity: 10,
      category: 'Categoria 1'
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Descrição do produto 2',
      price: 200,
      quantity: 20,
      category: 'Categoria 2'
    },
    {
      id: 3,
      name: 'Produto 3',
      description: 'Descrição do produto 3',
      price: 300,
      quantity: 30,
      category: 'Categoria 3'
    }
  ]
  return products
}

module.exports = {
  getAll
}