const Shop = require("../models/Shop");

exports.getShop = () => {};

exports.getShops = async () => {
  const shops = await Shop.findAll();

  return shops;
};

exports.createShop = async (data) => {
  const product = await Shop.create({ name: data.name });

  return product;
};

exports.updateShop = () => {};

exports.deleteShop = () => {};
