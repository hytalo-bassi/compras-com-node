const mongoose = require('mongoose')

const { username, pwd, host, name, authSource } = {
  username: 'comno',
  pwd: 'inseguro',
  host: 'localhost',
  name: 'comno',
  authSource: 'test'
}

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
    pass: pwd,
    dbName: name,
    authSource: authSource ?? 'admin'
  })
}

module.exports = connect
