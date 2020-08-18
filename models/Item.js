const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:ny339383@localhost:5432/online_catalogue",
  {
    dialect: "postgres",
  }
);

const Item = sequelize.define("Item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.NUMBER,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Item;
