const Product = require("../models/Product");

exports.getProduct = () => {};

exports.getProducts = async (shopId) => {
  const products = await Product.findAll({ where: { ShopId: shopId } });

  return products;
};

exports.createProduct = async (data) => {
  const product = await Product.create({
    name: data.name,
    description: data.description,
    price: data.price,
    imageUrl: data.image,
    showOnMenu: data.showOnMenu,
    ShopId: data.ShopId,
  });

  return product;
};

exports.updateProduct = () => {};

exports.deleteProduct = () => {};
