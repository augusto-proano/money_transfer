const fs = require('fs')
const { sftpServer, sftp } = require('./sftpServer')

const createAndSendBHD = tr => {
  // Creation of txt file

  // This logic might be used later on

  // const date = new Date()
  // const dateFixer = dateMethod =>
  //   dateMethod.toString().length > 1 ? dateMethod : `0${dateMethod}`

  // const year = date.getFullYear()
  // const month = dateFixer(date.getMonth() + 1)
  // const day = dateFixer(date.getDate())
  // const hour = dateFixer(date.getHours())
  // const minutes = dateFixer(date.getMinutes())

  // const fullDate = `${year}${month}${day}`
  // const time = `${hour}:${minutes}`

  // values.splice(6, 0, fullDate, time)

  const values = Object.values(tr).map(val => val.toString())

  let str = []
  values.forEach(val => {
    if (val.includes(' ') || val.includes(', ')) val = `"${val}"`
    str.push(val)
  })
  str = str.join(',')

  const { sucOrigenEnvio, secueEnvio, fullDate } = tr
  const txtFile = fs.createWriteStream(
    `./server/transactions/TR_${sucOrigenEnvio}${secueEnvio}_${fullDate}_test.txt`
  )
  txtFile.write(str)
  txtFile.end()

  // Upload file to host
  sftpServer
    .then(() =>
      sftp.fastPut(
        `./server/transactions/TR_${sucOrigenEnvio}${secueEnvio}_${fullDate}_test.txt`,
        `envios/TR_${sucOrigenEnvio}${secueEnvio}_${fullDate}_test.txt`
      )
    )
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

module.exports = createAndSendBHD
