/**
 * Módulo para comunicação com o banco de dados.
 * 
 * Exporta uma instância da classe ProductsDAO que não pode ser
 * modificada.
 * @module dao/products
 */
const { ProductsModel } = require('../models')

/**
 * Data Access Object (DAO) da tabela produtos.
 *
 * @class ProductsDAO
 * @param {mongoose.Model} model - O modelo do banco de dados.
 */
class ProductsDAO {
  constructor(model) {
    this.model = model
  }
  
  /**
   * Salva um produto no banco de dados.
   *
   * @async
   * @param {*} product - O produto.
   * @param {*} options - As opções para salvar.
   * @see {@link https://mongoosejs.com/docs/models.html#constructing-documents}
   * @memberof ProductsDAO
   */
  save(product, options) {
    return this.model.create(product, options)
  }

}

const produtos = new ProductsDAO(ProductsModel)

Object.freeze(produtos)
module.exports = produtos
