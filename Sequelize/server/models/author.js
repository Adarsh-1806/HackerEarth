const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Author = sequelize.define("author", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  serName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.TEXT,
  },
});

module.exports = Author;
