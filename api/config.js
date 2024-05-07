const { DB_HOST, DB_USER, DB_PASS, DB_AUTH, DB_NAME } = process.env

/**
 * Objeto de configurações.
 * @namespace config
 */
const config = {
  /**
   * Guarda configurações de banco de dados.
   * @type {object}
   * @memberof config
   */
  db: {
    username: DB_USER ?? 'comno',
    pass: DB_PASS ?? 'inseguro',
    host: DB_HOST ?? 'mongo',
    name: DB_NAME ?? 'comno',
    authSource: DB_AUTH ?? 'admin'
  }
}

module.exports = {
  config
}
