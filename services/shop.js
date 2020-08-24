const Shop = require("../models/Shop");

exports.getShop = async (id) => {
  const shop = await Shop.findOne({ where: { id } });

  return shop;
};

exports.getUserShop = async (userId) => {
  const shop = await Shop.findOne({
    where: { UserId: userId },
  });

  return shop;
};

exports.getShopByName = async (name) => {
  const shop = await Shop.findOne({ where: { name } });

  return shop;
};

exports.getShops = async () => {
  const shops = await Shop.findAll();

  return shops;
};

exports.createShop = async (data) => {
  const product = await Shop.create({
    name: data.name,
    address: data.address,
    UserId: data.UserId,
  });

  return product;
};

exports.updateShop = () => {};

exports.deleteShop = () => {};
