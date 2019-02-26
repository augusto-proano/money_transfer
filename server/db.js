const sql = require('mssql')

const config = {
    server: 'localhost\\MSSQLSERVER',
    database: 'test_db',
    user: 'sa',
    password: 'muchasgracias',
    port: 1433
}

async () => {
    try {
        await sql.connect(config)
    } catch (err) {
        console.log(err)
    }
}

module.exports = sql

// sql.connect(config)
// .then(db => db.query`SELECT * FROM invoice`)
// .then(result => console.log("RESULT", result.recordset))
// .catch(err => console.log(err))