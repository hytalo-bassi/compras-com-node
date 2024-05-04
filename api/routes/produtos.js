const { produtos } = require('../db/dao')
var express = require('express')
var router = express.Router()

router.post('/novo', (req, res, next) => {
  console.log(req.body)
  produtos.save(req.body).then(() => {
    res.status(201).send()
  }).catch((err) => {
    next(err)
  })
})

module.exports = router
