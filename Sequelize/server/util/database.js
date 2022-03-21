const Sequelize = require("sequelize");

const db = new Sequelize("blogs", "adarshkumarmoradiya", "Simform@123", {
  dialect: "mysql",
  host: "localhost",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = db;
