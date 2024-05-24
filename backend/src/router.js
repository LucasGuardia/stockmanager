const express = require('express')
const router = express.Router()
const { getAll } = require('./controllers/productsController')

router.get('/products', getAll)

module.exports = router