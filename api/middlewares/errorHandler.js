/**
 * Módulo de gerenciamento de erros para HTTP.
 * 
 * @module middlewares/errorHandler
 */

var createError = require('http-errors')

/**
 * Middleware para processamento de erros 404
 *
 * @param {*} _req - Request, sem utilidade
 * @param {*} _res - Response, sem utilidade
 * @param {() => any} next - Callback
 * @see {@link https://expressjs.com/en/guide/writing-middleware.html#mw-fig}
 */
function notFoundHandler(_req, _res, next) {
  next(createError(404))
}

/**
 * Middleware para processar todos os erros. Envia um json
 * contendo uma messagem e um objeto erro (no development).
 * 
 * Status 500 por padrão.
 *
 * @param {Error} err - O erro informado
 * @param {*} req - Request
 * @param {*} res - Response
 * @param {() => void} _next - Callback, sem utilidade
 */
function errorHandler(err, req, res, _next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ message: err.message, error: res.locals.error });
}

module.exports = {
  notFoundHandler,
  errorHandler
}
