const dummyData = require('../dummyData')
const createAndSendBHD = require('../utils')
const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    dummyData.forEach(tr => createAndSendBHD(tr))
    res.send('Files were successfully uploaded')
  } catch (err) {
    console.error(err)
  }
})
