const { config } = require('../config')
const mongoose = require('mongoose')

const { username, pass, host, name, authSource } = config.db

const URI = `mongodb://${host}:27017/${name}` +
  `?retryWrites=true&w=majority` +
  `&directConnection=true`

/**
 * Conecta ao banco de dados.
 *
 * @async
 * @return {*}
 */
function connect() {
  return mongoose.connect(URI, {
    user: username,
    pass: pass,
    authSource: authSource
  })
}

module.exports = connect
