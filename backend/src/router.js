const { Router } = require('express')
const router = Router()
const ProductsController = require('./controllers/productsController')

router.get('/products', ProductsController.getAll)
router.get('/product', ProductsController.getById)
router.post('/product', ProductsController.register)
router.put('/product', ProductsController.update)
router.delete('/product', ProductsController.delete)

module.exports = router
