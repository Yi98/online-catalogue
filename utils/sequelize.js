const dotenv = require("dotenv");

const { Sequelize } = require("sequelize");

const ProductModel = require("../models/Product");
const ShopModel = require("../models/Shop");
const UserModel = require("../models/User");

dotenv.config({ path: "../config/.env" }); // have to put it at the top so that the db conenction can be used on api

const sequelize = new Sequelize(process.env.DB_URL);

const Product = ProductModel(sequelize, Sequelize);
const Shop = ShopModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

User.hasMany(Shop);
Shop.belongsTo(User);

Shop.hasMany(Product);
Product.belongsTo(Shop);

module.exports = {
  Product,
  Shop,
  User,
};