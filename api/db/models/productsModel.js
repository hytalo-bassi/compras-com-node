const mongoose = require('mongoose')
const { ProductsSchema } = require('../schemas')

const ProductsModel = mongoose.model('produtos', ProductsSchema)

module.exports = { ProductsModel }
