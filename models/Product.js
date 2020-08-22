const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  showOnMenu: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Product;
