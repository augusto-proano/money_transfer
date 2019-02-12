const dummyData = require('./dummyData')
const createAndSend = require('./utils')

dummyData.forEach(tr => createAndSend(tr))