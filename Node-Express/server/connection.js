const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "adarshkumarmoradiya",
  password: "Simform@123",
  database: "adarshdb",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Database Connected..");
});
module.exports = db;
