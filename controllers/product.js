const ProductService = require("../services/product");
const ShopService = require("../services/shop");

exports.createProduct = async (req, res) => {
  try {
    const shop = await ShopService.getUserShop(req.session.userId);

    req.body.ShopId = shop.id;
    const product = await ProductService.createProduct(req.body);

    res.redirect("/products");
  } catch (error) {
    console.log(error);

    res.json({ message: "Failed to create product" });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const data = { ...req.body, id: req.params.id };
    await ProductService.editProduct(data);

    res.json({ refresh: true, message: "Product updated" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to edit product" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await ProductService.deleteProduct(req.params.id);

    res.json({ refresh: true, message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Failed to delete product" });
  }
};
