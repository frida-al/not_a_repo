const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "planta",
  password: "Girasol.9910",
});

module.exports = pool.promise();
