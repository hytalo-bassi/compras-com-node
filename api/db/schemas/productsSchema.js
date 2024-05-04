const { Schema } = require('mongoose')

const ProductsSchema = new Schema({
  quantidade: {
    type: Number,
    required: true,
    default: 0
  },
  preco: {
    type: Number,
    required: true,
    default: 1,
  },
  galeria: {
    type: [String],
    required: true,
    default: [],
  },
  nome: {
    type: String,
    required: true,
  }
})

module.exports = ProductsSchema
