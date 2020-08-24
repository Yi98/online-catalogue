const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const Shop = require("./Shop");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

Shop.hasMany(Product);
Product.belongsTo(Shop);

module.exports = Product;
