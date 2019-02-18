const router = require('express').Router()
module.exports = router

router.use('/bhdleon', require('./bhdleon'))

router.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
})
