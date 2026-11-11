const mysql = require("mysql2")

const teto = mysql.createPool({
    host: `localhost`,
    user: `root`,
    password: ``,
    port : 3306,
    database: `alien`
})

module.exports = teto.promise()


