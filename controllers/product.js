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
