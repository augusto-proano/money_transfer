const Client = require('ssh2-sftp-client');
const sftp = new Client();

//Connection to SFTP server
 const sftpServer = sftp.connect({
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

module.exports = {
  sftpServer,
  sftp
}