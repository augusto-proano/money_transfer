const createAndSendBHD = require('../utils')
const router = require('express').Router()
const db = require('mssql')
const dbConfig = require('../dbConfig')
const chalk = require('chalk')
module.exports = router

router.post('/', async (req, res, next) => {
  const { fullDate } = req.body
  console.log("FULLDATE", req.body)
  try {
    await db.connect(dbConfig)
    const { recordset } = await db.query`SELECT * FROM invoice WHERE fullDate=${fullDate}`
    console.log(chalk.magenta("RESULT"), recordset)
    db.close()
 
    recordset.forEach(tr => createAndSendBHD(tr))
    res.send('Files were successfully uploaded')
  } catch (err) {
    console.error(err)
    res.send(err)
  }
})
