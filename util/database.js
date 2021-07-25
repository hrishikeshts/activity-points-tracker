const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER || "root", process.env.DB_PASS, {
    dialect: "mysql",
    host: process.env.DB_HOST || "localhost",
});

module.exports = sequelize;
