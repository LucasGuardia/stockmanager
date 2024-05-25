const { Router } = require('express')
const router = Router()
const ProductsController = require('./controllers/productsController')

router.get('/products', ProductsController.getAll)
router.post('/product', ProductsController.register)

module.exports = router
