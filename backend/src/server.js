const app = require('./app')
require('dotenv').config()
const { openDb } = require('./configDB')

const PORT = process.env.PORT || 3333

openDb()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))