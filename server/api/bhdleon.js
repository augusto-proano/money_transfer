const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  res.send('We hit bhdleon router')
})
