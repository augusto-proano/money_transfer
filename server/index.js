const Client = require('ssh2-sftp-client');
const sftp = new Client();
const fs = require('fs')
const dummyData = require('./dummyData')

// Creation of txt file
const date = new Date()
const fullDate = date.toLocaleString()
let hour = `${date.getHours()}:${date.getMinutes()}`
if(hour.length <= 4) hour = `${hour.slice(0,3)}0${hour.slice(3)}`

const values = Object.values(dummyData).map(val => val.toString())
values.splice(6,0,fullDate,hour)

let str = []
values.forEach(val => {
    if(val.includes(' ') || val.includes(', ')) val = `"${val}"`;
    str.push(val)
})
str = str.join(',')

const txtFile = fs.createWriteStream(`./server/transactions/${dummyData.numCuentaBanco}_test.txt`)
txtFile.write(str)
txtFile.end()

//Connection to SFTP server
sftp.connect({
    host: 'sftp.bhdleon.com.do',
    port: 22,
    username: 'sftp_dtc',
    password: 'mae!Er1m-]2.',
    algorithms: {
        cipher: [
          'aes128-ctr',
          'aes192-ctr',
          'aes256-ctr',
          'aes128-gcm',
          'aes128-gcm@openssh.com',
          'aes256-gcm',
          'aes256-gcm@openssh.com',
          'aes256-cbc'
        ]
      }
})
.then(() => sftp.fastPut(`./server/transactions/${dummyData.numCuentaBanco}_test.txt`, `envios/${dummyData.numCuentaBanco}_test.txt`))
.then((data) => console.log(data))
.catch((err) => console.log(err));