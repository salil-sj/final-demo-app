const mysql = require('mysql2')


//connection pool 
// which will be used for opening and closing connection with mysql
const pool = mysql.createPool({
    host: 'demodb',
    user: 'root',
    password: 'root' , 
    database: 'DemoDB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port:3309
    
  })

  module.exports = pool