const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const User = require("./User");

const Shop = sequelize.define("Shop", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Shop);
Shop.belongsTo(User);

module.exports = Shop;
