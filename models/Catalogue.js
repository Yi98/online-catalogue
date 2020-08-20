// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("postgres");

// const Catalogue = sequelize.define("Catalogue", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//   },
//   price: {
//     type: DataTypes.STRING,
//   },
//   imageUrl: {
//     type: DataTypes.STRING,
//   },
// });

// Catalogue.associate = (models) => {
//   Catalogue.hasMany(models.Item, { as: "items" });
// };

// Catalogue.associate = (models) => {
//   Catalogue.belongsTo(models.Shop, { as: "shop" });
// };

// module.exports = Catalogue;
