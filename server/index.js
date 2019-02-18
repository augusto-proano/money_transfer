const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const chalk = require('chalk')

const app = express()
module.exports = app

app.set('port', process.env.NODE_ENV || 3001)

//Logging middleware
app.use(morgan('dev'))

//Body parsing middleware
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

//Compresion middleware
app.use(compression())

//Api routes
app.use('/api', require('./api'))

// Static file-serving middleware
if (process.env.NODE_ENV === 'production')
  app.use(express.static(path.join(__dirname, '..', 'public')))

app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${chalk.green(app.get('port'))}`)
})
