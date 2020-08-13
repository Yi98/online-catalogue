const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres::memory:");

const Shop = sequelize.define("Shop", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Shop;
