const { Product } = require("../utils/sequelize");

exports.getProduct = () => {};

exports.getProducts = async (shopId) => {
  const products = await Product.findAll({
    where: { ShopId: shopId },
    order: [["createdAt"]],
  });

  return products;
};

exports.createProduct = async (data) => {
  const product = await Product.create({
    name: data.name,
    price: data.price,
    imageUrl: data.imageUrl,
    ShopId: data.ShopId,
  });

  return product;
};

exports.editProduct = async (data) => {
  const updatedProduct = await Product.update(data, {
    where: {
      id: data.id,
    },
  });

  return updatedProduct;
};

exports.deleteProduct = async (id) => {
  const deletedProduct = await Product.destroy({ where: { id } });

  return deletedProduct;
};
