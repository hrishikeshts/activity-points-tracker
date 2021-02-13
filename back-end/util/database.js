const Sequelize = require("sequelize");
const sequelize = new Sequelize("design", "root", "appukuttan703453", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
