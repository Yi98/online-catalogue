const ProductService = require("../services/product");

exports.getLandingPage = (req, res) => {
  res.render("landing");
};

exports.getSignupPage = (req, res) => {
  res.render("signup");
};

exports.getLoginPage = (req, res) => {
  res.render("login");
};

exports.getShopPage = (req, res) => {
  res.render("shop");
};

exports.getProductPage = async (req, res) => {
  try {
    const products = await ProductService.getProducts();
    res.render("products", { products });
  } catch (error) {
    console.log(error);
  }
};

exports.getMenuPage = (req, res) => {
  res.render("menu");
};

exports.getErrorPage = (req, res) => {
  res.render("404");
};
