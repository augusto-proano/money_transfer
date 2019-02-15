const dummyData = require('./dummyData')
const createAndSendBHD = require('./utils')

dummyData.forEach(tr => createAndSendBHD(tr))
