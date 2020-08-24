const Product = require("../models/Product");

exports.getProduct = () => {};

exports.getProducts = async (shopId) => {
  const products = await Product.findAll({ where: { ShopId: shopId } });

  return products;
};

exports.createProduct = async (data) => {
  const product = await Product.create({
    name: data.name,
    price: data.price,
    imageUrl: data.image,
    ShopId: data.ShopId,
  });

  return product;
};

exports.updateProduct = () => {};

exports.deleteProduct = () => {};
