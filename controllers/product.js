const ProductService = require("../services/product");

exports.createProduct = async (req, res) => {
  try {
    const product = await ProductService.createProduct(req.body);

    res.redirect("/products");
  } catch (error) {
    console.log(error);

    res.json({ message: "Failed to create product" });
  }
};
